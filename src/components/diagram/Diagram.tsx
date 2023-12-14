import { motion } from "framer-motion"
import Image from "next/image"

const Diagram = () => {
	return (
		<div className="max-w-5xl md:max-w-7xl mx-auto relative flex flex-col gap-y-[4rem] items-center justify-center h-full pb-[25vh]">
			<motion.h1
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				className="text-xl md:text-3xl font-bold tracking-widest text-white text-center uppercase drop-shadow-lg"
				style={{ textShadow: "2px 2px #e11d48" }}
			>
				Your success is our success.
			</motion.h1>

			<div className="relative md:w-[50rem] flex items-center">
				<svg>
					<defs>
						<linearGradient
							id="gradient"
							gradientTransform="rotate(0)"
						>
							<stop offset="25%" stopColor="black" />
							<stop offset="60%" stopColor="white" />
							<stop offset="75%" stopColor="black" />
						</linearGradient>
						<mask id="gradientMask">
							<rect
								id="maskRect"
								height="400"
								width="400"
								fill="url('#gradient')"
							>
								<animate
									id="anim"
									attributeName="x"
									dur="1.5s"
									from="-100%"
									to="400%"
									begin="1s; anim.end"
								/>
							</rect>
						</mask>

						<mask id="endGradientMask">
							<rect
								id="maskRect"
								height="400"
								width="400"
								fill="url('#gradient')"
							>
								<animate
									id="anim"
									attributeName="x"
									dur="1.5s"
									from="-200%"
									to="100%"
									begin="0s; anim.end"
								/>
							</rect>
						</mask>
					</defs>
				</svg>

				{/* First SVG */}

				<motion.svg
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="absolute inset-y-[24px] hidden md:flex"
					width="300"
					viewBox="0 0 400 200"
				>
					<path
						d="M 0,0 C 300,4 200,78 400,78"
						stroke="#1f2937"
						strokeWidth="6"
						fill="none"
					/>

					<path
						d="M 0,0 C 300,4 200,78 400,78"
						stroke="#020202"
						strokeWidth="4"
						fill="none"
					/>

					<path
						d="M 0, 0 C 300,4 200,78 400,78"
						stroke="#fff"
						strokeWidth="4"
						fill="none"
						mask="url('#gradientMask')"
					/>
				</motion.svg>

				<motion.svg
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="absolute inset-y-[24px] md:hidden"
					width="150"
					viewBox="0 0 400 200"
				>
					<path
						d="M 0,0 C 300,4 200,78 400,78"
						stroke="#1f2937"
						strokeWidth="6"
						fill="none"
					/>

					<path
						d="M 0,0 C 300,4 200,78 400,78"
						stroke="#020202"
						strokeWidth="4"
						fill="none"
					/>

					<path
						d="M 0, 0 C 300,4 200,78 400,78"
						stroke="#fff"
						strokeWidth="4"
						fill="none"
						mask="url('#gradientMask')"
					/>
				</motion.svg>

				{/* Second SVG */}

				<motion.svg
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="absolute inset-y-[24px] hidden md:flex"
					width="300"
					viewBox="0 0 400 200"
				>
					<path
						d="M0,100 C200,85 200,98 400,98"
						stroke="#1f2937"
						strokeWidth="6"
						fill="none"
					/>

					<path
						d="M0, 100 C200,85 200,98 400,98"
						stroke="#020202"
						strokeWidth="4"
						fill="none"
					/>

					<path
						d="M0,100 C200,85 200,98 400,98"
						stroke="#fff"
						strokeWidth="4"
						fill="none"
						mask="url('#gradientMask')"
					/>
				</motion.svg>

				<motion.svg
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="absolute inset-y-[4rem] md:hidden"
					width="150"
					viewBox="0 0 400 200"
				>
					<path
						d="M0,100 C200,85 200,98 400,98"
						stroke="#1f2937"
						strokeWidth="6"
						fill="none"
					/>

					<path
						d="M0, 100 C200,85 200,98 400,98"
						stroke="#020202"
						strokeWidth="4"
						fill="none"
					/>

					<path
						d="M0,100 C200,85 200,98 400,98"
						stroke="#fff"
						strokeWidth="4"
						fill="none"
						mask="url('#gradientMask')"
					/>
				</motion.svg>

				{/* Third FVG */}

				<motion.svg
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="absolute inset-y-[24px] hidden md:flex"
					width="300"
					viewBox="0 0 400 200"
				>
					<path
						d="M 0, 200 C 200, 200 200, 118 400, 118"
						stroke="#1f2937"
						strokeWidth="6"
						fill="none"
					/>

					<path
						d="M0, 200 C 200,200 200,118 400,118"
						stroke="#020202"
						strokeWidth="4"
						fill="none"
					/>

					<path
						d="M0,200 C 200, 200 200,118 400,118"
						stroke="#fff"
						strokeWidth="4"
						fill="none"
						mask="url('#gradientMask')"
					/>
				</motion.svg>

				<motion.svg
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="absolute inset-y-[6rem] md:hidden"
					width="150"
					viewBox="0 0 400 200"
				>
					<path
						d="M 0, 200 C 200, 200 200, 118 400, 118"
						stroke="#1f2937"
						strokeWidth="6"
						fill="none"
					/>

					<path
						d="M0, 200 C 200,200 200,118 400,118"
						stroke="#020202"
						strokeWidth="4"
						fill="none"
					/>

					<path
						d="M0,200 C 200, 200 200,118 400,118"
						stroke="#fff"
						strokeWidth="4"
						fill="none"
						mask="url('#gradientMask')"
					/>
				</motion.svg>

				{/* Final SVG */}

				<motion.svg
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="absolute inset-y-[30px] left-[30rem]"
					width="300"
					viewBox="0 0 400 200"
				>
					<path
						d="M0,100 C200,85 200,98 400,98"
						stroke="#1f2937"
						strokeWidth="6"
						fill="none"
					/>

					<path
						d="M0, 100 C200,85 200,98 400,98"
						stroke="#020202"
						strokeWidth="4"
						fill="none"
					/>

					<path
						d="M0,100 C200,85 200,98 400,98"
						stroke="#e11d48"
						strokeWidth="4"
						fill="none"
						mask="url('#endGradientMask')"
					/>
				</motion.svg>

				<motion.div
					initial={{ x: -150, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 2 }}
					className="absolute -left-[15%] bg-[#020202] font-semibold border border-gray-800/40 text-xs md:text-sm h-[48px] flex justify-center items-center rounded-[8px] drop-shadow-lg top-[3px] w-[100px] md:w-[200px]"
				>
					Research
				</motion.div>

				<motion.div
					initial={{ x: -150, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 2 }}
					className="absolute -left-[15%] bg-[#020202] font-semibold border border-gray-800/40 text-xs md:text-sm h-[48px] flex justify-center items-center rounded-[8px] drop-shadow-lg top-[48%] w-[100px] md:w-[200px]"
				>
					Trust
				</motion.div>

				<motion.div
					initial={{ x: -150, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 2 }}
					className="absolute -left-[2rem] md:-left-[15%] bg-[#020202] font-semibold border border-gray-800/40 text-xs md:text-sm h-[48px] flex justify-center items-center rounded-[8px] drop-shadow-lg top-[95%] w-[100px] md:w-[200px]"
				>
					Community
				</motion.div>

				<motion.div
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="absolute bg-[#020202] uppercase font-semibold border border-gray-800/40 w-max h-max flex justify-center items-center rounded-[8px] top-12 md:top-1 drop-shadow-lg text-md left-24 md:left-72 px-8"
				>
					<Image
						src="/logo-no-background.png"
						alt="logo"
						width={200}
						height={200}
						className="hidden md:flex"
					/>

					<Image
						src="/logo-no-background.png"
						alt="logo"
						width={100}
						height={100}
						className="md:hidden"
					/>
				</motion.div>

				<motion.div
					initial={{ x: 150, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 2 }}
					className="absolute -right-[15%] bg-[#020202] font-semibold border border-gray-800/40 text-sm h-[48px] flex justify-center items-center rounded-[8px] drop-shadow-lg top-[52%] w-[200px]"
				>
					<p className="text-primary animate-pulse">
						Successfull investments
					</p>
				</motion.div>
			</div>
		</div>
	)
}

export default Diagram
