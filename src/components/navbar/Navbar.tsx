"use client"

import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const brice = localFont({ src: "../../../fonts/brice.otf" })

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 z-10 w-full border-b border-stone-700/50 backdrop-blur-[12px] py-4 px-12">
			<div className="flex items-center justify-between max-w-7xl relative mx-auto w-full">
				<h1
					className={cn(
						"text-2xl tracking-wider uppercase text-primary",
						brice.className
					)}
				>
					Bully Ventures
				</h1>

				<div className="flex items-center text-sm gap-x-6">
					<Link href="#"> Home </Link>
					<Link href="#"> Services </Link>
					<Link href="#"> Partners </Link>
					<Link href="#"> Portfolio </Link>
					<Link href="#"> Investment </Link>
					<Link href="#">
						<Button>
							Get in contact
							<ArrowUpRight className="w-4 h-4 ml-1" />
						</Button>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
