/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useCreateUser } from "@/hooks/useUser"
import { userSchema } from "@/validators/userSchema"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useToast } from "@/hooks/use-toast"

const UserForm = ({toggleOpen}: any) => {
    const { toast } = useToast()
    const createUser = useCreateUser();
    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
          name: "",
          email: "",
          status: true,
          admission_date: new Date()
        },
    })
    
    const onSubmit = async (values: z.infer<typeof userSchema>) => {
        try {
            const newUser = await createUser.mutateAsync(values);
            toggleOpen()
            toast({
                description: "Usuário adicionado com sucesso.",
            })
            console.log(newUser)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder="João Dos Santos" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <div className="flex content-center gap-2 flex-wrap">
                                    <div>
                                        <FormLabel>Status</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="admission_date"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <DatePicker label="Selecione uma data" field={field} />
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                    />
                    <Button type="submit">Enviar</Button>
                </form>
            </Form>
        </>
    )
}

export default UserForm