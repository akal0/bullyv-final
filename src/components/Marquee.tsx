"use client"

import { cn } from "@/lib/utils"
import { useScroll, useTransform, motion } from "framer-motion"
import localFont from "next/font/local"

const brice = localFont({ src: "../../fonts/brice.otf" })

const Marquee = () => {
	const { scrollYProgress } = useScroll()

	const x = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"])
	const x2 = useTransform(scrollYProgress, [0, 1], ["15%", "-60%"])

	return (
		<div className="px-32">
			<motion.h1
				style={{
					x,
					transition: "all 3s cubic-bezier(0.165, 0.84, 0.44, 1)",
				}}
				className={cn(
					"hidden md:flex md:text-4xl 2xl:text-5xl tracking-widest 2xl:tracking-[1rem] font-extrabold w-max uppercase h-full italic"
				)}
			>
				innovators - advisors - experts - consultants
			</motion.h1>

			<motion.h1
				style={{
					x: x2,
					transition: "all 3s cubic-bezier(0.165, 0.84, 0.44, 1)",
				}}
				className={cn(
					"md:hidden text-md md:text-xl 2xl:text-5xl tracking-widest 2xl:tracking-[1rem] font-extrabold w-max uppercase h-full italic"
				)}
			>
				innovators - advisors - experts - consultants
			</motion.h1>
		</div>
	)
}

export default Marquee
