"use client"

import { Coins, Eye, LineChart, Lock, Monitor, ScrollText } from "lucide-react"

import {
	Funding,
	Investment,
	Listing,
	Presence,
	Security,
	Visiblity,
} from "./ServiceCard"
import ServiceTitle from "./ServiceTitle"

const services = [
	{
		id: "funding-projects",
		title: "Funding projects",
		description:
			"We fundraise for projects that we believe have objectives that align with ours!",
		icon: Coins,
		card: Funding,
	},
	{
		id: "consistent-investment",
		title: "Consistent investment opportunities",
		description:
			"We give ordinary people the opportunity to become investors in the projects we raise for!",
		icon: LineChart,
		card: Investment,
	},
	{
		id: "provide-security",
		title: "Provide security",
		description:
			"By leveraging our partnerships with CertiK and Hacken, we make sure your project is as secure as possible!",
		icon: Lock,
		card: Security,
	},
	{
		id: "maximising-visibility",
		title: "Maximising your visibility",
		description:
			"Leave it to us to gain exposure for your project by leveraging our team member's industrial experience!",
		icon: Eye,
		card: Visiblity,
	},
	{
		id: "listing-exchanges",
		title: "Listing on exchanges",
		description:
			"We're able to get you listed on reputable exchanges to boost your project's credibility!",
		icon: ScrollText,
		card: Listing,
	},
	{
		id: "building-online-presence",
		title: "Building online presence",
		description:
			"Ranging from blog posts, to creating a whole landing page for your project, creating your brand's identity falls under our services.",
		icon: Monitor,
		card: Presence,
	},
]

const Services = () => {
	return (
		<div className="flex w-full max-w-5xl 2xl:max-w-7xl mx-auto gap-16 items-start relative">
			<div className="w-full py-[40vh] md:py-[40vh] ">
				<ul className="">
					{services.map((service, idx) => (
						<li key={service.id}>
							<ServiceTitle id={service.id}>
								{service.title}
							</ServiceTitle>
						</li>
					))}
				</ul>
			</div>
			<div className="w-1/2 md:w-full sticky top-0 h-screen flex items-center">
				<div className="relative w-full aspect-square rounded-2xl transition-all duration-500 border border-zinc-800/40 group h-1/4">
					{services.map((service) => (
						<service.card
							id={service.id}
							key={service.id}
							description={service.description}
							icon={service.icon}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services
