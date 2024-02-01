import { ReactNode } from "@/models";

interface CardProps {
	children: ReactNode;
	shadowStyles?: String;
	styles?: String;
	type?: String;
}

const Card = ({ children, shadowStyles, styles, type }: CardProps) => {
	return (
		<div className={`bg-white border border-[#CCC] relative ${styles}`}>
			<div
				className={`absolute bg-[#D9BD41] inset-0 m-auto -z-10 ${shadowStyles} ${
					type === "team" ? "drop-shadow-team" : "drop-shadow-primary"
				}`}
			></div>
			{children}
		</div>
	);
};

export default Card;
// Basic card component
