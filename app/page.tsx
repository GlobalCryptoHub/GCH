import { NavBar } from "@/appComponents";
import {
	Engagement,
	Faq,
	Footer,
	Hero,
	MiningPools,
	Nft,
	RoadMap,
	Team,
	Tokenomics,
	UserGratification,
} from "@/sections";

export default function Home() {
	return (
		<main className="min-h-screen p-4">
			<div className="bg-black -m-4 p-4 space-y-[60px] [clip-path:polygon(0_0,100%_0,100%_100%,0%_90%)] sm:pb-40 sm:[clip-path:polygon(0_0,100%_0,100%_100%,0%_85%)]">
				<NavBar />
				<Hero />
			</div>
			<Engagement />
			<UserGratification />
			<MiningPools />
			<Nft />
			<Tokenomics />
			<RoadMap />
			<Team />
			<Faq />
			<Footer />
		</main>
	);
}
