import { ReactNode } from "@/models";

interface CardProps {
	children: ReactNode;
	styles?: String;
	type?: String;
}

const Card = ({ children, styles, type }: CardProps) => {
	return (
		<div
			className={`bg-white border border-[#CCC] relative ${styles} ${type === "team" ? "rounded-[20px]" : "rounded-2xl"}`}
		>
			<div
				className={`absolute bg-[#D9BD41] inset-0 m-auto -z-10 ${
					type === "team"
						? "drop-shadow-team rounded-[20px]"
						: "drop-shadow-primary rounded-2xl"
				}`}
			></div>
			{children}
		</div>
	);
};

export default Card;
// Basic card component
