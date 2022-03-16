import { HomePageProps } from "@/types";

export const data: HomePageProps = {
	menu: {
		id: 1,
		items: [
			{
				id: 1,
				label: "Come funziona",
				url: "#come_funziona",
			},
			{
				id: 2,
				label: "Accedi/Registrati",
				url: "#accedi",
			},
		],
	},
	hero: {
		id: 1,
		title: "Lilt Milano Monza Brianza",
		image: {
			id: 1,
			alt: "Lilt Milano Monza Brianza",
			url: "",
		},
	},
};
