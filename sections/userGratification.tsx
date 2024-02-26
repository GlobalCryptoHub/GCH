import { Figure, Heading, Text } from "@/elements";

const UserGratification = () => {
	const items = [
		{
			title: "Fully customizable user profile",
			subTitle: "Show Off your hard-earned stats",
			src: "/user-profile.png",
		},
		{
			title: "No luck involved",
			subTitle: "Earn with every action",
			src: "/no-luck.png",
		},
		{
			title: "Daily task bonus ",
			subTitle: "Earn extra % bonus by completing tasks every day",
			src: "/task-bonus.png",
		},
		{
			title: "Leveling system",
			subTitle: "Each LVL provides extra % bonus",
			src: "/leveling-system.png",
		},
		{
			title: "Achievements",
			subTitle: "Completing quests grants achievements and extra % bonus",
			src: "/achievements.png",
		},
		{
			title: "Work more, Earn more",
			subTitle: "Up to 80% earning bonus when completing quests",
			src: "/earn-more.png",
		},
	];

	return (
		<section
			id="user-gratification"
			className="bg-[#eee] -mx-4 px-4 py-20 [clip-path:polygon(0_0,100%_3%,100%_100%,0%_100%)] sm:pb-28 sm:pt-32 sm:[clip-path:polygon(0_0,100%_12%,100%_100%,0%_100%)]"
		>
			<Figure
				altText="user gratification section icon"
				imageStyles="animate-bounce mx-auto"
				image="/user-gratification-icon.svg"
				width={60}
				height={60}
			/>
			<Heading
				as="h2"
				children="User gratification"
				className="text-3xl sm:text-[40px] mb-[30px] mt-4 lg:text-5xl lg:leading-normal lg:mt-3.5 min-[1900px]:text-6xl"
			/>
			<Text
				children="Say goodbye to endless farming without any rewards"
				className="text-center text-lg lg:text-[22px] min-[1900px]:text-[25px]"
			/>
			<div className="flex flex-wrap gap-x-[30px] gap-y-10 mt-16 justify-center max-w-[969px] mx-auto lg:mt-10">
				{items.map(({ title, subTitle, src }, i) => (
					<div
						key={i}
						className="text-center min-w-[265px] max-w-[300px] mx-auto sm:max-w-[300px] sm:min-w-[300px]"
					>
						<Figure
							altText={title}
							image={src}
							imageStyles="m-auto"
							containerStyles="bg-white rounded-full flex h-[166px] w-[166px] mx-auto"
						/>
						<Text
							children={title}
							className="font-black text-[22px] mb-1.5 mt-2.5"
						/>
						<Text children={subTitle} className="min-[1900px]:text-lg" />
					</div>
				))}
			</div>
		</section>
	);
};

export default UserGratification;
// User gratification section
