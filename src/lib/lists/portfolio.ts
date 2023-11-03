interface PortfolioType {
    id: number;
    name: string;
    description: string;
    logo: string;
}

const portfolio: PortfolioType[] = [
  {
    id: 1,
    name: 'Defiyield',
    description: "World's First Web3 Antivirus & SuperApp.",
    logo: 'portfolio/defiyield/defiyield.jpg',
    
  },
  {
    id: 2,
    name: 'EYWA',
    description: 'Cross-chain liquidity & data protocol.',
    logo: 'portfolio/eywa/eywa.jpg',
    
  },
  {
    id: 3,
    name: 'Aether Games',
    logo: 'portfolio/aether/aether.jpg',
    description:
      'Aether Games, a groundbreaking transmedia development studio that has been turning heads in both web2 and web3 gaming spaces.',
    
  },
  {
    id: 4,
    name: 'Myria',
    description:
      "Myria is a blockchain gaming ecosystem powered by Myria's Ethereum L2 scaling solution.",
    logo: 'portfolio/myria/myria.png',
    
  },
  {
    id: 5,
    name: 'Parallel Chain',
    description:
      'Parallel Chain is a dual-blockchain ecosystem of applications and smart contracts powered by two layer-1 distributed ledgers: ParallelChain Mainnet and Parallel Chain Private. Founded with the purpose to create a utility-driven, networked and trusted ecosystem for web2 and web3 users.',
    logo: 'portfolio/parallel/parallel.jpg',
    
  },
  {
    id: 6,
    name: 'Virtual Versions',
    description:
      'Building a new era of social media - designed to restore ownership and privacy to individuals by empowering them with an AI-powered digital twin.',
    logo: 'portfolio/virtual_versions/virtualversions.jpg',
    
  },
  {
    id: 7,
    name: 'HyperGPT',
    logo: 'portfolio/hypergpt/hypergpt.png',
    description:
      'HyperGPT platform is designed to provide a marketplace where AI applications can be bought, sold, and exchanged in a secure and transparent manner, powered by blockchain technology.',
    
    // socials: [{ id: 1, link: "https://t.me/HyperGPTai", alt: "AI Telegram" }, { id: 2, link: "https://twitter.com/hypergpt", alt: "Twitter" }, { id: 3, link: "https://t.me/hypergptnews", alt: "News Telegram" }, { id: 4, link: "https://medium.com/@hypergptai", alt: "Medium" }, { id: 5, link: "https://www.linkedin.com/company/hypergpt", alt: "LinkedIn" }, { id: 6, link: "https://discord.gg/hypergpt", alt: "Discord" }]
  },
  {
    id: 8,
    name: 'ChappyGPT',
    description:
      'Chappy is the friendly AI in charge of overseeing your community and rewarding genuine interactions.',
    logo: 'portfolio/chappygpt/chappygpt.jpg',
    
  },
]

export default portfolio