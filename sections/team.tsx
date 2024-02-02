"use client";

import { Card } from "@/appComponents";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { Figure, Heading, Picture, Text } from "@/elements";
import { useCarousel } from "@/hooks";

const Team = () => {
	const { current, setApi } = useCarousel();

	const items = [
		{
			name: "Matt",
			role: "Marketing",
			pngSrc: "/matt.png",
			webpSrc: "/matt.webp",
		},
		{
			name: "Jen",
			role: "Head of Design",
			pngSrc: "/jen.png",
			webpSrc: "/jen.webp",
		},
		{
			name: "Chris",
			role: "Full stack Developer",
			pngSrc: "/chris.png",
			webpSrc: "/chris.webp",
		},
		{
			name: "Andrew",
			role: "Chief of Department",
			pngSrc: "/andrew.png",
			webpSrc: "/andrew.webp",
		},
	];

	return (
		<section
			id="team"
			className="bg-black bg-center bg-cover bg-no-repeat bg-[url('/team-bg.webp')] -mx-4 px-4 py-[50px]"
		>
			<Figure
				altText="tokenomics section icon"
				imageStyles="mx-auto"
				image="/team-icon.svg"
				width={60}
				height={60}
			/>
			<Heading
				as="h2"
				children="TEAM"
				className="text-white text-[30px] sm:text-[40px] mt-4 lg:text-6xl lg:leading-normal lg:mt-3.5"
			/>
			<Text
				children="Lorem Ipsum on lihtsalt proovitekst, mida kasutatakse printimis- ja ladumistööstuses. See on olnud tööstuse põhiline proovitekst juba alates 1500. aastatest, mil tundmatu printija võttis hulga suvalist teksti."
				className="text-white max-w-[1065px] mt-6 mb-12 mx-auto md:mb-20 md:mt-[30px] md:text-center md:text-xl"
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
									className="font-black mt-6 mb-[18px] text-[25px]"
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
