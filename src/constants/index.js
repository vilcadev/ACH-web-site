import {cLogo,jsLogo,reactLogo, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";


//Links de Navegacion y Titulos
export const navLinks = [
  {
    id: "features",
    title: "Quiénes Somos",
  },
  {
    id: "product",
    title: "Proyectos",
  },
  {
    id: "clients",
    title: "Nosotros",
  },
  {
    id: "contact",
    title: "Contáctanos",
  },
];

//Caracteristicas del software
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Eficacia",
    content:
      "Planteamos las mejores estrategias para otorgar un software limpio y eficiente",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Seguro",
    content:
      "Nos preocupamos por producir software totalmente confiable y absuelto de vulnerabilidades o huecos de seguridad",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Contacto con el Cliente",
    content:
      "Mantenemos un contacto permanente con el cliente para saber que requerimientos adicionales u opinión tiene sobre el avance de su software",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "En nuestra startup de tecnologia, nuestro enfoque principal es crear soluciones innovadoras que simplifiquen la vida de nuestros usuarios. ",
    name: "Cesar Vilca @Vilcadev",
    title: "Founder & CEO",
    img: cLogo,
  },
  {
    id: "feedback-2",
    content:
      "En nuestra startup de tecnologia, nuestro enfoque principal es crear soluciones innovadoras que simplifiquen la vida de nuestros usuarios. ",
    name: "Henry Callupe @Chicharron96",
    title: "Founder & CEO",
    img: reactLogo,
  },
  {
    id: "feedback-3",
    content:
      "En nuestra startup de tecnologia, nuestro enfoque principal es crear soluciones innovadoras que simplifiquen la vida de nuestros usuarios. ",
    name: "Andrès Alegre @Clouds",
    title: "Founder & CEO",
    img: jsLogo,
  },
];

//Logos tecnologias y titulos
export const stats = [
  {
    id: "stats-1",
    title: "C#", 
    value: cLogo,//aqui va logo C#
  },
  {
    id: "stats-2",
    title: "React", 
    value: reactLogo,//aqui va logo React 
  },
  {
    id: "stats-3",
    title: "JavaScript",
    value: jsLogo,//aqui va logo Javascript
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];