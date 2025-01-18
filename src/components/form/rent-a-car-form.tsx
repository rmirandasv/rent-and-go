"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { Car } from "@/types";

const formSchema = z.object({
  start_date: z.string(),
  end_date: z.string(),
});

export default function RentACarForm({ car }: { car: Car }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
    const json = await res.json();
    setIsLoading(false);
    console.log(json);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
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
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Rent"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
