import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import paginaCursoIA from "@/public/paginaCursoIA.png";
import todososPuzzles from "@/public/todosPuzzles.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Principal",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "IA para Negócios: Análise de Dados com RapidMiner",
    description: "Este curso foi desenvolvido para profissionais que desejam prever vendas, planejar a demanda e antecipar tendências de mercado de forma estratégica, sem a necessidade de aprender programação ou lidar com códigos complexos...",
    imageUrl: paginaCursoIA,
    href: "https://www.udemy.com/course/edge-solucoes-em-ia-analise-preditiva-rapidminer/?referralCode=33B4BF4DB338BED260EF", 
  },
  {
    title: "Avaliação do Pensamento Computacional por Meio de Puzzles Interativos",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    imageUrl: todososPuzzles,
    href: "https://www.udemy.com/course/edge-solucoes-em-ia-analise-preditiva-rapidminer/?referralCode=33B4BF4DB338BED260EF", 
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsDataSoft = [
  "Pensamento analítico",
  "Tradução de necessidades de negócio em soluções técnicas",
  "Comunicação",
  "Liderança",
  "Resolução estruturada de problemas com foco em impacto",
] as const;

export const skillsDataHard = [
  "Análise de sistemas e levantamento de requisitos",
  "Automação e otimização de processos",
  "Integração de sistemas e APIs",
  "Inteligência Artificial aplicada a problemas reais",
] as const;
