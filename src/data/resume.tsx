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
		"English",
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
			title: "Pote Manager",
			href: "https://pmg-es-2024-2-ti2-3740100-gerenciador-financeiro.vercel.app/",
			dates: "Ago 2024 - Atual",
			active: true,
			description:
				"O Pote Manager é um projeto de semestral de faculdade que está sendo desenvolvido por mim e colegas de grupo, onde criamos um gerenciador financeiro com objetivo de facilitar a visão do usuário sobre suas finanças utilizando a tecnologia.",
			technologies: [
				"Next.js",
				"Typescript",
				"Spring Boot",
				"MySQL",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Zustand",
			],
			links: [
				{
					type: "Website",
					href: "https://pmg-es-2024-2-ti2-3740100-gerenciador-financeiro.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-2-ti2-3740100-gerenciador-financeiro",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "pote_manager.mp4",
		},
		{
			title: "Revio",
			href: "https://revio.cc",
			dates: "Nov 2024 - Nov 2024",
			active: true,
			description:
				"Landing page de um serviço de desbanimento de contas do Instagram feito para um cliente.",
			technologies: [
				"Next.js",
				"Typescript",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Aceternity UI"
			],
			links: [
				{
					type: "Website",
					href: "https://revio.cc",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/revio.png",
			video: "",
		},
	],
} as const;
