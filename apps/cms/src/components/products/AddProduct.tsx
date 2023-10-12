"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { storage } from "@/lib/firebase";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Category } from "database";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
const ProductSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  images: z.any(),
});

export default function AddProduct() {
  const [images, setImages] = useState<FileList | []>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [progress, setProgress] = useState(0);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        if (data.category) {
          setCategories(data.category);
          console.log(data.category);
        }
      } catch (error) {
        console.error("There was an error fetching the categories", error);
      }
    }

    fetchData();
  }, []);

  async function onSubmit(data: z.infer<typeof ProductSchema>) {
    setProgress(0.1);

    var imageUrls: string[] = [];
    if (images.length > 0) {
      imageUrls = [];
      for (let i = 0; i < images.length; i++) {
        await new Promise((resolve, reject) => {
          if (images[i].size > 5000000) {
            alert("Image size must be less than 5mb");
            return;
          }
          const storageRef = ref(storage, `products/${images[i].name}`);
          const uploadTask = uploadBytesResumable(storageRef, images[i]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              setProgress(progress);
              if (progress === 100) {
                setProgress(0);
              }
            },
            (error) => {
              console.error(error);
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
                imageUrls.push(downloadURL);
                resolve(downloadURL);
              });
            }
          );
        });
      }
      if (imageUrls.length > 0) {
        const res = await fetch("/api/products", {
          method: "POST",
          body: JSON.stringify({
            ...data,
            images: imageUrls,
            category: value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          alert("Product added successfully");
        } else {
          alert("There was an error adding the product");
        }
        form.reset();
      }
    } else {
      alert("Please upload at least 1 image");
      return;
    }
  }

  if (progress !== 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Progress value={progress} />
        <p className="text-2xl font-semibold">Uploading...</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? categories.find((framework) => framework.id === value)?.id
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {categories.map((framework) => (
                  <CommandItem
                    key={framework.id}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                      console.log(
                        "Current value: ",
                        currentValue,
                        "Value: ",
                        value
                      );
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.id}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input
                  id="picture"
                  type="file"
                  multiple
                  onChange={(e) => {
                    setImages(e.target.files || []);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
