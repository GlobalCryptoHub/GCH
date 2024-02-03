import { NavBar, ScrollToTop } from "@/appComponents";
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
			<div
				id="top"
				className="bg-[#eee] bg-center bg-cover bg-origin-content bg-no-repeat md:bg-[url('/nav-bg.webp')] relative -m-4 p-4 pb-36 sm:pb-40 lg:pb-48 space-y-[60px] [clip-path:polygon(0_0,100%_0,100%_100%,0%_90%)] sm:[clip-path:polygon(0_0,100%_0,100%_95%,0%_85%)]"
			>
				<NavBar />
				<Hero />
				<div className="absolute bg-black inset-0 -top-16 w-full h-full -z-20 md:pb-40 [clip-path:polygon(0_0,100%_0,100%_97%,0%_90%)] sm:[clip-path:polygon(0_0,100%_0,100%_90%,0%_85%)]"></div>
			</div>
			<Engagement />
			<div className="relative">
				<UserGratification />
				<MiningPools />
				<Nft />
				<Tokenomics />
				<RoadMap />
				<Team />
				<Faq />
				<Footer />
				<ScrollToTop />
			</div>
		</main>
	);
}
