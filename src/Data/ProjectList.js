//Add an array containing the images for the stack icons.
import website from '../../src/Assets/icons/network.png';
import video from '../../src/Assets/icons/video.png';
import send from '../../src/Assets/icons/send.png';
import threeD from '../../src/Assets/icons/3d.png';
import art from '../../src/Assets/icons/art.png';
import music from '../../src/Assets/icons/music.png';
import blockchain from '../../src/Assets/icons/blockchain.png';
import car from '../../src/Assets/icons/car.png';
//ethereum for blockchain and web3 stuff


//solidity, hardhat, node, express, ethereum, mongodb, aws
import aws from '../../src/Assets/icons/aws.png'
import solidity from '../../src/Assets/icons/solidity.png'
import mongo from '../../src/Assets/icons/mongo.png'
import sass from '../../src/Assets/icons/sass.png'
import ethereum from '../../src/Assets/icons/ethereum.png'
import csharp from '../../src/Assets/icons/csharp.png'
import css from '../../src/Assets/icons/css.png'
import firebase from '../../src/Assets/icons/firebase.png'
import git from '../../src/Assets/icons/git.png'
import github from '../../src/Assets/icons/github.png'
import html from '../../src/Assets/icons/html.png'
import javascript from '../../src/Assets/icons/javascript.png'
import node from '../../src/Assets/icons/node.png'
import react from '../../src/Assets/icons/react.png'
import svg from '../../src/Assets/icons/svg.png'
import typescript from '../../src/Assets/icons/typescript.png'
import webrtc from '../../src/Assets/icons/webrtc.png'
import reactProject from '../../src/Assets/icons/react-project.png'
import wordpress from '../../src/Assets/icons/wordpress.png'

const ProjectList = [{
		ProjectImage: blockchain,
		ProjectName: 'Hydra DAO DeFi',
		ProjectColor: '#851344',
		ProjectDescription: `Joined Hydra DAO to build a crypto native reserve currency with a rising floor
		price and a stable market price during the 2022 ETHGlobal Hackmoney Hackathon. Won $5000 pool prize from ZkSync.`,

		ProjectTechnologies: [typescript, react, git, github, solidity, ethereum],
		ProjectLiveLink: 'https://showcase.ethglobal.com/hackmoney2022/hydra-dao-1cccw',
		ProjectID: 'Project-01'
	},

	{
		ProjectImage: art,
		ProjectName: 'Nubiamania(demo)',
		ProjectColor: '#CC9C7C',
		ProjectDescription: 'Online trade fair site for independent African creatives.',

		ProjectTechnologies: [css, javascript, react, firebase, git],

		ProjectLiveLink: 'https://nubiamania.herokuapp.com/',
		ProjectID: 'Project-03'
	},

	{
		ProjectImage: blockchain,
		ProjectName: 'Buildspace NFT game',
		ProjectColor: '#073F45',
		ProjectDescription: `Turn-based NFT browser game with dApp that allows users to play as Darth Vader, Hulk and Goku against Godzilla and mint their NFTs to the Ethereum 
		blockchain as they play`,

		ProjectTechnologies: [typescript, react, git, github],
		ProjectLiveLink: 'https://comfy-taffy-de7be5.netlify.app/',
		ProjectID: 'Project-01'
	},

	{
		ProjectImage: blockchain,
		ProjectName: 'Buildspace NFT dApp',
		ProjectColor: '#14962E',
		ProjectDescription: ` A dApp that allows users to connect their wallets and programmatically generate NFTs on-chain to the Ethereum 
		blockchain.`,

		ProjectTechnologies: [typescript, react, git, github],
		ProjectLiveLink: 'https://ecstatic-einstein-064be3.netlify.app/',
		ProjectID: 'Project-01'
	},

	{
		ProjectImage: video,
		ProjectName: 'Callr',
		ProjectDescription: `Make anonymous video and voice calls worldwide with a one time token.`,

		ProjectTechnologies: [css, javascript, react, webrtc, git],

		ProjectLiveLink: 'https://callr-x.herokuapp.com/',
		ProjectID: 'Project-05'
	},

	{
		ProjectImage: car,
		ProjectName: 'Self Driving Car',
		ProjectColor: '#1B1482',
		ProjectDescription: `Car with self driving AI with neural network built from scratch with no libraries from Radu Mariescu Istodor's advanced javascript course`,

		ProjectTechnologies: [typescript, react, git, github],
		ProjectLiveLink: 'https://self-driving.netlify.app',
		ProjectID: 'Project-01'
	},

	{
		ProjectImage: reactProject,
		ProjectName: 'Typescript React Starter',
		ProjectColor: '#021924',
		ProjectDescription: `A minimal starter for starting React.js projects with Typescript without CRA.`,

		ProjectTechnologies: [typescript, react, git, github],
		ProjectLiveLink: 'https://github.com/THEmmanuel/typescript-react-starter',
		ProjectID: 'Project-01'
	},

	{
		ProjectImage: send,
		ProjectName: 'flink.ng',
		ProjectColor: '#3D503A',
		ProjectDescription: `Send money with a link. (Work in Progress).`,

		ProjectTechnologies: [typescript, react, node, git],
		ProjectID: 'Project-02'
	},

	{
		ProjectImage: website,
		ProjectName: 'Colture Management',
		ProjectColor: '#4F7375',
		ProjectDescription: `Colture is a team of creators, shaping perception
        through storytelling.`,

		ProjectTechnologies: [css, html, wordpress, javascript, git],

		ProjectLiveLink: 'https://colturemgt.com/',
		ProjectID: 'Project-04'
	},

	{
		ProjectImage: website,
		ProjectName: 'Quick Credit Frontend',
		ProjectDescription: 'Loan app built during a bootcamp at Andela.',
		ProjectColor: '#29507D',
		ProjectTechnologies: [css, html, javascript, git],
		ProjectID: 'Project-06',
		ProjectLiveLink: 'https://themmanuel.github.io/Quick-Credit/UI',
	},

	{
		ProjectImage: threeD,
		ProjectName: 'Pale Blue Dot',
		ProjectColor: '#074F32',
		ProjectDescription: 'A 3D render of the Earth, practice with threeJS.',

		ProjectTechnologies: [html, css, javascript, react, git],

		ProjectLiveLink: 'https://pale-blue.netlify.app/',
		ProjectID: 'Project-07'
	},

	{
		ProjectImage: music,
		ProjectName: 'Moosic',
		ProjectColor: '#D16B92',
		ProjectDescription: 'Music player for Windows. Built with C# and Winforms.',

		ProjectTechnologies: [csharp, git],

		ProjectLiveLink: 'https://github.com/THEmmanuel/moosic',
		ProjectID: 'Project-08'
	}

]

export default ProjectList