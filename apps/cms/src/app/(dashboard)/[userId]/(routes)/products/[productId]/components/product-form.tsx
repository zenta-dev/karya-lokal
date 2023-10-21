"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, ProductVariant, SubVariant } from "@karya-lokal/database";
import axios from "axios";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { ProductColumn } from "../../components/columns";
import { columns } from "./columns";

const formSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  images: z.array(z.object({ url: z.string() })),
  categoryId: z.string(),
  category0: z.string().optional(),
  category1: z.string().optional(),
  variant: z.array(
    z.object({
      type: z.string(),
      name: z.string(),
      price: z.number(),
      stock: z.number(),
      values: z.array(
        z.object({
          type: z.string(),
          name: z.string(),
          price: z.number(),
          stock: z.number(),
        })
      ),
    })
  ),
  price: z.coerce.number().min(1),
  isArchived: z.boolean().default(false).optional(),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  initialData: ProductColumn | null;
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
  const [variantTable, setVariantTable] = useState<any>(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultValues = initialData
    ? {
        ...initialData,
      }
    : {
        name: "",
        description: "",
        categoryId: "",
        price: 0,
        images: [],
        discountId: null,
        userCartId: null,
        category: null,
        productCode: "",
        variant: [
          {
            name: "",
            values: [{ name: "", price: 0, stock: 0 }],
          },
        ],
        isArchived: false,
      };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const title = initialData ? "Edit product" : "Create product";
  const description = initialData ? "Edit a product." : "Add a new product";
  const toastMessage = initialData ? "Product updated." : "Product created.";
  const action = initialData ? "Save changes" : "Create";

  useEffect(() => {
    if (initialData?.category) {
      setCategory1(
        categories.find((category) => category.id === initialData.categoryId)
          ?.parentSlug
      );
      setCategory2(
        categories.find((category) => category.id === initialData.categoryId)
          ?.slug
      );
    }
  }, [categories, initialData?.category, initialData?.categoryId]);
  const onSubmit = async (data: ProductFormValues) => {
    console.log("SUBMIT");
    console.log(data);

    try {
      setLoading(true);
      console.log(category2);
      if (!initialData?.category || !category2) {
        throw new Error("Please select a category");
      }
      data.categoryId = category2;

      delete data.category0;
      delete data.category1;

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
      console.log(error);
      if (error.message === "Please select a category") {
        toast.error(error.message);
      } else {
        toast.error(error.response.data);
      }
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
                          defaultValue={
                            initialData?.category
                              ? initialData?.category.parentSlug || ""
                              : field.value
                          }
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
                  {category1 || initialData?.category ? (
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
                              console.log(value);
                            }}
                            value={field.value}
                            defaultValue={
                              initialData?.category
                                ? initialData?.category.slug || ""
                                : field.value
                            }
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
                                category.parentSlug ===
                                  (category1.slug ||
                                    initialData?.category.parentSlug) ? (
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
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Product price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="border p-4 rounded-xl space-y-2">
            <h1 className="text-xl font-bold">Variant</h1>
            <p className="text-gray-500 mb-8">
              Enter the details of your product
            </p>
            <Separator />
            <FormField
              control={form.control}
              name="variant"
              render={(field) => (
                <FormItem>
                  <div className=" grid grid-cols-2 gap-4">
                    {initialData?.variant.map(
                      (item: ProductVariant, index: number) => (
                        <FormField
                          key={item.name}
                          name={`variant.${index}.name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Variant {index + 1}</FormLabel>
                              <FormControl>
                                <Input
                                  disabled={loading}
                                  placeholder="e.g. Size or Color"
                                  {...field}
                                />
                              </FormControl>

                              {item.values.map(
                                (subItem: SubVariant, subIndex: number) => (
                                  <FormField
                                    key={subItem.name}
                                    name={`variant.${index}.values.${subIndex}.name`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>
                                          Options {item.name} {subIndex + 1}
                                        </FormLabel>
                                        <FormControl>
                                          <Input
                                            disabled={loading}
                                            placeholder="e.g. Red or Blue"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                )
                              )}
                            </FormItem>
                          )}
                        />
                      )
                    )}
                  </div>
                </FormItem>
              )}
            />
          </div>
          <DataTable
            columns={columns({
              header1: form.getValues().variant[0]?.type || "Variant",
              header2: form.getValues().variant[1]?.values[0].type || "Options",
              onChange: (e) => { 
                const ids = e.id.split("-");
                const variant = form.getValues().variant;

                const type = e.type;
                const value = parseInt(e.value);

                variant.map((item: any) => {
                  if (item.name === ids[0]) {
                    item.values.map((subItem: any) => {
                      if (subItem.name === ids[1]) {
                        if (e.type === "price") {
                          subItem.price = value;
                        }
                        if (e.type === "stock") {
                          subItem.stock = value;
                        }
                      }
                    });
                  }
                });
                form.setValue("variant", variant);

                console.log(variant);
              },
            })}
            data={(form.getValues().variant || []).map((v1Value, rowIndex) => ({
              rowIndex,
              name: v1Value.name || "Variant",
              values: v1Value.values.map((v2Value) => ({
                ...v2Value,
                id: `${v1Value.name}-${v2Value.name}`,
              })),
              stock: v1Value.values.map((v2Value) => ({
                ...v2Value,
                id: `${v1Value.name}-${v2Value.name}`,
              })),
              price: v1Value.values.map((v2Value) => ({
                ...v2Value,
                id: `${v1Value.name}-${v2Value.name}`,
              })),
            }))}
          />

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
          <Button
            disabled={loading}
            className="ml-auto"
            // type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmit(form.getValues());
            }}
          >
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
