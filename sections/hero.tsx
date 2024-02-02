import { Button, Heading, Picture, Text } from "@/elements";

const Hero = () => {
	return (
		<section>
			<header className="flex flex-col justify-center text-white md:flex-row md:gap-10 md:items-center md:justify-evenly">
				<Picture
					altText="hero"
					className="mx-auto"
					height={617.05}
					width={526.92}
					pngImage="/hero.png"
					webpImage="/hero.webp"
				/>
				<div className="max-w-[280px] mx-auto sm:max-w-md md:order-first md:max-w-xl md:mx-0">
					<Heading
						as="h2"
						children="Discover Engage Earn"
						className="mb-5 mt-20 !text-left text-[30px] sm:text-[40px] md:my-0 lg:text-6xl lg:leading-normal"
					/>
					<Text
						children="The first proof of work quest mining dapp"
						className="text-[25px] md:mb-[30px] md:mt-[15px] lg:text-[35px]"
					/>
					<Button
						children="Get Started"
						className="block border-2 border-[#D8BC40] bg-transparent mb-28 mt-20 mx-auto py-3.5 md:m-0 hover:bg-[#D9BD41] active:bg-[#D9BD41] focus:bg-[#D9BD41]"
					/>
				</div>
			</header>
			<div className="py-2 flex justify-center gap-2.5 mt-[60px] sm:mt-[50px]">
				{Array.from({ length: 3 }).map((_, i) => (
					<span
						className={`inline-block h-5 w-5 rounded-full ${
							i ? "bg-white" : "bg-[#D9BD41]"
						}`}
						key={i}
					></span>
				))}
			</div>
		</section>
	);
};

export default Hero;
// Hero section
