import Navbar from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"
import Services from "@/components/services/Services"
import Portfolio from "@/components/portfolio/Portfolio"
import Partners from "@/components/partners/Partners"

export default function Home() {
	return (
		<main className="flex flex-col relative w-full ">
			<Navbar />

			<div className="flex flex-col w-[80%] mx-auto py-16 md:py-0 md:w-full">
				<div className="flex flex-col h-[calc(100vh-8rem)] mt-6 w-full">
					<Hero />
				</div>

				<div className="flex flex-col h-[calc(100vh-8rem)] md:pt-20 w-full">
					<Services />
				</div>

				<div className="flex flex-col h-[calc(100vh-8rem)] w-full">
					<Partners />
				</div>

				<div className="flex flex-col h-[calc(100vh-8rem)] w-full">
					<Portfolio />
				</div>
			</div>
		</main>
	)
}
