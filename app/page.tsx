import { Card, Menu } from "@/appComponents";
import { Heading } from "@/elements";

export default function Home() {
	return (
		<main className="min-h-screen p-4">
			<Menu />
			<Card type="team" styles="rounded-2xl" shadowStyles="rounded-2xl">
				<Heading
					as="h3"
					children="Weekly mining pool"
					className="leading-[105%] text-[40px]"
				/>
			</Card>
		</main>
	);
}
