import { Button, Heading, Picture, Text } from "@/elements";

const Hero = () => {
	return (
		<section>
			<header className="flex flex-col justify-center text-white md:flex-row md:gap-10 md:items-center md:justify-around">
				<Picture
					altText="hero"
					className="mx-auto"
					height={617.05}
					width={526.92}
					pngImage="/hero.png"
					webpImage="/hero.webp"
					priority={false}
				/>
				<div className="max-w-[280px] mx-auto text-center sm:max-w-md md:order-first md:max-w-xl md:mx-0 md:text-left">
					<Heading
						as="h2"
						children="GlobalCryptoHub"
						className="normal-case mb-5 mt-20 text-white text-[30px] sm:text-[40px] md:my-0 md:text-left lg:text-6xl lg:leading-normal"
					/>
					<Text
						children="The first proof of work quest mining dapp"
						className="text-white text-[25px] md:mb-[30px] md:mt-[15px] lg:text-[35px]"
					/>
					<Button
						children="Get Started"
						className="border-2 border-[#D8BC40] bg-transparent mb-28 mt-20 py-3.5 md:m-0 hover:bg-[#D9BD41] active:bg-[#D9BD41] focus:bg-[#D9BD41]"
					/>
				</div>
			</header>
			<div className="py-2 flex justify-center gap-2.5 sm:mt-[50px]">
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
