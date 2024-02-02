import Link from "next/link";
import Image from "next/image";

import { Heading, Text } from "@/elements";

const Footer = () => {
	const year = new Date().getFullYear();

	const items = [
		{ name: "X-Twitter", src: "/x-twitter.png", path: "" },
		{ name: "Discord", src: "/discord.png", path: "" },
	];

	return (
		<footer className="relative -mx-4">
			<div className="absolute bg-[#eee] h-[70%] top-10 w-full -z-10 lg:h-[50%]"></div>
			<div className="max-w-[600px] mx-auto px-4 lg:max-w-[800px] xl:max-w-[1024px]">
				<div className="bg-black rounded-[20px] px-4 py-[70px]">
					<div className="flex flex-col gap-y-[100px] justify-between lg:flex-row lg:ml-10 lg:mr-[60px]">
						<Heading
							as="h1"
							children="JOIN US NOW"
							className="text-[50px] !text-[#FFD000]"
						/>
						<div className="flex space-x-[30px] mb-40 justify-center">
							{items.map(({ name, path, src }, i) => (
								<Link href={path} key={i}>
									<Image alt={name} src={src} height={65} width={65} />
								</Link>
							))}
						</div>
					</div>
					<Text className="text-center text-white">
						Have questions?{" "}
						<Link href="/" className="text-[#D8BC40] underline">
							Join our discord
						</Link>
					</Text>
				</div>
				<div className="flex flex-col justify-between mt-[30px] mb-5 gap-2 text-center lg:flex-row md:my-12 lg:gap-5">
					<Text
						children={`© ${year} Global Crypto Hub, All Right Reserved`}
						className="lg:text-lg"
					/>
					<Text className="lg:text-lg">
						Designed & Built by the{" "}
						<Text as="span" className="!text-[#5765EB] underline">
							Global Crypto Hub Team
						</Text>
					</Text>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
// Footer section
