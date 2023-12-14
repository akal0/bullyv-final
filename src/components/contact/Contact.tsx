"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { FaTelegramPlane, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion"
import axios, { AxiosError } from "axios"
import { useMutation } from "@tanstack/react-query"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export const formSchema = z.object({
	email: z
		.string()
		.min(3, { message: "Email has to be at least 3 character(s)" })
		.email("Please enter a valid e-mail address."),
	subject: z
		.string()
		.min(3, { message: "The subject has to be at least 3 character(s)" }),
	message: z.string().min(6, {
		message: "Please enter a message with a minimum of 6 characters.",
	}),
})

export type formSchemaType = z.infer<typeof formSchema>

const Contact = () => {
	const form = useForm<formSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			subject: "",
			message: "",
		},
	})

	const { mutate: onSubmit, isPending } = useMutation({
		mutationFn: async (values: formSchemaType) => {
			const payload: formSchemaType = {
				email: values.email,
				subject: values.subject,
				message: values.message,
			}

			const { data } = await axios.post("/api/contact", payload)

			return data as string
		},
		onError: (err) => {
			if (err instanceof AxiosError) {
				if (err.response?.status === 409) {
					return toast.error(
						"Could not send your email, please try again later."
					)
				}
			}
		},
		onSuccess: (data) => {
			return toast.success("Your email has been successfully sent!")
		},
	})

	return (
		<div className="max-w-5xl flex flex-col gap-8 2xl:max-w-7xl mx-auto w-full relative">
			<div className="flex flex-col gap-2">
				<motion.h1
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					className="text-xl md:text-3xl font-bold tracking-widest text-white text-center uppercase"
					style={{ textShadow: "2px 2px #e11d48" }}
				>
					Get in contact with us
				</motion.h1>
			</div>

			<motion.div
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5 }}
				className="bg-[#020202] border border-gray-800/40 rounded-md p-8 flex items-center justify-center gap-10 transition-colors"
			>
				<Link href="https://t.me/BullyVentures" className="group">
					<FaTelegramPlane className="text-white group-hover:text-primary w-4 h-4 duration-300" />
				</Link>

				<Link
					href="https://twitter.com/BullyVentures"
					className="group"
				>
					<FaTwitter className="text-white group-hover:text-primary  w-4 h-4 duration-300" />
				</Link>
			</motion.div>

			<motion.div
				initial={{ x: 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5 }}
				className="bg-[#020202] border border-gray-800/40 text-white rounded-md p-8"
			>
				<Form {...form}>
					<form
						// @ts-ignore
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<div className="flex flex-col gap-y-6 md:flex-row gap-x-8">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel> E-mail Address </FormLabel>
										<FormControl>
											<Input
												className="text-xs border-gray-400/20 py-5 hover:bg-[#050505] focus-within:bg-[#050505] transition-all"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="subject"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>Subject</FormLabel>
										<FormControl>
											<Input
												className="text-xs border-gray-400/20 py-5 hover:bg-[#050505] focus-within:bg-[#050505] transition-all"
												type="text"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel> Message </FormLabel>
									<FormControl>
										<Textarea
											className="text-xs border-gray-400/20 resize-none hover:bg-[#050505] focus-within:bg-[#050505] transition-all"
											rows={3}
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type="submit"
							className="px-8 flex ml-auto"
							disabled={isPending}
						>
							{isPending ? (
								<Loader2 className="h-4 w-4 animate-spin" />
							) : (
								"Submit"
							)}
						</Button>
					</form>
				</Form>
			</motion.div>
		</div>
	)
}

export default Contact
