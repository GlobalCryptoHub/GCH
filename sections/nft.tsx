import { Figure, Heading, Picture, Text } from "@/elements";

const Nft = () => {
	const items = [
		"Up to 100% extra earning bonus upon staking",
		"3 rarity Tiers: 25% | 50% | 100% Extra mining power",
		"OG/WL spots open. Join our Discord",
		"Extra earning opportunities by verifying proof of work tasks",
		"GCH token airdrop",
		"Voting and proposal power",
		"Possible token airdrop from partners",
		"Free participation in private sales. No WL, No geo-restriction",
		"Free access to founders' chat",
		"Early futures access",
		"Limited availability",
	];

	return (
		<section className="bg-[#eee] -mx-4 px-4 py-16 [clip-path:polygon(0_0,100%_4%,100%_100%,0%_100%)] sm:pb-32 sm:pt-40 sm:[clip-path:polygon(0_0,100%_14%,100%_100%,0%_100%)]">
			<Figure
				altText="nft section icon"
				imageStyles="mx-auto"
				image="/nft-icon.svg"
				width={60}
				height={60}
			/>
			<Heading
				as="h2"
				children="The global Gateway NFT"
				className="text-[40px] mb-10 mt-4 lg:text-6xl lg:leading-normal lg:mt-3.5 lg:mb-20"
			/>
			<div className="grid gap-20 sm:gap-16 md:gap-20 lg:gap-24 sm:grid-cols-2">
				<div className="mx-auto relative h-fit">
					<Picture
						altText="nft"
						className="bg-[#01002A] blur-xl rounded-[15px]"
						pngImage="/nft-image.png"
						webpImage="/nft-image.webp"
						width={452}
						height={566}
					/>
					<Text
						children="Coming soon"
						className="absolute blur-[2px] text-center font-black h-fit w-fit inset-0 m-auto text-4xl lg:text-[50px] text-white -rotate-45 uppercase"
					/>
				</div>
				<ul className="text-base lg:text-[25px] lg:leading-normal max-w-4xl mx-auto space-y-4 lg:space-y-[25px] max-w-1/2">
					{items.map((item, i) => (
						<li
							className={`flex gap-5 md:gap-6 items-start ${
								!i && "font-black"
							}`}
							key={i}
						>
							<span className="bg-[#D9BD41] inline-block rounded-full h-[15px] w-[15px] min-w-[15px] mt-1 lg:mt-1.5"></span>
							{item}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Nft;
// Nft section
