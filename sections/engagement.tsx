"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { Figure, Heading, Text } from "@/elements";
import { Card } from "@/appComponents";
import { useCarousel } from "@/hooks";

const Engagement = () => {
	const { current, setApi } = useCarousel();
	const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

	const mobileItems = [
		{
			title:
				"Unlimited proof of work quest customization Choose from hundreds of templates",
			src: "/work.png",
		},
		{
			title:
				"No profile maintenance or quest verification required, Log in, create, and deploy",
			src: "/maintenance.png",
		},
		{
			title: "Save time and Money Manual quest verification by our team",
			src: "/save.png",
		},
		{
			title: "Genuine engagement Completely avoid bots and multi-accounts",
			src: "/engagement.png",
		},
		{
			title:
				"Not limited to crypto use Open to anyone Moderated content to avoid scams",
			src: "/moderated.png",
		},
		{
			title:
				"Innovative quest mining pools, Incentivizing users to complete tasks by rewarding every action",
			src: "/rewarding.png",
		},
		{
			title:
				"Unleash unlimited potential Boost your brand/ project Engage your tweets Go viral on social media",
			src: "/potential.png",
		},
	];

	const desktopItems = [
		{
			title: "Genuine engagement Completely avoid bots and multi-accounts",
			src: "/engagement.png",
		},
		{
			title:
				"Not limited to crypto use Open to anyone Moderated content to avoid scams",
			src: "/moderated.png",
		},
		{
			title:
				"Innovative quest mining pools, Incentivizing users to complete tasks by rewarding every action",
			src: "/rewarding.png",
		},
		{
			title:
				"Unleash unlimited potential Boost your brand/ project Engage your tweets Go viral on social media",
			src: "/potential.png",
		},
		{
			title:
				"Unlimited proof of work quest customization Choose from hundreds of templates",
			src: "/work.png",
		},
		{
			title:
				"Log in, create, and deploy Achieve Immediate exposure",
			src: "/maintenance.png",
		},
		{
			title: "Save time and Money Manual quest verification by our team",
			src: "/save.png",
		}
	];

	return (
		<section id="engagement" className="pt-10 pb-20 sm:py-10">
			<Figure
				altText="tokenomics section icon"
				imageStyles="animate-bounce mx-auto w-auto h-auto"
				image="/engagement-icon.svg"
				width={60}
				height={60}
			/>
			<Heading
				as="h2"
				children="THE ULTIMATE ENGAGEMENT APP"
				className="text-[30px] sm:text-[40px] mb-12 mt-4 sm:mb-20 lg:mb-[100px] lg:text-6xl lg:leading-normal lg:mt-3.5"
			/>
			<div className="md:hidden">
				<Carousel
					plugins={[plugin.current]}
					setApi={setApi}
					className="w-full max-w-xs mx-auto"
					onMouseLeave={plugin.current.reset}
				>
					<CarouselContent className="gap-5">
						{mobileItems.map(({ title, src }, i) => (
							<CarouselItem key={i} className="h-max w-max">
								<Card styles="flex m-5 mx-auto rounded-[10px] h-[222px] w-[258px]">
									<Figure
										altText={title}
										image={src}
										containerStyles="m-auto"
									/>
								</Card>
								<Text children={title} className="max-w-[220px] mx-auto mt-6" />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-2 top-[125%] min-[418px]:-left-12 min-[418px]:top-1/2 min-[418px]:-translate-y-1/2" />
					<CarouselNext className="-right-2 top-[125%] min-[418px]:-right-12 min-[418px]:top-1/2 min-[418px]:-translate-y-1/2" />
				</Carousel>
				<div className="py-2 flex justify-center gap-2.5 mt-[30px]">
					{mobileItems.map((_, i) => (
						<span
							className={`inline-block h-5 w-5 rounded-full ${
								i + 1 === current ? "bg-[#D9BD41]" : "bg-[#ccc]"
							}`}
							key={i}
						></span>
					))}
				</div>
			</div>
			<div className="hidden md:flex flex-wrap min-[1200px]:hidden justify-center gap-x-10 gap-y-[60px] max-w-[1440px] mx-auto">
				{mobileItems.map(({ title, src }, i) => (
					<div key={i}>
						<Card styles="flex m-5 mx-auto rounded-[10px] h-[222px] w-[258px]">
							<Figure altText={title} image={src} containerStyles="m-auto" />
						</Card>
						<Text children={title} className="max-w-[220px] mx-auto mt-6" />
					</div>
				))}
			</div><div className="hidden min-[1200px]:flex min-[1200px]:flex-wrap-reverse justify-center gap-x-10 gap-y-[60px] max-w-[1440px] mx-auto">
				{desktopItems.map(({ title, src }, i) => (
					<div key={i}>
						<Card styles="flex m-5 mx-auto rounded-[10px] h-[222px] w-[258px]">
							<Figure altText={title} image={src} containerStyles="m-auto" />
						</Card>
						<Text children={title} className="max-w-[220px] mx-auto mt-6" />
					</div>
				))}
			</div>
		</section>
	);
};

export default Engagement;
// Engagement section
