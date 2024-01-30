import Link from "next/link";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

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
		<div className="grid grid-cols-2 gap-2">
			<Sheet key="bottom">
				<SheetTrigger className="lg:hidden" asChild>
					<MenuIcon />
				</SheetTrigger>
				<SheetContent
					aria-modal="true"
					className="bg-black border-t-[#D8BC40] pb-10 pt-16 space-y-[30px] lg:hidden"
					side="bottom"
				>
					{links.map(({ path, name }, i) => (
						<li key={i} className="list-none text-xl text-center w-full">
							<SheetClose asChild>
								<Link
									href={path}
									className="block font-semibold group text-white focus:text-[#D8BC40] hover:text-[#D8BC40]"
								>
									<span className="decoration-[5px] group-focus:underline group-hover:underline underline-offset-8">
										{name}
									</span>
								</Link>
							</SheetClose>
						</li>
					))}
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Menu;
// Mobile view menu using shadcn ui sheet component.
