import Element from "./element";
import { ReactNode } from "@/models";

const Heading = ({
	as: tag = "h2",
	className = "",
	children,
}: {
	as: String;
	children: ReactNode;
	className?: String;
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
