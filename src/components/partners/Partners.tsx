"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

import partners from "@/lib/lists/partners"
import { cn } from "@/lib/utils"

const Partners = () => {
	const [activeItem, setActiveItem] = useState(0)

	const wrapperRef = useRef<HTMLUListElement | null>(null)
	const timeoutRef = useRef<number | null>(null)

	useEffect(() => {
		if (!wrapperRef.current) return
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}

		wrapperRef.current.style.setProperty(
			"--transition",
			"600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
		)

		timeoutRef.current = setTimeout(() => {
			wrapperRef.current?.style.removeProperty("--transition")
		}, 900)

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [activeItem])

	const selectActiveItem = (index: number) => {
		setActiveItem(index)
	}

	return (
		<div className="flex flex-col gap-6 md:gap-12 max-w-7xl mx-auto w-full pb-20">
			<div className="flex flex-col gap-2">
				<motion.h1
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					className="text-xl md:text-3xl font-bold tracking-widest text-white text-center uppercase drop-shadow-lg"
					style={{ textShadow: "2px 2px #e11d48" }}
				>
					Meet our partners.
				</motion.h1>
			</div>

			<div className="w-full">
				<motion.ul
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					ref={wrapperRef}
					className="flex flex-col md:flex-row gap-2 group relative md:h-[300px]"
				>
					{partners.map((partner, index) => (
						<>
							{/* Change w to 8% when you have more partners and hover state back to 7% */}
							<li
								onClick={() => selectActiveItem(index)}
								aria-current={activeItem === index}
								className={cn(
									"w-[100%] md:w-[30%] [&[aria-current='true']]:w-[100%] md:[&[aria-current='true']]:w-[48%] bg-[#020202] rounded-xl md:hover:w-[25%] cursor-pointer before:block before:bg-transparent before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] before:absolute before:-z-10 md:[&:not(:hover), &:not(:first), &:not(:last)]:group-hover:w-[25%] md:[transition:width_var(--transition,200ms_ease-in)] relative overflow-hidden flex justify-center p-4 border border-gray-800/40 drop-shadow-[0px_0px_15px_rgba(225,29,72,0.01)] items-center hover:drop-shadow-[0px_0px_15px_rgba(225,29,72,0.04)]",
									activeItem === index
										? "opacity-100"
										: "opacity-40 hover:opacity-70 "
								)}
								key={partner.name}
							>
								<div
									className={cn(
										"flex flex-col items-center gap-4",
										activeItem === index && "justify-center"
									)}
								>
									<div className="flex flex-col items-center gap-4">
										<img
											src={partner.logo}
											alt={partner.name}
											className="h-16 w-16 rounded-full object-cover"
										/>

										<h1
											className={cn(
												"text-md md:text-xl uppercase font-bold tracking-widest text-white",
												activeItem === index
													? "visible"
													: "hidden"
											)}
											style={{
												textShadow: "2px 2px #e11d48",
											}}
										>
											{partner.name}
										</h1>
									</div>
								</div>

								<div
									className={cn(
										"hidden md:absolute w-72 h-72 bg-primary mt-6 rounded-full top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 blur-[20px] -z-1 ",
										activeItem === index
											? "md:opacity-[0.05]"
											: "md:opacity-0"
									)}
								/>
							</li>
						</>
					))}
				</motion.ul>
			</div>
		</div>
	)
}

export default Partners
