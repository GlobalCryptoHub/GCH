import { Figure, Heading, Text } from "@/elements";

const Tokenomics = () => {
	const items = [
		{ title: "TOTAL SUPPLY", description: "100 million" },
		{ title: "NO ALLOCATION", description: "Fully minable" },
		{ title: "ISSUING STARTS AT", description: "200k/month" },
	];

	return (
		<section id="tokenomics" className="py-10 sm:py-20">
			<Figure
				altText="tokenomics section icon"
				imageStyles="mx-auto w-auto h-auto"
				image="/tokenomics-icon.svg"
				width={60}
				height={60}
			/>
			<Heading
				as="h2"
				children="TOKENOMICS"
				className="text-[30px] sm:text-[40px] mt-4 lg:text-6xl lg:leading-normal lg:mt-3.5"
			/>
			<div className="text-center">
				<Text
					children="Information about Global Crypto Hub"
					className="font-black text-xl my-20"
				/>
				{items.map(({ title, description }, i) => (
					<div
						key={i}
						className="border border-[#DBDBDB] text-center font-black max-w-[400px] md:max-w-[500px] mx-auto my-10 px-4 py-9 rounded-[10px] text-lg md:text-xl uppercase"
					>
						<Text className="mx-auto">
							{title}{" "}
							<Text as="span" className="mx-2.5 sm:mx-5">
								|
							</Text>
							<Text as="span" className="normal-case !text-[#D8BC40]">
								{description}
							</Text>
						</Text>
					</div>
				))}
			</div>
		</section>
	);
};

export default Tokenomics;
// Tokenomics section
