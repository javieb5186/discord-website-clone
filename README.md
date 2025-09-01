# Discord Website Clone

A responsive, animated clone of the Discord **marketing website** (not the app), built with [Next.js](https://nextjs.org/) and [MUI](https://mui.com/).  
This project showcases complex CSS implementation, depth layering with smart z-indexing, smooth scroll-based animations, video integration, and mobile responsiveness.

Checkout live website: [Discord Clone Vercel App](https://discord-website-clone-gray.vercel.app/)

## Disclaimer

> This project is for educational purposes only.  
> Please support the original Discord website at [discord.com](https://discord.com/).

## Purpose

The main purpose of this project was to explore complex, beautiful CSS patterns I hadn’t worked with before.  
Other goals were to improve my skills with TypeScript and experiment with new libraries in a realistic frontend setting.

## Highlights

- **Next.js for Performance & Routing**: Uses Next.js for fast rendering, route-based code splitting, and SEO-friendly architecture.
- **Complex Custom CSS**: Manually crafted layered layouts, fine-tuned responsiveness, and precise animations using plain CSS with MUI.
- **Basic Login System**: Simulates authentication flow with reusable UI components.
- **Animations & Transitions**: Scroll-triggered animations and fluid UI transitions.
- **Custom Carousel**: Fully custom-built React carousel (not from a library), with smooth transitions and responsiveness.
- **Device Detection**: Leverages `react-device-detect` to tailor user experiences based on device type (e.g., rendering different layouts or interactions for mobile vs. desktop).
- **Smart Z-Indexing**: Layered components for visual hierarchy and depth.
- **Fully Responsive**: Optimized for desktop and mobile with flexible layouts.
- **Multimedia Integration**: Videos and images to match the feel of the original Discord site.

## Quick Gifs

Desktop view of the main page:

![discord-desktop-preview](https://github.com/user-attachments/assets/a1e15e37-8e6b-4708-8fd2-c150aa20e77f)

Tablet view for one of the routes:

![discord-tablet-preview](https://github.com/user-attachments/assets/7acb1929-1a2b-41b0-a26f-2477f0a47669)

Mobile view for one of the routes:

![discord-mobile-preview](https://github.com/user-attachments/assets/dcb57356-53ca-4034-ae70-d3e2bf596403)

## Getting Started

To install this application you need
[Node JS 18.7 or above](https://nodejs.org/en/download/)

1. Clone the repository:

```bash
 git clone https://github.com/javieb5186/discord-website-clone.git
```

2. Download and run in terminal:

```bash
npm i
```

3. After successful installation, run the development server:

```bash
npm run dev
```

4. Or you can build and run it with

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

Follows the Next.js project structure with enhancements based on React best practices:

- Component-based folder organization

- Custom hooks and reusable UI modules

- Absolute imports for cleaner code

- Business logic separated from presentation

## Git Branch Naming Convention

Following this guide:

- Use lowercase and hyphens

- Prefixes: feature/, bugfix/, hotfix/, release/, docs/

- Examples:

  - feature/hero-animation

  - bugfix/zindex-layering

  - release/v1.0.0

## License

This project is licensed under the [MIT License](LICENSE).
