import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Comment Crafter - AI Chrome Extension",
    description:
      "This LinkedIn comment generation tool, powered by Google Gemini AI, helps users craft thoughtful, engaging responses effortlessly. By allowing users to input post content and generating contextually relevant comments, it saves time and enhances online networking, enabling meaningful conversations with minimal effort.",
    tools: [
      "Express",
      "Google Gemini AI",
      "vercel",
      "Node",
      "API",
      "Chrome Extension",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "GhostShare - Share anything with 0 hassle",
    description:
      "GhostShare is a simple solution for sharing information between different devices without the hassle of signing into email or messaging apps to share anything. It allows you to create secret rooms with passwords where you can store your information and access them later from any computer using the room number and password. GhostShare ensures ease of use, safety, and privacy for your information.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "Google Maps",
      "NestJS",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sun-Editor",
      "Gmail Passkey",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "https://ghost-share.vercel.app/",
    image: travel,
  },
  {
    id: 3,
    name: "Talk2Note - Make Notes 10X Faster",
    description:
      "Talk2Note is a web application that allows users to convert their voice notes into text notes. Users can record their voice notes, and the application will convert them into text notes using the API. Users can also edit the text notes and save them to their faviour note taking app like Notion. The application also allows users to download the text notes as a .txt file.",
    tools: [
      "React",
      "Tailwind CSS",
      "Node",
      "Express",
      "TypeScript",
      "MongoDB",
      "",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  //   {
  //     id: 4,
  //     name: "Newsroom Management",
  //     description:
  //       "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
  //     code: "",
  //     demo: "",
  //     image: ayla,
  //     role: "Full Stack Developer",
  //   },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
