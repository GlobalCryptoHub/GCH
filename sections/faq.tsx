import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Figure, Heading } from "@/elements";

const Faq = () => {
	const items = [
		{
			question: "What is GlobalCryptoHub?",
			answer:
				"GlobalCryptoHub is an innovative questing platform that allows users to create or mine events.",
		},
		{
			question: "How does GlobalCryptoHub generate income?",
			answer:
				"Revenue is generated through quest mining pools. A fee is charged for every quest deployed.",
		},
		{
			question: "Who can use the GCH APP?",
			answer: "Anyone can deploy or mine quests. Limitless possibilities.",
		},
		{
			question: "How does GlobalCryptoHub prevent scams?",
			answer:
				"All content is moderated by our team to ensure the safety of our users.",
		},
		{
			question: "What is the role of the Global Gateway NFT?",
			answer:
				"The NFT serves as a way to reward our early members and as an investment opportunity. Holders will mine with up to 100% extra power, making the NFT an integral part of our platform.",
		},
		{
			question: "How can I buy the Global Gateway NFT?",
			answer: "Aqcuire a WL/OG spot. Join our Discord!",
		},
		{
			question: "Is the NFT required for mining?",
			answer:
				"NO, anyone can start mining for free. The NFT offers a higher mining rate and other perks!",
		},
		{
			question: "What is the maximum earning bonus for mining?",
			answer:
				"The maximum bonus a user can earn is 200%. Up to 100% from staking the Global Gateway NFT and up to 100% from quest achievements.",
		},
		{
			question: "Can i invest in GlobalCryptoHub by buying tokens?",
			answer:
				"No, the GCH token can only be mined. The only way to invest is buying the Global Gateway NFT, which offers an increased mining power for holders.",
		},
		{
			question: "Can you explain the reward system?",
			answer:
				"Our reward system is based on two tokens. Token XP is acquired by mining quests. The GCH token is then distributed to miners based on the XP gained throughout the day/week/month.",
		},
		{
			question: "Is there a buyback/burn system?",
			answer:
				"Yes, we are using a % of revenue to constantly buy GCH tokens from the open market. Only a % of the buyback tokens will be burned.",
		},
		{
			question: "What is the Global Vault?",
			answer:
				"The treasury used for holding the project's funds which are used for Listings, Liquidity, Development and Airdrops for NFT holders!",
		},
	];
	return (
		<section id="faq" className="pt-10 pb-[60px] sm:pb-20">
			<Figure
				altText="faq section icon"
				imageStyles="mx-auto"
				image="/faq-icon.svg"
				width={60}
				height={60}
			/>
			<Heading
				as="h2"
				children="Frequently asked questions"
				className="text-[30px] sm:text-[40px] mt-4 lg:text-6xl lg:leading-normal lg:mt-3.5"
			/>
			<Accordion
				type="single"
				collapsible
				className="space-y-3.5 lg:space-y-[36px] max-w-[400px] mt-9 mx-auto md:mt-[60px] md:max-w-[800px] xl:max-w-[1200px]"
			>
				{items.map(({ question, answer }, i) => (
					<AccordionItem
						value={`item-${i}`}
						key={i}
						className="border-[#D4D4D4] rounded-[10px] !text-left"
					>
						<AccordionTrigger>{question}</AccordionTrigger>
						<AccordionContent>{answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default Faq;
// Faq section
