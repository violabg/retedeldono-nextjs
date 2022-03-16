export interface HomePageProps {
	menu?: NavMenu;
	hero?: HeroProps;
}

export type ImageProps = {
	id: number;
	alt?: string;
	url: string;
};

export type NavMenu = {
	id: number;
	items?: NavMenuItems[];
};

export type NavMenuItems = {
	id: number;
	label: string;
	url: string;
};

export type HeroProps = {
	id: number;
	title?: string;
	image?: ImageProps;
};
