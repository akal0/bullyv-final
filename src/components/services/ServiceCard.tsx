import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
	title: string
	description: string
	icon: LucideIcon
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
	return (
		<div className="bg-[#080A22] overflow-hidden w-96 h-52 relative rounded-md border border-gray-400/10 p-8 drop-shadow-[0px_0px_15px_rgba(225,29,72,0.05)] hover:drop-shadow-[0px_0px_15px_rgba(225,29,72,0.1)] transition cursor-default">
			<div className="flex flex-col gap-4">
				<h1 className="text-primary text-lg font-bold">{title}</h1>
				<p className="text-sm text-gray-100/90 w-3/4 font-semibold">
					{description}
				</p>
			</div>

			<div className="w-28 h-28 rounded-full border border-primary/50 flex items-center justify-center absolute -right-6 -bottom-6 ">
				<Icon className="h-5 w-5 text-primary/80 " />
			</div>
		</div>
	)
}

export default ServiceCard
