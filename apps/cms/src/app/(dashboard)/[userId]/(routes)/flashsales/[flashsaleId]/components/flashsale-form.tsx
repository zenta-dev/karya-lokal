"use client";

import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DataTable } from "@/components/ui/data-table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { StoreProduct } from "@karya-lokal/database";
import axios from "axios";
import { format } from "date-fns";
import { CalendarIcon, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { FlashSaleColumn } from "../../components/columns";
import { columns } from "./columns";

const formSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  percent: z.coerce.number().min(1),
  products: z.any().optional(),
  startDate: z.any().optional(),
  endDate: z.any().optional(),
});

type FlashSaleFormValues = z.infer<typeof formSchema>;

interface FlashSaleFormProps {
  initialData: FlashSaleColumn | null;
  products: StoreProduct[];
}

export const FlashSaleForm: React.FC<FlashSaleFormProps> = ({
  initialData,
  products,
}) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rowSelection, setRowSelection] = useState({});

  const defaultValues = initialData
    ? {
        ...initialData,
      }
    : {
        name: "",
        description: "",
        percent: 0,
        products: [],
        startDate: null,
        endDate: null,
        createdAt: null,
      };

  const form = useForm<FlashSaleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const title = initialData ? "Edit Flash Sale" : "Create Flash Sale";
  const description = initialData
    ? "Edit a Flash Sale."
    : "Add a new Flash Sale";
  const toastMessage = initialData
    ? "Flash Sale updated."
    : "Flash Sale created.";
  const action = initialData ? "Save changes" : "Create";
  const onSubmit = async (data: FlashSaleFormValues) => {
    try {
      const selectedProductIds = Object.keys(rowSelection).map(
        (value: any) => products[parseInt(value)].id
      );

      data.products = selectedProductIds;

      console.log(data);
      setLoading(true);
      console.log("SUBMIT");
      if (initialData) {
        await axios.patch(
          `/api/${params.userId}/flashsales/${params.flashsaleId}`,
          data
        );
      } else {
        console.log(data);
        await axios.post(`/api/${params.userId}/flashsales`, data);
      }
      router.refresh();
      router.push(`/${params.userId}/flashsales`);

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
      await axios.delete(
        `/api/${params.userId}/flashsales/${params.flashsaleId}`
      );
      router.refresh();
      router.push(`/${params.userId}/flashsales`);
      toast.success("FlashSale deleted.");
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
            <h1 className="text-xl font-bold ">Flash Sale details</h1>
            <p className="text-gray-500 ">
              Enter the details of your Flash Sale
            </p>
            <Separator />
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Flash Sale name"
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
                        placeholder="Describe your flash sale"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="percent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Percent</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Percent"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " ",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            showOutsideDays={true}
                            // disabled={(date) =>
                            //   date > new Date() || date < new Date("1900-01-01")
                            // }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " ",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            showOutsideDays={true}
                            // disabled={(date) =>
                            //   date > new Date() || date < new Date("1900-01-01")
                            // }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="border p-4 rounded-xl space-y-2">
            <h1 className="text-xl font-bold ">Pick product</h1>
            <p className="text-gray-500 ">
              Enter the details of your flashSale
            </p>
            <Separator />
            <DataTable
              columns={columns}
              data={products}
              rowSelection={rowSelection}
              setRowSelection={setRowSelection}
            />
          </div>
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
