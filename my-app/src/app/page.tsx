"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/Nav/nav"
import Footer from "@/components/Footer/footer";
import { useState, useEffect, useRef  } from "react";
import RevealSection from "@/components/RevealSection/revealSection";


export default function Home() {

  const [activeTab, setActiveTab] = useState('Todos');
  const tabs = ['Todos', 'Interfaces', 'Redesign', 'UX Research', 'Social Media']

  return (
    <div className={`${styles.page}`}>
      <Nav />

      <main className={styles.mainContainer}  id="section1">
        <RevealSection>
          <section className={styles.section1}>
            <div className={styles.mainContent}>
              <h1 className={styles.title1}>Olá!</h1>
              <h1 className={styles.title2}>Me chamo Marcos :)</h1>
              <p className={styles.aboutMe}>Designer Visual Júnior, com foco em <span className={styles.bold}>Product Design</span>. Crio experiências digitais intuitivas e funcionais, sempre alinhadas às necessidades dos usuários e aos objetivos dos projetos, buscando soluções inovadoras e impactantes.</p>
              
              <div className={styles.clickHere}>
                <p>Quer saber mais sobre mim?</p>
                <a href="">Clique aqui</a>
              </div>

              <div className={styles.experience}>
                <h1>+ 3 Anos</h1>
                <p>Experiência com <br /> UI/UX Design</p>
              </div>

              <div className={styles.buttons}>
                <button className={styles.contact}>Contato</button>
                <button className={styles.portfolio}>Portfólio</button>
              </div>

              <div className={styles.skills}>
                <img src="/Figma.svg" alt="Figma" />
                <img src="/PaperIA.svg" alt="PaperIA" />
                <img src="/Vector.svg" alt="Vector" />
              </div>
            </div>
            

            <div className={styles.imageContainer}>
              <Image
                src="fotoMarcos.svg"
                alt="Marcos Cunha"
                width={500}
                height={500}
                className={styles.image}
                layout="responsive"
              />
            </div>
          </section>
        </RevealSection>

        <RevealSection>
          <section className={`${styles.section2}`} id="section2">
            <div>
              <h1 className={`${styles.titleSection2}`}>Atuação</h1>

              <div className={styles.skillsInfo}>
                <div>
                  <div className={styles.skillContainer}>
                    <img src="/computerDesign.svg" alt="Computador Icone" width={130}/>
                    <p>Product Design</p>
                    <p className={styles.aboutSkill}>Criação de soluções digitais completas usando estratégia, design visual e experiência do usuário. O processo envolve desde a definição de problemas e validação de ideias, até a prototipação e documentação de interfaces, unindo análise de dados e testes de usabilidade para desenvolver produtos funcionais, escaláveis e centrados no usuário.</p>
                  </div>

                  <div className={styles.skillContainer}>
                    <img src="/search.svg" alt="Computador Icone" />
                    <p>UX Research</p>
                    <p className={styles.aboutSkill}>Pesquisa centrada no entendimento dos usuários por meio da análise de dados, comportamentos e necessidades, com o objetivo de informar o desenvolvimento de experiências digitais mais eficazes e alinhadas aos objetivos do produto</p>
                  </div>
                </div>

                <div>
                  <img src="/line.svg" alt="linha" />
                </div>

                <div>
                  <div className={styles.skillContainer}>
                    <img src="/computerInterface.svg" alt="Computador Icone" />
                    <p>Redesign de Interfaces</p>
                    <p className={styles.aboutSkill}>Reformulação visual e estrutural de interfaces com foco em modernização, usabilidade e melhoria da experiência do usuário. O processo contempla a análise de produtos existentes, identificação de pontos de melhoria e aplicação de soluções que otimizam a navegação, fortalecem a identidade visual e alinham o design às necessidades do público e do negócio.</p>
                  </div>

                  <div  className={styles.skillContainer}>
                    <img src="/phone.svg" alt="Computador Icone" />
                    <p>Social Media Design</p>
                    <p className={styles.aboutSkill}>Desenvolvimento de conteúdos visuais estratégicos para plataformas de redes sociais, focados em engajamento, identidade da marca e comunicação eficaz. Inclui a criação de posts, banners, stories e peças interativas que fortalecem a presença digital e promovem interação com o público.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>
        <RevealSection>
          <section className={styles.section3}>
            <div className={styles.topDiv}>
              <img src="/logoMarcosSimple.svg" alt="Logo marcos simplificada" />
              <h1>Projetos Destaque</h1>
            </div>

            <div className={styles.middleDiv}>
              <img src="/comercialLedAssets.svg" alt="Real Led" />
              <div>
                <h1>Site Comercial : Real LED</h1>
                <p className={styles.typeProject}>Desktop/Mobile</p>
                <p className={styles.aboutProject}>Site corporativo para a empresa Real LED, especializada em soluções visuais para eventos. O layout prioriza a exposição de produtos, credibilidade comercial e experiência do usuário, com navegação responsiva e foco em conversão.</p>
              </div>
            </div>

            <div className={styles.lineContainer}>
              <img src="/lineBranca.svg" alt="" />
            </div>

            <div className={styles.bottomDiv}>
              <div>
                <h1>Site para Órgão Público : SECOB</h1>
                <p className={styles.typeProject}>Desktop/Mobile</p>
                <p className={styles.aboutProject}>Site institucional desenvolvido para apresentar informações sobre a SECOB (provavelmente uma Secretaria de Obras ou similar). Foco em acessibilidade, linguagem clara e design responsivo. Ideal para órgãos governamentais ou projetos sociais que precisam se comunicar com a população de forma visualmente atrativa e funcional.</p>
              </div>
              <img src="/secobAssets.svg" alt="Secob" className={styles.secobImage}/>
            </div>
          </section>
        </RevealSection>
        <RevealSection>
          <section className={styles.section4} id="section3">
            <ul className={styles.tabs}>
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>

            <div className={styles.imsProjects}>
              {(activeTab === 'Todos' || activeTab === 'Interfaces') && (
                <div>
                  <img src="/redProject.svg" />
                  <img src="/secobProject.svg" />
                </div>
              )}

              {(activeTab === 'Todos' || activeTab === 'Social Media') && (
                <div className={styles.socialFeed}>
                  <img className={styles.feed} src="/feed1.svg" />
                  <img className={styles.feed} src="/feed2.svg" />
                </div>
              )}

              {(activeTab === 'Todos' || activeTab === 'Interfaces' || activeTab === 'Redesign') && (
                <div>
                  <img src="/login.svg" />
                  <img src="/miguel.svg" />
                </div>
              )}

              {(activeTab === 'UX Research') && (
                <div className={styles.infoProject}>
                  <h1>em breve disponivel! :)</h1>
                </div>
              )}

              {(activeTab === 'Todos' || activeTab === 'Social Media') && (
                <div className={styles.unicImage}>
                  <img src="/loginProject.svg" className={styles.feed}/>
                </div>
              )}
            </div>
          </section>
        </RevealSection>
      </main>
      <Footer />
    </div>
  );
}
