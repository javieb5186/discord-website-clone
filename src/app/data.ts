import englishImg from "assets/english-flag.png";
import spanishImg from "assets/spanish-flag.png";
import franceImg from "assets/france-flag.png";
import italyImg from "assets/italy-flag.png";
import netherlandsImg from "assets/netherlands-flag.png";
import portaguesImg from "assets/portagues-flag.png";
import romanianImg from "assets/romanian-flag.png";
import turkishImg from "assets/turkish-flag.png";
import chineseImg from "assets/chinese-flag.png";
import japaneseImg from "assets/japan-flag.png";

// Links for NavBar component
export const links = [
  {
    text: "Download",
    href: "",
  },
  {
    text: "Nitro",
    href: "",
  },
  {
    text: "Discover",
    href: "",
  },
  {
    text: "Safety",
    href: "",
  },

  {
    text: "Support",
    href: "",
  },
  {
    text: "Blog",
    href: "",
  },
  {
    text: "Careers",
    href: "",
  },
];

// Links for Drawer component in NavBar
export const safetyLinks = [
  {
    title: "Safety Center",
    links: [{ text: "Overview", href: "" }],
  },
  {
    title: "Controlling Your Experience",
    links: [
      {
        text: "Four Steps to a super safe account",
        href: "",
      },
      {
        text: "Four Steps to a super safe server",
        href: "",
      },
      {
        text: "Role of administrators and moderators on Discord",
        href: "",
      },
      {
        text: "Reporting problems on Discord",
        href: "",
      },
      {
        text: "Mental Health on Discord",
        href: "",
      },
      {
        text: "Age-Restricted Content on Discord",
        href: "",
      },
      {
        text: "Tips against spam and hacking",
        href: "",
      },
    ],
  },
  {
    title: "Parents & Educators",
    links: [
      { text: "Overview", href: "" },
      {
        text: "What is Discord?",
        href: "",
      },
      {
        text: "Discord's commitment to a ssafe and trusted experience",
        href: "",
      },
      {
        text: "Helping your teen stay safe on Discord",
        href: "",
      },
      {
        text: "Talking about online safety with your teen",
        href: "",
      },
      {
        text: "Answering parents' and educators' top questions",
        href: "",
      },
      {
        text: "If your teen encounters an issue",
        href: "",
      },
      {
        text: "Working with CARU to protect users on Discord",
        href: "",
      },
    ],
  },
  {
    title: "How We Enforce Rules",
    links: [
      {
        text: "Our Policies",
        href: "",
      },
      {
        text: "How we investigate",
        href: "",
      },
      {
        text: "What actions we take",
        href: "",
      },
      {
        text: "How you can appeal to our actions",
        href: "",
      },
    ],
  },
];

// Languages for footer component
export const languages = [
  {
    text: "English",
    locale: "enUS",
    imgSrc: englishImg,
  },
  {
    text: "Spanish",
    locale: "esES",
    imgSrc: spanishImg,
  },
  {
    text: "France",
    locale: "frFR",
    imgSrc: franceImg,
  },
  {
    text: "Italy",
    locale: "itIT",
    imgSrc: italyImg,
  },
  {
    text: "Netherlands",
    locale: "nlNL",
    imgSrc: netherlandsImg,
  },
  {
    text: "Portagues",
    locale: "ptPT",
    imgSrc: portaguesImg,
  },
  {
    text: "Romania",
    locale: "roRO",
    imgSrc: romanianImg,
  },
  {
    text: "Turkish",
    locale: "trTR",
    imgSrc: turkishImg,
  },
  {
    text: "Chinese",
    locale: "zhCN",
    imgSrc: chineseImg,
  },
  {
    text: "Japanese",
    locale: "jaJP",
    imgSrc: japaneseImg,
  },
];

// Navigation links for footer component
export const navigationLinks = [
  {
    category: "Product",
    links: [
      "Download",
      "Nitro",
      "Status",
      "App Directory",
      "New Mobile Experience",
    ],
  },
  {
    category: "Company",
    links: ["About", "Jobs", "Brand", "Newsroom"],
  },
  {
    category: "Empty",
    links: [""],
  },
  {
    category: "Resources",
    links: [
      "College",
      "Support",
      "Safety",
      "Blog",
      "Feedback",
      "Streamkit",
      "Creators",
      "Community",
      "Developers",
      "Gaming",
      "Quests",
      "Offical 3rd Party Merch",
    ],
  },
  {
    category: "Policies",
    links: [
      "Terms",
      "Privacy",
      "Cookie Settings",
      "Guidelines",
      "Acknowledgements",
      "Licenses",
      "Company Information",
    ],
  },
];
