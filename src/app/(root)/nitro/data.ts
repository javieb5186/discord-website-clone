// This only contain arrays of data

import * as svgs from "./svgs";
import UploadIcon from "icons/UploadIcon";

// For FAQs component
export const tabs = [
  {
    id: 1,
    tabText: "General",
    accordions: [
      {
        title: "What's Nitro?",
        body: "Nitro is a subscription service that unlocks features and perks across Discord, giving you more ways to have fun and express yourself.",
      },
      {
        title: "How does Nitro work?",
        body: "When you subscribe to Nitro, you get access to features that were previously locked for you - like using custom emoji anywhere, uploading bigger files, setting a custom video background, and more. When the subscription ends, you’ll lose access to the perks.",
      },
      {
        title: "What’s the difference between Nitro and Nitro Basic?",
        body: "Nitro is our most popular plan that unlocks access to all available Nitro perks, and Nitro Basic includes a selection of the most-loved Nitro perks that help you better express yourself. See the comparison chart above for a full breakdown!",
      },
      {
        title: "How much does Nitro cost?",
        body: "Cost varies depending on your country and plan. You can check Nitro prices under User Settings > Nitro in either the desktop or mobile apps.",
      },
      {
        title: "Where can I buy Nitro?",
        body: "You can purchase Nitro by visiting the Nitro tab in User Settings, or in the Nitro page under Home on desktop. On mobile, visit User Settings by tapping your user icon in the bottom bar, then select Get Nitro.",
      },
    ],
  },
  {
    id: 2,
    tabText: "Payments",
    accordions: [
      {
        title: "Which Payments do you accept?",
        body: "We accept a variety of payment methods, which you can learn more info on here.",
        links: [
          {
            link: "here",
            href: "",
          },
        ],
      },
      {
        title: "Do you offer Nitro and Nitro Basic in localized pricing?",
        body: "We are constantly working to expand the availability of localized pricing for Nitro and Nitro Basic. Check this article for information on where localized pricing is currently available. ",
        links: [
          {
            link: "this article",
            href: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    tabText: "Gifting and Promotions",
    accordions: [
      {
        title: "Are Nitro gifts real?",
        body: "Yes! You can purchase a Nitro gift through the Nitro page on desktop or the Nitro Gifting tab within mobile under User Settings. Additionally, you can send a quick gift in a channel by selecting the gift icon on desktop or mobile. If someone sends you a gift, you can see what it looks like here. You can also buy Discord Nitro directly on Amazon.com (United States only).",
      },
      {
        title: "How can I buy a Discord Nitro gift card on Amazon.com?",
        body: "Nitro gift cards on Amazon are a great way to gift Nitro to a friend, or have someone gift Nitro to you. Just click this link for a variety of Discord gift options, from 1 to 12-month Nitro subscriptions. Learn more about Discord gift cards on Amazon in this Help Center article.",
        links: [
          {
            link: "this link",
            href: "",
          },
          {
            link: "Help Center article",
            href: "",
          },
        ],
      },
      {
        title: "Where to redeem Nitro codes?",
        body: "You can redeem your Nitro code on the desktop and web apps through the Gift Inventory page in User Settings. ",
      },
      {
        title: "Can I get a free Nitro from a bot or a giveaway?",
        body: "The only official way to receive Nitro is through a gift sent to you in chat, or by receiving a code that can be redeemed under Gift Inventory in User Settings on the desktop and web apps. We strongly encourage not clicking on any links from people you don’t know well. For more tips on staying safe on Discord, visit our Safety page.",
        links: [
          {
            link: "gift",
            href: "",
          },
          {
            link: "Safety",
            href: "",
          },
        ],
      },
      {
        title: "Does Discord offer Nitro promotions?",
        body: "We are always working on ways to give you more with Nitro! Keep an eye out in the app, on our Twitter , Instagram, or blog to see when new promotions go live. :)",
        links: [
          {
            link: "Twitter",
            href: "",
          },
          {
            link: "Instagram",
            href: "",
          },
          {
            link: "blog",
            href: "",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    tabText: "Other",
    accordions: [
      {
        title: "My Nitro subscriptions comes with Boosts. What are those?",
        body: "Server Boosts are a way to show support for your favorite communities. Each Boost that you give to a server helps collectively unlock perks for everyone in the server to enjoy. Learn more about Server Boosting here! ",
        links: [
          {
            link: "here",
            href: "",
          },
        ],
      },
      {
        title: "Are Boosts permanent?",
        body: "A Nitro subscription only comes with 2 Boosts that you can share to any server you belong to. The Boosts do not stack over time, and they are not permanent. You’ll get to keep the Boosts for as long as your Nitro subscription is active.",
      },
      {
        title: "Why is my Nitro not working?",
        body: "If you’re having any trouble with your subscription, or have any questions, you can reach out to our team and we’ll be happy to help!",
        links: [
          {
            link: "reach out",
            href: "",
          },
        ],
      },
    ],
  },
];

// For Perks component
export const perks = [
  {
    id: 1,
    title: "From clips to pics, share away with bigger file uploads",
    Svg: svgs.UploadPic,
  },
  {
    id: 2,
    title: "Stream apps and games in sweet, sweet HD",
    Svg: svgs.Stream,
  },
  {
    id: 3,
    title: "Hype and meme with custom emoji anywhere",
    Svg: svgs.Emojis,
  },
  {
    id: 4,
    title: "Unlock perks for your communities with 2 Server Boosts",
    Svg: svgs.ServerBoosts,
  },
  {
    id: 5,
    title: "Color Themes",
    body: "Add your vibe to Discord with unique theme colors.",
    Svg: svgs.ColorThemes,
  },
  {
    id: 6,
    title: "Special Shop Perks",
    body: "Enjoy member pricing plus Nitro exclusive items in the Shop.",
    Svg: svgs.Shop,
  },
  {
    id: 7,
    title: "Custom Profiles",
    body: "Use a different avatar, profile theme, banner, and bio in each of your servers.",
    Svg: svgs.Profiles,
  },
  {
    id: 8,
    title: "Custom Sounds Everywhere",
    body: "Use custom sounds and personalized entrance sounds across voice channels.",
    Svg: svgs.Sounds,
  },
  {
    id: 9,
    title: "Unlimited Super Reactions",
    body: "Hype up the chat with action-packed, animated reactions.",
    Svg: svgs.SuperReactions,
  },
  {
    id: 10,
    title: "More Backgrounds",
    body: "Customize video calls with your own video backgrounds.",
    Svg: svgs.Backgrounds,
  },
];

// For Plan component
export const features = [
  {
    id: 1,
    description: "Unlimited Super Reactions",
    compare1: true,
    compare2: true,
  },
  {
    id: 2,
    description: "Custom emoji anywhere and make them animated",
    compare1: true,
    compare2: true,
  },
  {
    id: 3,
    description: "Custom stickers anywhere",
    compare1: true,
    compare2: true,
  },
  {
    id: 4,
    description: "Custom App icons",
    compare1: true,
    compare2: true,
  },
  {
    id: 5,
    description: "Bigger File Sharing",
    compare1: "50MB",
    compare2: "500MB",
  },
  {
    id: 6,
    description: "HD streaming",
    compare1: false,
    compare2: "Up to 4K and 60fps",
  },
  {
    id: 7,
    description: "2 Free Boosts + 30% off extra Boosts",
    compare1: false,
    compare2: true,
  },
  {
    id: 8,
    description: "Animated avatar, banner, and profile theme",
    compare1: false,
    compare2: true,
  },
  {
    id: 9,
    description: "Early access to Clips",
    compare1: false,
    compare2: true,
  },
  {
    id: 10,
    description: "Custom Server Profiles",
    compare1: false,
    compare2: true,
  },
  {
    id: 11,
    description: "Nitro Badge on your profile",
    compare1: true,
    compare2: true,
  },
  {
    id: 12,
    description: "Custom Video Backgrounds",
    compare1: true,
    compare2: true,
  },
  {
    id: 13,
    description: "Join up to 200 servers",
    compare1: false,
    compare2: true,
  },
  {
    id: 14,
    description: "Longer messages up to 4,000 characters",
    compare1: false,
    compare2: true,
  },
  {
    id: 15,
    description: "Colors for you Discord Theme",
    compare1: false,
    compare2: true,
  },
  {
    id: 16,
    description: "Custom sounds anywhere",
    compare1: false,
    compare2: true,
  },
  {
    id: 17,
    description: "Personalized entrance sounds",
    compare1: false,
    compare2: true,
  },
  {
    id: 18,
    description: "Shop member pricing and exclusive items",
    compare1: false,
    compare2: true,
  },
];

// For SubCards component
export const cards = [
  {
    title: "Nitro Basic",
    backgroundColor: "#4157d5",
    features: [
      {
        id: 1,
        text: "50Mb Uploads",
        Icon: UploadIcon,
      },
      {
        id: 2,
        text: "Custom Emoji anywhere",
        Icon: UploadIcon,
      },
      {
        id: 3,
        text: "Unlimited super reactions",
        Icon: UploadIcon,
      },
      {
        id: 4,
        text: "Special Nitro Badge on your profile",
        Icon: UploadIcon,
      },
    ],
  },
  {
    title: "Nitro",
    backgroundImage: "linear-gradient(to top left, #ac5d8b, #8647c6)",
    features: [
      {
        id: 1,
        text: "500Mb Uploads",
        Icon: UploadIcon,
      },
      {
        id: 2,
        text: "Custom Emoji anywhere",
        Icon: UploadIcon,
      },
      {
        id: 3,
        text: "Unlimited super reactions",
        Icon: UploadIcon,
      },
      {
        id: 4,
        text: "HD video streaming",
        Icon: UploadIcon,
      },
      {
        id: 5,
        text: "HD video streaming",
        Icon: UploadIcon,
      },
      {
        id: 6,
        text: "HD video streaming",
        Icon: UploadIcon,
      },
    ],
  },
];
