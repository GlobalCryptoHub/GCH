"use client";

import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const useCarousel = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
	}, [api]);

	return { current, setApi };
};

export default useCarousel;
// Carousel custom hook.
