"use client"

import { cn } from "@/lib/utils"
import { useServiceStore } from "@/stores/service"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const ServiceTitle = ({
	children,
	id,
}: {
	children: React.ReactNode
	id: string
}) => {
	const ref = useRef<HTMLParagraphElement>(null)
	const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

	const { setInViewFeature, inViewFeature } = useServiceStore()

	useEffect(() => {
		// Call setInView store

		if (isInView) setInViewFeature(id)

		if (!isInView && inViewFeature === id) setInViewFeature(null)
	}, [isInView, id, setInViewFeature, inViewFeature])

	return (
		<motion.p
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1 }}
			ref={ref}
			className={cn(
				isInView ? "text-primary" : "text-gray-100/70",
				"text-md md:text-2xl 2xl:text-4xl font-bold py-16 transition-colors duration-500 cursor-default"
			)}
		>
			{children}
		</motion.p>
	)
}

export default ServiceTitle
