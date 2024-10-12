import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fernando",
  initials: "FN",
  url: "https://fernando.lol",
  location: "Minas Gerais, BR",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Desenvolvimento Fullstack. Empreendo nas horas vagas e busco sempre melhorar um pouco a cada dia.",
  summary:
    "Entusiasta de tecnologias e jogos desde de criança, despertei meu interesse pelo desenvolvimento por volta de 2018, ainda com meus 13 anos de idade. Aprendendo apenas o básico, como HTML e CSS, despertei uma grande admiração e vontade de desenvolver. Desde então, venho aprendendo cada vez mais sobre tecnologias, e recentemente começei o meu curso em Engenheria de Software e estou buscando uma vaga de estágio.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Express",
    "Nest",
    "Typescript",
    "Node.js",
    "Python",
    "Prisma",
    "MongoDB",
    "Postgres",
    "Rust",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fefemata5@gmail.com",
    tel: "+5531992769876",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/f3rnando0",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fernando-mata-106898296",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:fefemata5@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Azapfy",
      href: "https://www.azapfy.com.br",
      badges: [],
      location: "Remote",
      title: "Estágio em Desenvolvimento Front-end",
      logoUrl: "/azapfy.jpeg",
      start: "Ago 2024",
      end: "Set 2024",
      description:
        "Criação de interfaces utilizando Material-UI, ShadCN, Zustand, entre outros. Manutenção e migração do sistema.",
    },
  ],
  education: [
    {
      school: "Pontifícia Universidade Católica de Minas Gerais",
      href: "https://pucminas.br",
      degree: "Bacharelado em Engenharia de Software",
      logoUrl: "/pucmg.png",
      start: "2024",
      end: "Atual",
    },
    {
      school: "Coleguium",
      href: "https://coleguium.com.br",
      degree: "Ensino médio completo",
      logoUrl: "/coleguium.png",
      start: "2007",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
