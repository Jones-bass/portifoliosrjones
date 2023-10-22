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
        Estudent={'Estudante em Desenvolvedor Front-End e Back-End'}
        description={`Cursando Análise e Desenvolvimento de Sistemas na Faculdade Estacio, 
        certificado pela Rocketseat, Origamid e a Digital Innovation One, alguns bootcamp de especialização.
        Buscando uma experiência de estágio ou desenvolvedor JR. com foco em Front-End.
        Experiência com tecnologias: HTML, CSS, Javascript, Typescript, TailwindCSS, ReactJS e NodeJS.`}
      />
    </motion.section>
  )
}
