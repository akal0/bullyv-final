"use client"

import {
	ArrowRight,
	ArrowUpRight,
	ExternalLink,
	LucideIcon,
} from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useServiceStore } from "@/stores/service"
import { motion } from "framer-motion"

interface ServiceCardProps {
	children: React.ReactNode
	id: string
}

interface CardProps {
	id: string
	icon: LucideIcon
	description: string
}

const ServiceCard = ({ children, id }: ServiceCardProps) => {
	const { inViewFeature } = useServiceStore()

	return (
		<div
			className={cn(
				"absolute inset-0 bg-gradient-to-br rounded-2xl w-full h-[275px] md:h-full group transition-all duration-500 p-6 xl:p-8 2xl:p-12 bg-[#020202] overflow-hidden cursor-default",
				inViewFeature === id ? "opacity-100" : "opacity-0"
			)}
		>
			<div className="transition-all duration-500 h-full">{children}</div>
		</div>
	)
}

const ServiceItem = ({
	description,
	icon: Icon,
}: {
	description: string
	icon: LucideIcon
}) => {
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}
			className="flex flex-col h-full justify-center 2xl:gap-6 relative"
		>
			<div className="space-y-2 md:space-y-4 xl:border-l-4 xl:border-primary w-3/4 xl:pl-6 2xl:pl-8 ml-1 rounded-lg">
				<div className="bg-[#050505] border border-gray-800/40 w-max p-2 rounded-full">
					<Icon className="h-3 2xl:h-5 w-3 2xl:w-5 text-primary" />
				</div>
				<p className="text-xs md:text-md 2xl:text-lg font-semibold md:pb-4">
					{description}
				</p>
			</div>

			<div className="absolute bg-primary w-[300px] h-[300px] top-[90%] right-[50%] transform translate-x-1/2 rounded-full blur-2xl opacity-20 md:opacity-30" />
		</motion.div>
	)
}

export const Funding = ({ id, icon, description }: CardProps) => {
	return (
		<ServiceCard id={id}>
			<ServiceItem description={description} icon={icon} />
		</ServiceCard>
	)
}

export const Investment = ({ id, icon, description }: CardProps) => {
	return (
		<ServiceCard id={id}>
			<ServiceItem description={description} icon={icon} />
		</ServiceCard>
	)
}

export const Security = ({ id, icon, description }: CardProps) => {
	return (
		<ServiceCard id={id}>
			<ServiceItem description={description} icon={icon} />
		</ServiceCard>
	)
}

export const Visiblity = ({ id, icon, description }: CardProps) => {
	return (
		<ServiceCard id={id}>
			<ServiceItem description={description} icon={icon} />
		</ServiceCard>
	)
}
export const Listing = ({ id, icon, description }: CardProps) => {
	return (
		<ServiceCard id={id}>
			<ServiceItem description={description} icon={icon} />
		</ServiceCard>
	)
}

export const Presence = ({ id, icon, description }: CardProps) => {
	return (
		<ServiceCard id={id}>
			<ServiceItem description={description} icon={icon} />
		</ServiceCard>
	)
}

export default ServiceCard
