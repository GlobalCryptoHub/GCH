import Link from "next/link";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { MenuIcon } from "lucide-react";

import { Button } from "@/elements";

const Menu = () => {
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
		<div className="grid grid-cols-2 gap-2 mt-4 lg:hidden">
			<Sheet key="bottom" modal={false}>
				<SheetTrigger className="cursor-pointer" asChild>
					<MenuIcon color="white" />
				</SheetTrigger>
				<SheetContent
					aria-modal="true"
					className="bg-black border-t-[#D8BC40] pb-10 pt-16 space-y-[30px] lg:hidden"
					side="bottom"
				>
					{links.map(({ path, name }, i) => (
						<li key={i} className="list-none text-sm text-center w-full">
							<SheetClose asChild>
								<Link
									href={path}
									className="block font-medium group text-white focus:text-[#D8BC40] hover:text-[#D8BC40] focus:font-black hover:font-black"
								>
									<span className="decoration-[5px] group-focus:underline group-hover:underline underline-offset-[10px]">
										{name}
									</span>
								</Link>
							</SheetClose>
						</li>
					))}
					<Dialog>
						<SheetClose asChild>
							<DialogTrigger asChild>
								<Button
									children="Launch Dapp"
									className="block border-2 border-[#D8BC40] bg-transparent mx-auto px-9 py-2.5 hover:bg-[#D9BD41] active:bg-[#D9BD41] focus:bg-[#D9BD41]"
								/>
							</DialogTrigger>
						</SheetClose>
						<DialogContent className="bg-black border-[#D8BC40] rounded-2xl text-white w-[90vw] sm:max-w-[425px]">
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
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Menu;
// Mobile view menu using shadcn ui sheet component.
