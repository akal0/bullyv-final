import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
	return (
		<div className="max-w-5xl 2xl:max-w-7xl mx-auto flex md:items-center w-full md:justify-between relative h-full">
			<div className="flex flex-col items-center md:flex-row md:items-center md:justify-between md:mx-auto md:w-full max-w-7xl ">
				<div className="flex flex-col gap-6 md:gap-8 md:max-w-[50%] md:pr-0 ">
					<div className="gap-6 flex flex-col">
						<motion.h1
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1 }}
							className="text-2xl xl:text-3xl 2xl:text-5xl font-bold tracking-widest text-white drop-shadow-lg text-center md:text-start"
							style={{ textShadow: "2px 2px #e11d48" }}
						>
							Helping you realise your financial potential.
						</motion.h1>

						<motion.p
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1 }}
							className="break-words md:w-3/4 text-gray-200 text-md tracking-wide font-semibold text-center md:text-start"
						>
							With Bully Ventures, you can unleash your financial
							potential with premier early-stage project
							opportunities and expert trading insights.
						</motion.p>
					</div>

					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						className="flex flex-col md:flex-row gap-4"
					>
						<Button className="py-6 text-sm flex items-center w-full text-md font-semibold">
							What do we offer?
						</Button>

						<Button
							className="py-6 text-sm flex items-center w-full text-md hover:bg-primary hover:text-white font-semibold duration-500"
							variant="ghost"
						>
							Pitch your project
							<ArrowRight className="h-4 w-4 ml-2" />
						</Button>
					</motion.div>
				</div>
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<Image
						src="/logo-no-background.png"
						alt="Logo"
						width={0}
						height={0}
						className="object-contain rounded-full w-[16rem] md:w-[24rem] "
						unoptimized
					/>
				</motion.div>
			</div>
		</div>
	)
}

export default Hero
