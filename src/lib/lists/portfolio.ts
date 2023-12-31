interface PortfolioType {
	id: number
	name: string
	description: string
	logo: string
}

const portfolio: PortfolioType[] = [
	{
		id: 1,
		name: "Defiyield",
		description: "World's First Web3 Antivirus & SuperApp.",
		logo: "portfolio/defiyield/defiyield.jpg",
	},
	{
		id: 2,
		name: "Privasea",
		description: "World's First Web3 Antivirus & SuperApp.",
		logo: "portfolio/privasea/privasea.jpg",
	},
	{
		id: 3,
		name: "Metacard",
		description: "World's First Web3 Antivirus & SuperApp.",
		logo: "portfolio/metacard/metacard.jpg",
	},
	{
		id: 4,
		name: "EYWA",
		description: "Cross-chain liquidity & data protocol.",
		logo: "portfolio/eywa/eywa.jpg",
	},
	{
		id: 5,
		name: "Aether Games",
		logo: "portfolio/aether/aether.jpg",
		description:
			"Aether Games, a groundbreaking transmedia development studio that has been turning heads in both web2 and web3 gaming spaces.",
	},
	{
		id: 6,
		name: "Myria",
		description:
			"Myria is a blockchain gaming ecosystem powered by Myria's Ethereum L2 scaling solution.",
		logo: "portfolio/myria/myria.png",
	},
	{
		id: 7,
		name: "ChappyGPT",
		description:
			"Chappy is the friendly AI in charge of overseeing your community and rewarding genuine interactions.",
		logo: "portfolio/chappygpt/chappygpt.jpg",
	},
	{
		id: 8,
		name: "Parallel Chain",
		description:
			"Parallel Chain is a dual-blockchain ecosystem of applications and smart contracts powered by two layer-1 distributed ledgers: ParallelChain Mainnet and Parallel Chain Private. Founded with the purpose to create a utility-driven, networked and trusted ecosystem for web2 and web3 users.",
		logo: "portfolio/parallel/parallel.jpg",
	},
	{
		id: 9,
		name: "Virtual Versions",
		description:
			"Building a new era of social media - designed to restore ownership and privacy to individuals by empowering them with an AI-powered digital twin.",
		logo: "portfolio/virtual_versions/virtualversions.jpg",
	},
	{
		id: 10,
		name: "HyperGPT",
		logo: "portfolio/hypergpt/hypergpt.png",
		description:
			"HyperGPT platform is designed to provide a marketplace where AI applications can be bought, sold, and exchanged in a secure and transparent manner, powered by blockchain technology.",
	},
]

export default portfolio
