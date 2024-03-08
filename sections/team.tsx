"use client";

import { Card } from "@/appComponents";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import { Figure, Heading, Picture, Text } from "@/elements";
import { useCarousel } from "@/hooks";

const Team = () => {
	const { current, setApi } = useCarousel();

	const items = [
		{
			name: "Tudor",
			role: "Founder",
			pngSrc: "/tudor.png",
			webpSrc: "/tudor.webp",
		},
		{
			name: "Heap Void",
			role: "CoFounder",
			pngSrc: "/heap.png",
			webpSrc: "/heap.webp",
		},
		{
			name: "Chris",
			role: "Full stack Developer",
			pngSrc: "/chris.png",
			webpSrc: "/chris.webp",
		},
		{
			name: "Futurum",
			role: "Community Manager",
			pngSrc: "/futurum.png",
			webpSrc: "/futurum.webp",
		},
		{
			name: "Ryusan",
			role: "Designer",
			pngSrc: "/ryusan.png",
			webpSrc: "/ryusan.webp",
		},
		{
			name: "FredOB",
			role: "Frontend Developer",
			pngSrc: "/fredob.png",
			webpSrc: "/fredob.webp",
		},
	];

	return (
		<section
			id="team"
			className="bg-black bg-center bg-cover bg-no-repeat bg-[url('/team-bg.webp')] -mx-4 px-4 pt-[50px] pb-16"
		>
			<Figure
				altText="tokenomics section icon"
				imageStyles="animate-bounce mx-auto"
				image="/team-icon.svg"
				width={60}
				height={60}
			/>
			<Heading
				as="h2"
				children="TEAM"
				className="text-white text-[30px] sm:text-[40px] mb-12 mt-4 md:mb-20 lg:text-5xl lg:leading-normal lg:mt-3.5 min-[1900px]:text-6xl"
			/>
			<Carousel
				setApi={setApi}
				className="w-full max-w-xs mx-auto sm:max-w-full xl:max-w-screen-2xl"
			>
				<CarouselContent className="md:gap-2.5">
					{items.map(({ name, role, pngSrc, webpSrc }, i) => (
						<CarouselItem
							key={i}
							className="h-max w-max px-5 sm:grow sm:basis-auto"
						>
							<Card
								type="team"
								styles="flex flex-col justify-center m-5 mx-auto py-[50px] rounded-[10px] text-center min-w-max max-w-[336px] sm:min-w-[336px]"
							>
								<Picture
									altText="team member"
									className="rounded-full h-[165px] w-[165px] mx-auto"
									pngImage={pngSrc}
									webpImage={webpSrc}
									width={165}
									height={165}
								/>
								<Text
									children={name}
									className="font-black mt-6 mb-[18px] text-[25px] uppercase"
								/>
								<Text children={role} className="text-lg" />
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="py-2 flex justify-center gap-2.5 mt-[60px] sm:mt-[50px]">
				{items.map((_, i) => (
					<span
						className={`inline-block h-5 w-5 rounded-full 2xl:hidden ${
							i + 1 === current ? "bg-[#D9BD41]" : "bg-white"
						}`}
						key={i}
					></span>
				))}
				<span className="bg-[#D9BD41] hidden h-5 w-5 rounded-full 2xl:inline-block"></span>
			</div>
		</section>
	);
};

export default Team;
// Team section
