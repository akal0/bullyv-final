import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	return (
		<div className="max-w-5xl flex flex-col gap-8 2xl:max-w-7xl mx-auto w-full relative border-t border-gray-800/40 py-12">
			<div className="grid grid-cols-2 md:grid-cols-3 text-sm">
				<div className="hidden md:flex items-center justify-center">
					<Image
						src="/logo-no-background.png"
						width={0}
						height={0}
						className="hidden md:flex md:w-48 md:h-48"
						alt="logo"
						unoptimized
					/>
				</div>

				<div className="flex flex-col gap-4 py-4 md:py-12">
					<Link href="#hero" className="nav-item w-max">
						Home
					</Link>

					<Link href="#services" className="nav-item w-max">
						Services
					</Link>

					<Link href="#partners" className="nav-item w-max">
						Partners
					</Link>

					<Link href="#portfolio" className="nav-item w-max">
						Portfolio
					</Link>

					<Link href="#contact" className="nav-item w-max">
						Contact
					</Link>
				</div>

				<div className="flex flex-col md:justify-between gap-4 py-4 md:py-12 w-full">
					<div className="flex flex-col gap-4">
						<Link
							href="https://t.me/BullyVentures"
							className="nav-item w-max"
						>
							Telegram
						</Link>

						<Link
							href="https://twitter.com/BullyVentures"
							className="nav-item w-max"
						>
							Twitter
						</Link>
					</div>

					<Link
						href="https://twitter.com/kalcryptev"
						className="nav-item w-full md:w-max text-sm"
					>
						Made with ❤️ by @kalcryptev
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
