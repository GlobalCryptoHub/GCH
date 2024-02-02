import Image from "next/image";

import type { ImageProps } from "@/models";

const Picture = ({ altText, className, pngImage, webpImage }: ImageProps) => {
	return (
		<picture>
			<source srcSet={webpImage} />
			<source srcSet={pngImage} />
			<Image src={pngImage} className={className} alt={altText} />
		</picture>
	);
};

export default Picture;
// Basic app picture/image structure.
