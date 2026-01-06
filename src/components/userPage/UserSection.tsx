'use client'
import { motion } from 'framer-motion'
import { Info } from './Info'
import { Header } from './header'

export function UserSection() {
  return (
    <motion.section
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.9 }}
    >
      <Header />

      <Info
        UserName={'Jones Souza'}
        Estudent={'Desenvolvedor FullStack Junior'}
        description={`Formado em Análise e Desenvolvimento de Sistemas pela Faculdade Estácio, com cursos e certificações pela Rocketseat, Origamid, SQL Impressionador e Xperium, além de participação em bootcamps de especialização técnica. Busco uma oportunidade como Desenvolvedor Full Stack Júnior ou Analista de Dados Júnior, unindo desenvolvimento de aplicações modernas à análise e interpretação de dados para tomada de decisão. Possuo conhecimentos em JavaScript, TypeScript, Angular, ReactJS, e estou em constante evolução na área de dados, com foco em Python, SQL, Power BI e soluções voltadas ao ecossistema TOTVS Moda.`}
      />
    </motion.section>
  )
}
