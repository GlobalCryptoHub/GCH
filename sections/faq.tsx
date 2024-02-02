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
			title: "What is GlobalCryptoHub?",
			description:
				"All content is moderated by our team to ensure the safety of our users.",
		},
		{
			title: "How does GlobalCryptoHub generate income?",
			description:
				"All content is moderated by our team to ensure the safety of our users.",
		},
		{
			title: "Who can use the GCH APP?",
			description:
				"All content is moderated by our team to ensure the safety of our users.",
		},
		{
			title: "How does GlobalCryptoHub prevent scams?",
			description:
				"All content is moderated by our team to ensure the safety of our users.",
		},
		{
			title: "How can I buy the Global Gateway NFT?",
			description:
				"All content is moderated by our team to ensure the safety of our users.",
		},
		{
			title: "What is the maximum earning bonus for users?",
			description:
				"All content is moderated by our team to ensure the safety of our users.",
		},
	];
	return (
		<section id="faq" className="py-5 sm:py-10">
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
				{items.map(({ title, description }, i) => (
					<AccordionItem
						value={`item-${i}`}
						key={i}
						className="border-[#D4D4D4] rounded-[10px] !text-left"
					>
						<AccordionTrigger>{title}</AccordionTrigger>
						<AccordionContent>{description}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default Faq;
// Faq section
