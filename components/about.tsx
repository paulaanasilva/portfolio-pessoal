"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>

      <p className="mb-3">
        Sou bacharel em Ciência da Computação e Mestre em Computação Aplicada. Ao longo da minha trajetória acadêmica e profissional, atuei em análise de sistemas, participando de todas as etapas do ciclo de desenvolvimento de software, desde o entendimento do problema junto ao cliente, levantamento e documentação de requisitos, até a entrega da solução, sempre conectando a tecnologia às necessidades reais do negócio.</p>

      <p className="mb-3">
        Também liderei equipes e projetos, o que fortaleceu minha atuação em gestão de processos e times que utilizam metodologias ágeis, além de uma sólida experiência em automação de processos e no uso estratégico de dados em ambientes corporativos. </p>

      <p className="mb-3">
        Mais do que desenvolver sistemas, busco criar soluções que façam sentido na prática, sejam sustentáveis ao longo do tempo e gerem impacto real para pessoas e organizações.</p>
    </motion.section>
  );
}
