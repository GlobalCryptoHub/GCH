import { NavBar } from "@/appComponents";
import { Hero } from "@/sections";

export default function Home() {
	return (
		<main className="min-h-screen p-4">
			<div className="bg-black -m-4 p-4 space-y-[60px]">
				<NavBar />
				<Hero />
			</div>
		</main>
	);
}
