import Link from "next/link";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

import { Button, Text } from "@/elements";

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
			<Sheet key="bottom">
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
					<SheetClose asChild>
						<Button
							children="Launch Dapp"
							className="block border-2 border-[#D8BC40] bg-transparent mx-auto px-9 py-2.5 hover:bg-[#D9BD41] active:bg-[#D9BD41] focus:bg-[#D9BD41]"
						/>
					</SheetClose>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Menu;
// Mobile view menu using shadcn ui sheet component.
