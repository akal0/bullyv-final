"use client"

import Lenis from "@studio-freight/lenis"
import { useEffect, useState } from "react"

import Navbar from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"
import Services from "@/components/services/Services"
import Portfolio from "@/components/portfolio/Portfolio"
import Partners from "@/components/partners/Partners"
import Contact from "@/components/contact/Contact"
import Marquee from "@/components/Marquee"
import Diagram from "@/components/diagram/Diagram"

export default function Home() {
	// useEffect(() => {
	// 	const lenis = new Lenis()

	// 	function raf(time: any) {
	// 		lenis.raf(time)
	// 		requestAnimationFrame(raf)
	// 	}

	// 	requestAnimationFrame(raf)
	// }, [])

	return (
		<div className="flex flex-col relative w-full">
			<Navbar />

			<div className="absolute bottom-0 left-0 right-0 -top-[20%] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<div className="flex flex-col w-full px-8 py-16 md:p-0">
				<div className="flex flex-col 2xl:h-[calc(100vh-20rem)] md:mt-20 md:-mb-24 w-full">
					<Hero />
				</div>

				<div className="relative h-full">
					<Services />
				</div>

				<div className="relative overflow-hidden bg-gradient-to-r from-primary/100 to-red-500 py-8 mb-8">
					<Marquee />
				</div>

				<div className="flex flex-col w-full mt-8 md:mt-28 max-w-5xl mx-auto 2xl:max-w-7xl">
					<Partners />
				</div>

				<div className="h-[calc(75vh)] max-w-5xl mx-auto 2xl:max-w-7xl hidden md:flex">
					<Diagram />
				</div>

				<div className="flex flex-col w-full h-[calc(50vh)]">
					<Portfolio />
				</div>

				<div className="w-full">
					<Contact />
				</div>
			</div>
		</div>
	)
}
