"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { Car } from "@/types";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  start_date: z.string(),
  end_date: z.string(),
});

export default function RentACarForm({
  car,
  name,
  phone,
}: {
  car: Car;
  name: string;
  phone: string;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      phone,
      start_date: "",
      end_date: "",
    },
  });
  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const res = await fetch("/api/rent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        car: car,
      }),
    });
    setIsLoading(false);
    if (res.ok) {
      router.push(`/dashboard/${(await res.json()).data.documentId}?success=true`);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col space-y-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <Input
                {...field}
                readOnly
                className="disabled:opacity-100 bg-gray-200 text-gray-700"
                disabled
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <Input
                {...field}
                readOnly
                className="disabled:opacity-100 bg-gray-200 text-gray-700"
                disabled
              />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start date</FormLabel>
                <Input {...field} type="datetime-local" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End date</FormLabel>
                <Input {...field} type="datetime-local" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Rent"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
