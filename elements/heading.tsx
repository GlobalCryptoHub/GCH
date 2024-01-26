import Element from "./element";
import type { ElementProps } from "@/models";

const Heading = ({
	as: tag,
	className = "",
	children,
}: ElementProps & {
	as: String;
}) => {
	return (
		<Element
			tag={tag}
			className={`font-black text-black text-center uppercase ${className}`}
			children={children}
		/>
	);
};

export default Heading;
// Basic heading text structure.
