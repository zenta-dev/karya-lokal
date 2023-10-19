"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "@karya-lokal/database";
import axios from "axios";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import ImageUpload from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef } from "@tanstack/react-table";
import { ProductColumn, Variant } from "./columns";

const formSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  images: z.object({ url: z.string() }).array(),
  category0: z.string().min(10),
  category1: z.string().min(10),
  var1: z.string().min(1),
  var2: z.string().min(1),
  variants: z.object({}),
  isArchived: z.boolean().default(false).optional(),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  initialData: any | null;
  categories: Category[];
}

export const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  categories,
}) => {
  const params = useParams();
  const router = useRouter();

  const [category1, setCategory1] = useState<any>(false);
  const [category2, setCategory2] = useState<any>(false);
  const [columns, setColumns] = useState<ColumnDef<ProductColumn>[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit product" : "Create product";
  const description = initialData ? "Edit a product." : "Add a new product";
  const toastMessage = initialData ? "Product updated." : "Product created.";
  const action = initialData ? "Save changes" : "Create";

  const defaultValues = initialData
    ? {
        ...initialData,
      }
    : {
        productCode: "",
        name: "",
        description: "",
        categoryId: "",
        images: [],
        isArchived: false,
      };
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: ProductFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.userId}/products/${params.productId}`,
          data
        );
      } else {
        await axios.post(`/api/${params.userId}/products`, data);
      }
      router.refresh();
      router.push(`/${params.userId}/products`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.userId}/products/${params.productId}`);
      router.refresh();
      router.push(`/${params.userId}/products`);
      toast.success("Product deleted.");
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  const [tmpVar1, setTmpVar1] = useState<Variant[]>([
    { name: "", price: 0, stock: 0 },
  ]);
  const [tmpVar2, setTmpVar2] = useState<Variant[]>([
    { name: "", price: 0, stock: 0 },
  ]);
  const [variants, setVariants] = useState<ProductColumn[]>([]);

  const renderVar1SubVariants = () => {
    return tmpVar1.map((value, index) => (
      <FormItem key={index}>
        <FormLabel>
          Variant {form.watch("var1")} {index + 1}
        </FormLabel>
        <FormControl>
          <div className="flex flex-row items-center space-x-2">
            <Input
              disabled={loading}
              placeholder={`Variant ${form.watch("var1")} ${index + 1} value`}
              value={value.name}
              onChange={(e) => {
                tmpVar1[index].name = e.target.value;
                setTmpVar1([...tmpVar1]);
                if (index === tmpVar1.length - 1) {
                  setTmpVar1([...tmpVar1, { name: "", price: 0, stock: 0 }]);
                }
                updateVariant();
              }}
            />
            <button
              disabled={loading}
              onClick={() => {
                const newTmpVar1 = tmpVar1.filter((_, i) => i !== index);
                setTmpVar1(newTmpVar1);
              }}
              type="button"
            >
              <Trash className="h-4 w-4" />
            </button>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    ));
  };
  const updateVariant = () => {
    setColumns([
      {
        accessorKey: "name",
        header: form.watch("var1"),
      },
      {
        accessorKey: "values",
        header: form.watch("var2"),
        cell: ({ row }) => (
          <div className="">
            {row.original.values.map((item) => (
              <div
                className={
                  item.name === ""
                    ? "hidden"
                    : "border   border-red-600 p-2  max-w-[100px] max-h-[100px] "
                }
                key={item.name}
              >
                {item.name}
              </div>
            ))}
          </div>
        ),
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => (
          <div className="">
            {row.original.values.map((item, index) => (
              <div key={item.name}>
                <Input
                  disabled={loading}
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) => {
                    tmpVar2[index].price = parseInt(e.target.value);
                    setTmpVar2([...tmpVar2]);
                    updateVariant();
                  }}
                />
              </div>
            ))}
          </div>
        ),
      },
      {
        accessorKey: "stock",
        header: "Stock",
        cell: ({ row }) => (
          <div className="">
            {row.original.values.map((item) => (
              <div key={item.name}>{item.stock}</div>
            ))}
          </div>
        ),
      },
    ]);
    setVariants(
      tmpVar1.map((item) => ({
        name: item.name,
        values: tmpVar2.map((item2) => ({
          name: item2.name,
          price: item2.price,
          stock: item2.stock,
        })),
      }))
    );
  };
  const renderVar2SubVariants = () => {
    return tmpVar2.map((value, index) => (
      <FormItem key={index}>
        <FormLabel>
          Variant {form.watch("var1")} {index + 1}
        </FormLabel>
        <FormControl>
          <div className="flex flex-row items-center space-x-2">
            <Input
              disabled={loading}
              placeholder={`Variant ${index + 1} value`}
              value={value.name}
              onChange={(e) => {
                tmpVar2[index].name = e.target.value;
                setTmpVar2([...tmpVar2]);
                if (index === tmpVar2.length - 1) {
                  setTmpVar2([...tmpVar2, { name: "", price: 0, stock: 0 }]);
                }
                updateVariant();
              }}
            />
            <br />
            <button
              disabled={loading}
              onClick={() => {
                const newTmpVar2 = tmpVar2.filter((_, i) => i !== index);
                setTmpVar2(newTmpVar2);
              }}
              type="button"
            >
              <Trash className="h-4 w-4" />
            </button>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    ));
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="border p-4 rounded-xl space-y-2">
            <h1 className="text-xl font-bold ">Product details</h1>
            <p className="text-gray-500 ">Enter the details of your product</p>
            <Separator />
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value.map((image) => image.url)}
                        disabled={loading}
                        onChange={(url) =>
                          field.onChange([...field.value, { url }])
                        }
                        onRemove={(url) =>
                          field.onChange([
                            ...field.value.filter(
                              (current) => current.url !== url
                            ),
                          ])
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Product name"
                        {...field}
                      />
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
                      <Textarea
                        disabled={loading}
                        placeholder="Product name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <FormLabel>Category</FormLabel>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category0"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          disabled={loading}
                          onValueChange={(value) => {
                            field.onChange(value);
                            setCategory1(
                              categories.find(
                                (category) => category.slug === value
                              )
                            );
                            console.log(value);
                          }}
                          value={field.value}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                defaultValue={field.value}
                                placeholder="Select a category"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) =>
                              category.level === 0 ? (
                                <SelectItem
                                  key={category.slug}
                                  value={category.slug || ""}
                                >
                                  {category.name}
                                </SelectItem>
                              ) : null
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {category1 ? (
                    <FormField
                      control={form.control}
                      name="category1"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            disabled={loading}
                            onValueChange={(value) => {
                              field.onChange(value);
                              setCategory2(
                                categories.find(
                                  (category) => category.slug === value
                                )
                              );
                            }}
                            value={field.value}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  defaultValue={field.value}
                                  placeholder="Select a category"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) =>
                                category.level === 1 &&
                                category.parentSlug === category1.slug ? (
                                  <SelectItem
                                    key={category.slug}
                                    value={category.slug || ""}
                                  >
                                    {category.name}
                                  </SelectItem>
                                ) : null
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="border p-4 rounded-xl space-y-2">
            <h1 className="text-xl font-bold">Variants</h1>
            <p className="text-gray-500 mb-8">
              Enter the details of your product
            </p>
            <Separator />
            <div className=" grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="var1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Variant 1</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="ex: Colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <br />
              {form.watch("var1") ? renderVar1SubVariants() : null}
            </div>
            <div className=" grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="var2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Variant 2</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="ex: Sizes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <br />
              {form.watch("var2") ? renderVar2SubVariants() : null}
            </div>
          </div>
          <DataTable columns={columns} data={variants} />
          <FormField
            control={form.control}
            name="isArchived"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Archived</FormLabel>
                  <FormDescription>
                    This product will not appear anywhere in the store.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
