import Image from "next/image";

import type { ImageProps } from "@/models";

const Picture = ({
	altText,
	className,
	pngImage,
	webpImage,
	width,
	height,
	priority,
}: ImageProps) => {
	return (
		<picture>
			<source srcSet={webpImage} />
			<source srcSet={pngImage} />
			{width && height ? (
				<Image
					src={pngImage}
					className={className}
					alt={altText}
					width={width}
					height={height}
					priority={priority}
				/>
			) : (
				<img alt={altText} className={className} src={pngImage} />
			)}
		</picture>
	);
};

export default Picture;
// Basic app picture/image structure.
