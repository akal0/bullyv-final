import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import localFont from "next/font/local"
import { Toaster } from "sonner"

import "./globals.css"
import { cn } from "@/lib/utils"
import Providers from "@/components/providers/Providers"

const satoshi = localFont({ src: "../../fonts/satoshi-regular.otf" })

export const metadata: Metadata = {
	title: "Bully Ventures",
	description:
		"Bully Ventures will unleash your financial potential with premier early-stage project opportunities and expert trading insights.",
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
				<Providers>
					<main>
						{children}

						<Toaster />
					</main>
				</Providers>
			</body>
		</html>
	)
}
