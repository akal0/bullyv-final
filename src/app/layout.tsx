import type { Metadata } from "next"

import { Raleway } from "next/font/google"

import { cn } from "@/lib/utils"
import "./globals.css"
import localFont from "next/font/local"

const raleway = Raleway({ subsets: ["latin"] })

const satoshi = localFont({ src: "../../fonts/satoshi-regular.otf" })

export const metadata: Metadata = {
	title: "Bully Ventures",
	description: "...",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					"bg-black h-full w-full text-white py-12",
					satoshi.className
				)}
			>
				{children}
			</body>
		</html>
	)
}
