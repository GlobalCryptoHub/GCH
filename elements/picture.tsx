import type { ImageProps } from "@/models";

const Picture = ({ altText, className, pngImage, webpImage }: ImageProps) => {
	return (
		<picture>
			<source srcSet={webpImage} />
			<source srcSet={pngImage} />
			<img alt={altText} className={className} src={pngImage} />
		</picture>
	);
};

export default Picture;
// Basic app picture/image structure.
