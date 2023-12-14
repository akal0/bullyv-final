import { NextResponse } from "next/server"
import { Resend } from "resend"
import * as z from "zod"

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const { subject, email, message } = body

		console.log(subject, email, message)

		// // Validation checks

		if (!subject) {
			return NextResponse.json(
				{ message: "Please make sure you enter a subject!" },
				{ status: 400 }
			)
		}

		if (!email) {
			return NextResponse.json(
				{ message: "Please make sure you enter your email address!" },
				{ status: 400 }
			)
		}

		if (!message) {
			return NextResponse.json(
				{ message: "Please make sure you have a message!" },
				{ status: 400 }
			)
		}

		// Send the email

		const resend = new Resend("re_SJRFEK3M_BFZ5TJarvDCsxUBkq6BnXupR")

		await resend.emails.send({
			from: "Bully Ventures <onboarding@resend.dev>",
			to: "bullyventures@hotmail.co.uk",
			subject: subject as string,
			html: `<p> ${message} <br/> <br /> - From ${email} </p>`,
		})

		return NextResponse.json(
			{ success: "Your email has been successfully sent!" },
			{ status: 200 }
		)
	} catch (error) {
		if (error instanceof z.ZodError) {
			return new Response("error.message", { status: 422 })
		}

		return new Response("Could not send the email", { status: 500 })
	}
}
