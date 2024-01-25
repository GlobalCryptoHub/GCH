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
			className={`${className} font-black text-black text-center uppercase`}
			children={children}
		/>
	);
};

export default Heading;
// Basic heading text structure.
