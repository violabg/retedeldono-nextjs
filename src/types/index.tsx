export interface HomePageProps {
  menu?: NavMenu;
  hero?: HeroProps;
  projects?: ProjectProps[];
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

export type ProjectProps = {
  id: number;
  title?: string;
  image?: ImageProps;
  max?: number;
  cur?: number;
  url?: string;
};
