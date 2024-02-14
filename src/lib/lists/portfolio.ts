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
		name: "Ordify",
		description:
			"Ordify is a protocol built for multiple layers and chains. Serving the BRC20, STACKS, RSK, All EVM Chains, and solana, ordify becomes the first the to cater for multiple ecosystems.",
		logo: "portfolio/ordify/ordify.jpg",
	},
	{
		id: 9,
		name: "Nibiru",
		description:
			"Nibiru Chain is an emerging Layer 1 blockchain, designed to empower both Web2 and Web3 developers. Nibiru offers a robust platform for building innovative applications and services, bridging the gap into blockchain development.",
		logo: "portfolio/nibiru/nibiru.jpg",
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
