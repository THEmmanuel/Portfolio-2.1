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
		ProjectCategory: 'AI · GPT · Fitness',
		ProjectName: 'Calcium - Stryd',
		ProjectColor: '#851344',
		ProjectDescription: `AI assisted workouts. Duolingo for fitness. Buildspace N&W finalist. Microsoft for Startups partner.`,

		ProjectTechnologies: [typescript, react, git, github, solidity, ethereum],
		ProjectLiveLink: 'https://project-stryd.vercel.app/',
		ProjectDemoink: 'https://youtu.be/txWmvonro0Q',
		ProjectRepoLink: '',
		ProjectID: 'Project-01'
	},

	{
		ProjectCategory: 'Blockchain · Gaming · Wiki',
		ProjectName: 'Guide Of Guardians',
		ProjectColor: '#851344',
		ProjectDescription: `The #1 resource for the upcoming Guild of Guardians game.`,

		ProjectTechnologies: [typescript, react, git, github, solidity, ethereum],
		ProjectLiveLink: 'https://guide-of-guardians.vercel.app/',
		ProjectDemoink: '',
		ProjectRepoLink: '',
		ProjectID: 'Project-01'
	},

	{
		ProjectCategory: 'Blockchain · NFT · Climate',
		ProjectName: 'Dottyland Impact Self',
		ProjectColor: '#851344',
		ProjectDescription: `Enabling you to benefit from your impact data through a digital sovereign identity.`,

		ProjectTechnologies: [typescript, react, git, github, solidity, ethereum],
		ProjectLiveLink: 'https://project-stryd.vercel.app/',
		ProjectDemoink: 'https://youtu.be/txWmvonro0Q',
		ProjectRepoLink: '',
		ProjectID: 'Project-01'
	},

	{
		ProjectCategory: 'Blockchain · DeFi',
		ProjectName: 'Hydra DAO',
		ProjectColor: '#851344',
		ProjectDescription: `Hydra is a cryptocurrency with a rising floor
		price and a stable market price. Prize winner from ZkSync.`,

		ProjectTechnologies: [typescript, react, git, github, solidity, ethereum],
		ProjectLiveLink: '',
		ProjectDemoink: 'https://showcase.ethglobal.com/hackmoney2022/hydra-dao-1cccw',
		ProjectRepoLink: 'https://github.com/hydradao/hydradao-smart-contracts',
		ProjectID: 'Project-01'
	},

	{
		ProjectCategory: 'E-Commerce',
		ProjectName: 'Nubiamania(demo)',
		ProjectColor: '#CC9C7C',
		ProjectDescription: 'Online trade fair site for independent African creatives.',

		ProjectTechnologies: [css, javascript, react, firebase, git],

		ProjectLiveLink: 'https://nubiamania.onrender.com/',
		ProjectDemoink: '',
		ProjectRepoLink: '',
		ProjectID: 'Project-03'
	},

	{
		ProjectCategory: 'Blockchain · NFTs',
		ProjectName: 'Buildspace NFT game',
		ProjectColor: '#073F45',
		ProjectDescription: `Mini turn-based NFT browser game`,

		ProjectTechnologies: [typescript, react, git, github],
		ProjectLiveLink: 'https://nft-game-aut3.onrender.com',
		ProjectDemoink: '',
		ProjectRepoLink: 'https://github.com/THEmmanuel/epic-nft-game',
	},

	{
		ProjectCategory: 'Blockchain · NFTs',
		ProjectName: 'Buildspace NFT dApp',
		ProjectColor: '#14962E',
		ProjectDescription: ` A dApp that allows users to connect their wallets and programmatically mint NFTs on the Ethereum 
		blockchain.`,

		ProjectTechnologies: [typescript, react, git, github],
		ProjectLiveLink: 'https://nft-stuff.onrender.com',
		ProjectDemoink: '',
		ProjectRepoLink: 'https://github.com/THEmmanuel/nft-stuff',
	},

	{
		ProjectCategory: 'Portfolio · Agency',
		ProjectName: 'Colture Management',
		ProjectColor: '#4F7375',
		ProjectDescription: `Colture is a team of creators, shaping perception
        through storytelling.`,

		ProjectTechnologies: [css, html, wordpress, javascript, git],

		ProjectLiveLink: 'https://colturemgt.com/',
		ProjectDemoink: '',
		ProjectRepoLink: '',
	},

	{
		ProjectCategory: '3D · Experiment',
		ProjectName: 'Pale Blue Dot',
		ProjectColor: '#074F32',
		ProjectDescription: 'A 3D render of the Earth, practice with threeJS.',

		ProjectTechnologies: [html, css, javascript, react, git],

		ProjectLiveLink: 'https://pale-blue.onrender.com',
		ProjectDemoink: '',
		ProjectRepoLink: 'https://github.com/THEmmanuel/pale-blue-dot-3d/tree/main',
	},

	{
		ProjectCategory: 'Video · WebRTC',
		ProjectName: 'Callr',
		ProjectDescription: `Make anonymous video and voice calls worldwide with a one time token.`,

		ProjectTechnologies: [css, javascript, react, webrtc, git],

		ProjectLiveLink: 'https://callr.onrender.com',
		ProjectDemoink: '',
		ProjectRepoLink: 'https://github.com/THEmmanuel/React-Video-Call-02/tree/master',
		ProjectID: 'Project-05'
	},

	{
		ProjectCategory: 'AI · Experiment',
		ProjectName: 'Self Driving Car',
		ProjectColor: '#1B1482',
		ProjectDescription: `Car with self driving AI with neural network built from scratch with no libraries from Radu Mariescu Istodor's advanced javascript course`,

		ProjectTechnologies: [typescript, react, git, github],
		ProjectLiveLink: 'https://self-driving.netlify.app',
		ProjectDemoink: '',
		ProjectRepoLink: 'https://github.com/THEmmanuel/self-driving-car-simulation',
	},

	{
		ProjectCategory: 'Music player · Experiment',
		ProjectName: 'Moosic',
		ProjectColor: '#D16B92',
		ProjectDescription: 'Music player for Windows. Built with C# and Winforms.',

		ProjectTechnologies: [csharp, git],

		ProjectLiveLink: '',
		ProjectDemoink: '',
		ProjectRepoLink: 'https://github.com/THEmmanuel/moosic'
	}

]

export default ProjectList