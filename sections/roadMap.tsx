import { Figure, Heading, Text } from "@/elements";

const RoadMap = () => {
	return (
		<section
			id="roadmap"
			className="bg-[#F5F5F5] -mx-4 pb-72 pt-6 px-4 sm:pt-12"
		>
			<Figure
				altText="tokenomics section icon"
				imageStyles="animate-bounce mx-auto w-auto h-auto"
				image="/roadmap-icon.svg"
				width={60}
				height={60}
			/>
			<Heading
				as="h2"
				children="Road map"
				className="text-[30px] sm:text-[40px] mt-4 lg:text-6xl lg:leading-normal lg:mt-3.5"
			/>
			<Text
				children="COMING SOON"
				className="blur-[2px] font-black text-[30px] sm:text-[40px] md:text-[50px] mt-72 uppercase text-center"
			/>
		</section>
	);
};

export default RoadMap;
// RoadMap section
