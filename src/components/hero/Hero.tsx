import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
	return (
		<div className="flex px-10 items-center w-full justify-between relative pb-12 h-full">
			<div className="w-[100rem] h-[100rem] bg-gradient-to-br from-primary to-red-500 absolute -top-[80rem] transform right-1/2 translate-x-1/2 opacity-[0.1] blur-[100px] -z-30 rounded-full" />

			<div className="flex items-center justify-between mx-auto max-w-7xl">
				<div className="flex flex-col gap-8 max-w-[50%]">
					<h1
						className="text-5xl font-bold tracking-widest text-white drop-shadow-lg"
						style={{ textShadow: "2px 2px #e11d48" }}
					>
						Helping you realise your financial potential.
					</h1>

					<p className="break-words w-3/4 text-gray-200 font-semibold tracking-wide">
						With Bully Ventures, you can unleash your financial
						potential with premier early-stage project opportunities
						and expert trading insights.
					</p>

					<div className="flex gap-4">
						<Button className="py-7 text-sm flex items-center w-full font-semibold text-md">
							What do we offer?
						</Button>

						<Button
							className="py-7 text-sm flex items-center w-full font-semibold text-md hover:bg-primary hover:text-white"
							variant="ghost"
						>
							Pitch your project
							<ArrowRight className="h-4 w-4 ml-2" />
						</Button>
					</div>
				</div>
				<Image
					src="/logo-no-background.png"
					alt="Logo"
					width={0}
					height={0}
					className="object-contain rounded-full w-[24rem]"
					unoptimized
				/>
			</div>
		</div>
	)
}

export default Hero
