"use client"

import { MouseEventHandler, useEffect, useRef, useState } from "react"

import portfolio from "@/lib/lists/portfolio"
import { motion } from "framer-motion"

const Portfolio = () => {
	const [width, setWidth] = useState(0)

	const carousel = useRef<any>()

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
	}, [])

	return (
		<div className="flex flex-col gap-16 max-w-7xl mx-auto w-full">
			<div className="flex flex-col gap-2">
				<h1
					className="text-3xl font-bold tracking-widest text-white drop-shadow-lg"
					style={{ textShadow: "2px 2px #e11d48" }}
				>
					Our portfolio
				</h1>
				<p className="text-gray-200/80 font-semibold text-sm">
					Some of the projects we were able to raise funds for.
				</p>
			</div>

			<motion.div ref={carousel} className="cursor-grab overflow-hidden">
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="flex gap-8"
				>
					{portfolio.map((project, index) => (
						<motion.div
							className="bg-[#080A22] overflow-hidden w-96 h-96 relative rounded-md border border-gray-400/10 p-8 drop-shadow-[0px_0px_15px_rgba(225,29,72,0.05)] hover:drop-shadow-[0px_0px_15px_rgba(225,29,72,0.1)] transition min-w-[20rem]"
							key={project.id}
						>
							<div className="flex flex-col gap-4">
								<h1 className="text-primary text-lg font-bold">
									{project.name}
								</h1>
								<p className="text-sm text-gray-100/90 w-3/4 font-semibold ">
									{project.description}
								</p>
							</div>
							<div className="w-24 h-24 rounded-full border-2 border-primary/30 flex items-center justify-center absolute -right-4 -bottom-4 ">
								<img
									src={project.logo}
									alt={project.name}
									className="h-10 w-10 rounded-full object-cover grayscale drop-shadow-[0px_0px_25px_rgba(225,29,72,0.8)]"
								/>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Portfolio
