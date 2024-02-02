import Image from "next/image";

import type { ImageProps } from "@/models";

const Figure = ({
	altText,
	containerStyles,
	image,
	imageStyles,
	width,
	height,
}: ImageProps) => {
	return (
		<figure className={containerStyles}>
			{width && height ? (
				<Image
					src={image}
					className={imageStyles}
					alt={altText}
					width={width}
					height={height}
				/>
			) : (
				<img src={image} className={imageStyles} alt={altText} />
			)}
		</figure>
	);
};

export default Figure;
// Basic app figure/icon structure.
