"use client"

import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const brice = localFont({ src: "../../../fonts/brice.otf" })

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 z-10 w-full border-b border-stone-700/50 backdrop-blur-[12px] py-4 px-12 overflow-hidden">
			{/* <div className="absolute left-0 right-0 top-[-5.5%] md:top-[-10%] h-[500px] w-[300px] md:h-[700px] md:w-[700px] rounded-full bg-[radial-gradient(circle_500px_at_20%_300px,#fbfbfb36,#000)] md:bg-[radial-gradient(circle_200px_at_54%_200px,#fbfbfb36,#000)] -z-10" /> */}

			<div className="absolute left-0 right-0 top-[-5%] w-[300px] h-[700px] md:w-[700px] md:h-[700px] bg-[radial-gradient(circle_200px_at_70%_200px,#e11d48,#000)] md:bg-[radial-gradient(circle_200px_at_54%_200px,#e11d48,#000)] blur-xl rounded-full opacity-70" />

			<div className="flex items-center justify-between text-center max-w-7xl relative mx-auto w-full">
				<h1
					className={cn(
						"text-2xl tracking-wider uppercase text-primary w-full md:w-max",
						brice.className
					)}
				>
					Bully Ventures
				</h1>

				<div className="hidden md:flex items-center text-sm gap-x-8 ">
					<Link href="#hero" className="nav-item">
						Home
					</Link>

					<Link href="#services" className="nav-item">
						Services
					</Link>

					<Link href="#partners" className="nav-item">
						Partners
					</Link>

					<Link href="#portfolio" className="nav-item">
						Portfolio
					</Link>

					<Link href="#contact">
						<Button className="tracking-wider text-sm flex items-center justify-center">
							Contact
							<TrendingUp className="w-4 h-4 ml-1" />
						</Button>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
