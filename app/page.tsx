import { Button } from "@/elements";

export default function Home() {
	return (
		<main className="min-h-screen p-4">
			<Button
				children="Get It Now"
				className="border-2 border-[#D8BC40] bg-[#D9BD41] py-3.5 hover:bg-black active:bg-black focus:bg-black"
			/>
			<Button
				children="Launch Dapp"
				className="border-2 border-[#D8BC40] bg-transparent py-3.5 hover:bg-[#D9BD41] active:bg-[#D9BD41] focus:bg-[#D9BD41]"
			/>
			<Button
				children="Get It Now"
				className="bg-black hover:bg-[#D9BD41] active:bg-[#D9BD41] focus:bg-[#D9BD41]"
			/>
		</main>
	);
}
