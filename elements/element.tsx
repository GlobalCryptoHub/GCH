import { createElement } from "react";

import type { ElementProps } from "@/models";

const Element = ({
	tag,
	className,
	children,
	...otherProps
}: ElementProps & {
	tag: any;
}) => {
	return createElement(
		tag,
		{ className, ...otherProps },
		children,
	);
};

export default Element;
// Creating a generic element/component that takes any valid html tag to form a html element.
