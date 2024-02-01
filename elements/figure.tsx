import type { ImageProps } from "@/models";

const Figure = ({
	altText,
	containerStyles,
	image,
	imageStyles,
}: ImageProps) => {
	return (
		<figure className={containerStyles}>
			<img src={image} className={imageStyles} alt={altText} />
		</figure>
	);
};

export default Figure;
// Basic app figure/icon structure.
