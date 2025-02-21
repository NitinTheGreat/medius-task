"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Card } from "@/components/ui/card"

const formSchema = z.object({
  homePrice: z.string().min(1, "Home price is required"),
  downPayment: z.string().min(1, "Down payment is required"),
  loanTerm: z.string().min(1, "Loan term is required"),
  interestRate: z.string().min(1, "Interest rate is required"),
  propertyTax: z.string().min(1, "Property tax is required"),
  homeInsurance: z.string().min(1, "Home insurance is required"),
})

export default function MortgageCalculator() {
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      homePrice: "300000",
      downPayment: "60000",
      loanTerm: "30",
      interestRate: "6.5",
      propertyTax: "3000",
      homeInsurance: "1200",
    },
  })

  function calculateMortgage(values: z.infer<typeof formSchema>) {
    const principal = Number(values.homePrice) - Number(values.downPayment)
    const monthlyRate = Number(values.interestRate) / 100 / 12
    const numberOfPayments = Number(values.loanTerm) * 12

    const monthlyMortgage =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const monthlyTax = Number(values.propertyTax) / 12
    const monthlyInsurance = Number(values.homeInsurance) / 12

    const totalMonthlyPayment = monthlyMortgage + monthlyTax + monthlyInsurance
    setMonthlyPayment(totalMonthlyPayment)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mortgage Calculator</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(calculateMortgage)} className="space-y-6">
              <FormField
                control={form.control}
                name="homePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Home Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="300000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="downPayment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Down Payment</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="60000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="loanTerm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loan Term (Years)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select loan term" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interestRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interest Rate (%)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="6.5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyTax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Property Tax</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="3000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="homeInsurance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Home Insurance</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Calculate
              </Button>
            </form>
          </Form>

          <div>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Monthly Payment</h2>
              {monthlyPayment && (
                <div className="space-y-4">
                  <p className="text-4xl font-bold text-primary">${monthlyPayment.toFixed(2)}</p>
                  <div className="text-sm text-gray-600">
                    <p>Principal and Interest</p>
                    <p>Property Tax: ${(Number(form.getValues("propertyTax") || 0) / 12).toFixed(2)}</p>
                    <p>Home Insurance: ${(Number(form.getValues("homeInsurance") || 0) / 12).toFixed(2)}</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

