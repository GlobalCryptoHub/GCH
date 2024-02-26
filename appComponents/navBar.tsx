import Link from "next/link";
import Image from "next/image";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
	DialogTitle,
} from "@/components/ui/dialog";

import Menu from "./menu";
import { Button } from "@/elements";

const NavBar = () => {
	const links = [
		{ path: "/", name: "HOME" },
		{ path: "#engagement", name: "ENGAGEMENT" },
		{ path: "#user-gratification", name: "USER GRATIFICATION" },
		{ path: "#mining-pools", name: "MINING POOLS" },
		{ path: "#nft", name: "NFT" },
		{ path: "#tokenomics", name: "TOKENOMICS" },
		{ path: "#roadmap", name: "ROADMAP" },
		{ path: "#team", name: "TEAM" },
		{ path: "#faq", name: "FAQ" },
	];

	return (
		<nav className="lg:flex justify-around gap-10 lg:gap-5 lg:pt-10 xl:px-5 xl:gap-10">
			<Menu />
			<Link
				href="/"
				className="animate-spin-slow block max-w-20 -mt-10 mx-auto lg:mt-0 lg:max-w-none lg:mx-0"
			>
				<Image alt="Logo" src="/logo.png" width={172} height={172} />
			</Link>
			<div className="lg:-mt-[15px]">
				<Dialog>
					<DialogTrigger asChild>
						<Button
							children="Launch Dapp"
							className="hidden lg:block border-2 border-[#D8BC40] bg-transparent mb-10 ml-auto px-9 py-2.5 hover:bg-[#D9BD41] active:bg-[#D9BD41] focus:bg-[#D9BD41]"
						/>
					</DialogTrigger>
					<DialogContent className="bg-black border-[#D8BC40] rounded-2xl text-white sm:max-w-[425px]">
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
				<ul className="hidden grow gap-5 lg:flex xl:gap-10">
					{links.map(({ name, path }, i) => (
						<li key={i}>
							<Link
								href={path}
								className={`block font-medium group lg:text-sm focus:text-[#D8BC40] hover:text-[#D8BC40] ${
									!i ? "text-[#D8BC40]" : "text-white"
								}`}
							>
								<span
									className={`decoration-[5px] group-focus:underline group-hover:underline underline-offset-[10px] text-nowrap ${
										!i ? "underline" : ""
									}`}
								>
									{name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
// Navbar component
