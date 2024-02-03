type ImageProps = {
	altText: string;
	[key: string]: any;
} & {
	width?: number | `${number}` | undefined;
	height?: number | `${number}` | undefined;
	priority?: boolean;
};

export default ImageProps;
// Figure/Picture component props object type.
