'use client'

import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'

export default function ProjectsCards() {
  return (
    <section>
      <div className="flex">
        <div className="mt-2 pr-3">
          <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
          <span className="block w-1 h-[120%] bg-slate-300 transform translate-x-1.5"></span>
        </div>

        <div className="px-4 grid">
          <h3 className="font-bold text-xl sm:text-1xl  md:text-2xl">
            tailwind-next
          </h3>
          <span className="text-sm sm:text-lg">
            Projeto da Rocketseat com o intuito de o conhecer o Tailwind CSS
            como Responsive | Dark Theme | Label trigger | all inputs |
            Animations
          </span>
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/tailwind-next"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub size={20} aria-label="Jones Souza Github" />

              <span className="text-sm sm:text-lg">
                2023 - Tailwind CSS | Next
              </span>
            </Link>
          </span>
        </div>
      </div>

      <div className="flex mt-2">
        <div className="mt-2.5 pr-3">
          <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
          <span className="block w-1 h-[120%] bg-slate-300 transform translate-x-1.5"></span>
        </div>
        <div className="px-4 grid">
          <h3 className="font-bold text-xl sm:text-1xl  md:text-2xl">
            desafios_python
          </h3>
          <span>
            Alguns Projetos e Exercicios básicos como Fundamentos | Estrutura de
            dados | Listas | Tuplas | Conjuntos | dados | Dicionários | Funções
            | Array | Programação Orientada a Objetos
          </span>
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/desafios_python"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub size={20} aria-label="Jones Souza Github" />
              <p className="text-lg">
                <span>2023 - Exercicios em Python</span>
              </p>
            </Link>
          </span>
        </div>
      </div>

      <div className="flex mt-2">
        <div className="mt-2.5 pr-3">
          <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
          <span className="block w-1 h-[115%] bg-slate-300 transform translate-x-1.5"></span>
        </div>
        <div className="px-4 grid">
          <h3 className="font-bold text-xl sm:text-1xl  md:text-2xl">
            allCopier
          </h3>
          <span>
            Projeto pessoal | Projeto simula um E-Commerce | possui Front - End
            e um Back - End para o cadastramento do usuario e fazer login |
            Front eu uso Framework Vite | Typescript | CSS | já o Back - End eu
            uso Prisma e o Fastfy - Projeto ainda estou trabalhando para trazer
            melhorias
          </span>
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/allCopier"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub size={20} aria-label="Jones Souza Github" />
              <p className="text-lg">
                <span>2022 à 2023 - AllCopier</span>
              </p>
            </Link>
          </span>
        </div>
      </div>

      <div className="flex mt-2">
        <div className="mt-2.5 pr-3">
          <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
          <span className="block w-1 h-[115%] bg-slate-300 transform translate-x-1.5"></span>
        </div>
        <div className="px-4 grid">
          <h3 className="font-bold text-xl sm:text-1xl  md:text-2xl">coffe</h3>
          <span>
            Desafio da Rocketseat | o intuito é um projeto E-Commerce com
            animações e formulário de endereço | Front - End eu uso Framework
            Vite | Typescript | Styled-Componets | Zod para validação
          </span>
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/coffe"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub size={20} aria-label="Jones Souza Github" />
              <p className="text-lg">
                <span>2023 - Coffe</span>
              </p>
            </Link>
          </span>
        </div>
      </div>

      <div className="flex mt-2">
        <div className="mt-2.5 pr-3">
          <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
          <span className="block w-1 h-[115%] bg-slate-300 transform translate-x-1.5"></span>
        </div>
        <div className="px-4 grid">
          <h3 className="font-bold text-xl sm:text-1xl  md:text-2xl">
            contagemFilho
          </h3>
          <span>
            Projeto Pessoal | Projeto que o intuito é a contagem regressiva que
            fiz para a minha filha | uso HTML, CSS, JQuery e Javascript Projeto
            simples com uma contagem regressiva para o próximo aniversário e uma
            galeria de exibição de fotos.
          </span>
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/contagemFilho"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub size={20} aria-label="Jones Souza Github" />
              <p className="text-lg">
                <span>2022 à 2023 - contagemFilho</span>
              </p>
            </Link>
          </span>
        </div>
      </div>

      <div className="flex mt-2">
        <div className="mt-2.5 pr-3">
          <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
          <span className="block w-1 h-[115%] bg-slate-300 transform translate-x-1.5"></span>
        </div>
        <div className="px-4 grid">
          <h3 className="font-bold text-xl sm:text-1xl  md:text-2xl">
            igniteCall-Rocketseat
          </h3>
          <span>
            Projeto da Rocketseat | Ignite Call é uma plataforma de agendamento
            de horários com a api do google de calendário | nela foi utilizando
            o NextJS | Typescript | Prisma | Next Auth | Google api
          </span>
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/igniteCall-Rocketseat"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub size={20} aria-label="Jones Souza Github" />
              <p className="text-lg">
                <span>2023 - igniteCall-Rocketseat</span>
              </p>
            </Link>
          </span>
        </div>
      </div>

      <div className="flex mt-2">
        <div className="mt-2.5 pr-3">
          <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
          <span className="block w-1 h-[93%] bg-slate-300 transform translate-x-1.5"></span>
        </div>

        <div className="px-4 grid">
          <h3 className="font-bold text-xl sm:text-1xl  md:text-2xl">
            pokedexDIO
          </h3>
          <span>
            Projeto da DIO - Digital Innovation One | Projeto fantástico do
            Reinan com o intuito de colocar em pratica alguns metodos em
            Javascript envolvendo a PokeApi fazendo requisições, buscando dados
            da API, estilizaçãoes com muito CSS dinamicos, animações e muito.
          </span>

          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/pokedexDIO"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub size={20} aria-label="Jones Souza Github" />
              <p className="text-lg">
                <span>2023 - pokedexDIO</span>
              </p>
            </Link>
          </span>
        </div>
      </div>
      <div className="mt-[-3%] pr-3">
        <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
      </div>
    </section>
  )
}
