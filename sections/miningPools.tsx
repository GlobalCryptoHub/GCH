import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
	DialogTitle,
} from "@/components/ui/dialog";

import { Card } from "@/appComponents";
import { Button, Figure, Heading, Text } from "@/elements";

const MiningPools = () => {
	const items = [
		{
			title: "High-yield daily mining pool",
			list: [
				"Provides extra visibility and engagement",
				"Very High reward Yield",
				"Fastest results",
				"Available only for 24h from activation",
				"Maximum 15 Slots available ",
			],
		},
		{
			title: "Weekly mining pool",
			list: [
				"High/Medium reward yield",
				"Greater the offered reward, the higher the quest's ranking",
				"Available for 7 days from activation",
				"Unlimited Slots available",
			],
		},
		{
			title: "Monthly mining pool",
			list: [
				"High reward yield",
				"Greater the offered reward, the higher the quest's ranking",
				"Available for 28 days from activation",
				"Unlimited Slots available",
			],
		},
	];

	return (
		<section id="mining-pools" className="pt-10 pb-[60px] sm:py-14">
			<Figure
				altText="mining pool section icon"
				imageStyles="animate-bounce mx-auto"
				image="/mining-pools-icon.svg"
				width={60}
				height={60}
			/>
			<Heading
				as="h2"
				children="Introducing quest mining pools"
				className="text-[30px] sm:text-[40px] mt-4 lg:text-6xl lg:leading-normal lg:mt-3.5"
			/>
			<Text
				children="Select your desired pool and deploy your quests"
				className="mb-[50px] mt-5 sm:mb-20 sm:mt-[30px] text-center text-[25px]"
			/>
			<div className="flex flex-wrap gap-10 md:gap-14 justify-center">
				{items.map(({ title, list }, i) => (
					<Card
						styles={`flex flex-col max-w-sm relative pb-10 lg:max-w-md ${
							i % 2 ? "pt-20 sm:pt-24" : "pt-5 sm:pt-14"
						}`}
						key={i}
					>
						{i % 2 ? (
							<Text
								as="span"
								className="absolute bg-[#D9BD41] font-black py-3 px-2.5 sm:py-3.5 sm:pl-[15px] sm:pr-6 rounded-r-full text-lg text-white top-0 uppercase"
							>
								MOST POPULAR
							</Text>
						) : (
							<></>
						)}
						<Heading
							as="h3"
							children={title}
							className="border-b border-b-[#ccc] leading-[105%] text-[40px] pb-[30px] px-10"
						/>
						<ul className="mb-[30px] mt-10 ml-[30px] text-lg lg:text-xl max-w-[300px] space-y-2.5 lg:space-y-5 max-w-1/2">
							{list.map((listItem, i) => (
								<li
									className="flex gap-3 md:gap-3.5 items-start capitalize"
									key={i}
								>
									<span className="bg-[#D9BD41] inline-block rounded-full h-[15px] w-[15px] min-w-[15px] mt-1 lg:mt-1.5"></span>
									{listItem}
								</li>
							))}
						</ul>
						<Dialog>
							<DialogTrigger asChild>
								<Button
									children="Deploy Now"
									className={`block mt-auto mx-auto ${
										i % 2
											? "bg-black hover:bg-[#D9BD41] active:bg-[#D9BD41] focus:bg-[#D9BD41]"
											: "border-2 border-[#D8BC40] bg-[#D9BD41] py-3.5  hover:bg-black active:bg-black focus:bg-black hover:border-black active:border-black focus:border-black"
									}`}
								/>
							</DialogTrigger>
							<DialogContent className="bg-black border-[#D8BC40] rounded-2xl text-white w-[90vw] sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle className="decoration-2 mb-5 underline underline-offset-4">
										Notice!!!
									</DialogTitle>
									<DialogDescription className="font-semibold text-white/70">
										DApp is currently in development.
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</Card>
				))}
			</div>
		</section>
	);
};

export default MiningPools;
// Mining pools section
