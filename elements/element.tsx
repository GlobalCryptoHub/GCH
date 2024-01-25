import { createElement } from "react";
import { ReactNode } from "@/models";

const Element = ({
	tag,
	className,
	children,
	...otherProps
}: {
	tag: any;
	children: ReactNode;
	className?: String;
}) => {
	return createElement(tag, { className, ...otherProps }, children);
};

export default Element;
// Creating a generic element/component that takes any valid html tag to form a html element.
