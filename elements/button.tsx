import Element from "./element";
import type { ElementProps } from "@/models";

const Button = ({
	as: tag = "button",
	className = "",
	children,
}: ElementProps & { as?: String }) => {
	return (
		<Element
			tag={tag}
			children={children}
			className={`font-medium py-4 px-12 rounded-[100px] text-xl text-white ${className}`}
		/>
	);
};

export default Button;
// Basic app button structure.
