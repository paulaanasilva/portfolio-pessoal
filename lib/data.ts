import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import paginaCursoIA from "@/public/cursoIA.png";
import todososPuzzles from "@/public/Puzzle.png";
import imgDesplugado from "@/public/desplug.jpg";
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
    title: "Mestrado em Computação Aplicada",
    location: "UNIVALI - Itajaí, SC",
    description:
      "Criação de jogos digitais para o desenvolvimento e avaliação do Pensamento Computacional",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Líder de Desenvolvimento de Software",
    location: "Senior Sistemas - Blumenau, SC",
    description:
      "Planejamento e gestão de projetos de software.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Analista de Sistemas",
    location: "Senior Sistemas - Blumenau, SC",
    description:
      "Levantamento e análise de requisitos; Definição de microsserviços, APIs REST, modelagem de dados e histórias de usuário.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Analista de Sistemas",
    location: "PBG S/A - Tijucas, SC",
    description:
      "Atuação com suporte funcional e técnico no ERP Oracle EBS (AP, Compras e Recebimento)",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2021",
  },
  {
    title: "Bacharelado em Ciência da Computação",
    location: "UNIVALI - Itajaí, SC",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "IA para Negócios: Análise de Dados com RapidMiner",
    description: "Este curso foi desenvolvido para profissionais que desejam prever vendas, planejar a demanda e antecipar tendências de mercado de forma estratégica...",
    imageUrl: paginaCursoIA,
    href: "https://www.udemy.com/course/edge-solucoes-em-ia-analise-preditiva-rapidminer/?referralCode=33B4BF4DB338BED260EF",
  },
  {
    title: "Avaliação do Pensamento Computacional por Meio de Puzzles Interativos",
    description:
      "Este projeto apresenta a integração dos minijogos Tangram, Arrastar e Sequência ao CT Puzzle Test Platform.",
    imageUrl: todososPuzzles,
    href: "https://univali-my.sharepoint.com/:b:/g/personal/ana_silva_edu_univali_br1/IQAcdbdY8xrrRbRqy8xUx4mTATwdOQxIROcpyYB7SUzs3SI?e=zPOXuv",
  },
  {
    title: "Desenvolvimento de um jogo desplugado para ensinar grafos",
    description:
      "Abordagem para o ensino de teoria dos grafos utilizando um jogo desplugado desenvolvido por meio de um processo de design participativo.",
    imageUrl: imgDesplugado,
    href: "https://link.springer.com/article/10.1007/s11423-025-10500-2?",
  },
] as const;

export const skillsDataSoft = [
 "Comunicação","Organização","Tradução de Requisitos de Negócio","Visão de Negócio","Trabalho em Equipe","Liderança","Pensamento Analítico","Resolução de Problemas",
] as const;

export const skillsDataHard = [
  "Análise de Sistemas","Especificação de Requisitos","Documentação Técnica","UML","BPMN","Casos de Uso","Histórias de Usuário","Modelagem de Dados","SQL","PL/SQL","Bancos de Dados Relacionais","Oracle","PostgreSQL","Integração de Sistemas","APIs REST","JSON","XML","ERP","Java","Python","HTML","CSS","Lógica de Programação","Versionamento de Código","Metodologias Ágeis","Scrum","Kanban","Gestão de Backlog","Refinamento de Requisitos","Planejamento de Sprint","Documentação Ágil","Jira","Git","Postman","Swagger","Trello","JasperSoft Studio","Eclipse","SDS","RapidMiner",
] as const;
