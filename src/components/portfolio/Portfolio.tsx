"use client"

import { useEffect, useRef, useState } from "react"

import portfolio from "@/lib/lists/portfolio"
import { motion, useTransform, useScroll } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const Portfolio = () => {
	const ref = useRef<HTMLDivElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: ref,
	})

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"])

	return (
		<div className="w-full inline-flex flex-nowrap max-w-7xl mx-auto">
			<div className=" flex flex-col gap-16 h-[40vh] w-full">
				<motion.h1
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="text-xl md:text-3xl font-bold tracking-widest text-white text-center uppercase"
					style={{ textShadow: "2px 2px #e11d48" }}
				>
					We've got a pretty impressive portfolio...
				</motion.h1>

				<motion.div
					initial={{ x: 150, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					className="relative tracking-widest w-full bg-[#020202] border border-gray-800/40 rounded-md inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-200px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-500px),transparent_100%)]"
				>
					<div className="py-12 animate-infinite-scroll flex gap-20 pr-8 items-center">
						{portfolio.map((project, idx) => (
							<div
								className="flex flex-col items-center w-max space-y-4"
								key={project.id}
							>
								<img
									src={project.logo}
									alt={project.name}
									className="h-8 2xl:h-20 w-8 2xl:w-20 rounded-full object-cover"
								/>

								<h1
									className="text-sm font-bold w-max uppercase"
									style={{ textShadow: "2px 2px #e11d48" }}
								>
									{project.name}
								</h1>
							</div>
						))}
					</div>

					<div className="absolute top-0 py-12 animate-infinite-scroll-2 flex gap-20 pl-12 items-center">
						{portfolio.map((project, idx) => (
							<div
								className="flex flex-col items-center space-y-4 w-max"
								key={project.id}
							>
								<img
									src={project.logo}
									alt={project.name}
									className="h-8 2xl:h-20 w-8 2xl:w-20 rounded-full object-cover"
								/>

								<h1
									className="text-sm font-bold w-max uppercase"
									style={{ textShadow: "2px 2px #e11d48" }}
								>
									{project.name}
								</h1>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Portfolio
