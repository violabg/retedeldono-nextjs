import { HomePageProps } from "@/types";

export const data: HomePageProps = {
  menu: {
    id: 1,
    items: [
      {
        id: 1,
        label: "Come funziona",
        url: "#come_funziona"
      },
      {
        id: 2,
        label: "Accedi/Registrati",
        url: "#accedi"
      }
    ]
  },
  hero: {
    id: 1,
    title: "Lilt Milano Monza Brianza",
    image: {
      id: 1,
      alt: "Lilt Milano Monza Brianza",
      url: "/img/hero/EmergenzaUcraina_header_1920x1080_02-22.jpeg"
    }
  },
  projects: [
    {
      id: 1,
      title: "#runforLILT - Milano Maraton 2022",
      image: {
        id: 1,
        alt: "runforLILT",
        url: "/img/projects/card-image.png"
      },
      max: 7500,
      cur: 5214
    },
    {
      id: 2,
      title: "Lotta contro i tumori",
      image: {
        id: 1,
        alt: "Lotta contro i tumori",
        url: "/img/projects/card-image.png"
      },
      max: 35000,
      cur: 27881
    },
    {
      id: 3,
      title: "Corriamo contro l'adamantinoma",
      image: {
        id: 1,
        alt: "Corriamo contro l'adamantinoma",
        url: "/img/projects/card-image-2.png"
      },
      max: 35000,
      cur: 27881
    }
  ]
};
