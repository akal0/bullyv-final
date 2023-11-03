import { Coins, Eye, LineChart, Lock, Monitor, ScrollText } from "lucide-react"
import ServiceCard from "./ServiceCard"

const services = [
	{
		id: 1,
		title: "Funding projects",
		description:
			"We fundraise for projects that we believe have objectives that align with ours!",
		icon: Coins,
	},
	{
		id: 2,
		title: "Consistent investment opportunities",
		description:
			"We give ordinary people the opportunity to become investors in the projects we raise for!",
		icon: LineChart,
	},
	{
		id: 3,
		title: "Provide security",
		description:
			"By leveraging our partnerships with CertiK and Hacken, we make sure your project is as secure as possible!",
		icon: Lock,
	},
	{
		id: 4,
		title: "Maximising your visibility",
		description:
			"Leave it to us to gain exposure for your project by leveraging our team member's industrial experience!",
		icon: Eye,
	},
	{
		id: 5,
		title: "Listing on exchanges",
		description:
			"We're able to get you listed on reputable exchanges to boost your project's credibility!",
		icon: ScrollText,
	},
	{
		id: 6,
		title: "Building online presence",
		description:
			"Ranging from blog posts, to creating a whole landing page for your project, creating your brand's identity falls under our services.",
		icon: Monitor,
	},
]

const Services = () => {
	return (
		<div className="flex flex-col gap-16 max-w-7xl mx-auto w-full">
			<div className="flex flex-col gap-2">
				<h1
					className="text-3xl font-bold tracking-widest text-white drop-shadow-lg"
					style={{ textShadow: "2px 2px #e11d48" }}
				>
					Our services
				</h1>
				<p className="text-gray-200/80 font-semibold text-sm">
					Only the best for our clients, whether that's opportunities
					to invest or funding for projects.
				</p>
			</div>

			<div className="grid grid-cols-3 gap-20 gap-y-16 w-full">
				{services.map((service) => (
					<ServiceCard
						key={service.id}
						title={service.title}
						description={service.description}
						icon={service.icon}
					/>
				))}
			</div>
		</div>
	)
}

export default Services
