"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/Nav/nav"
import Footer from "@/components/Footer/footer";
import { CardWhite, CardBlue} from "@/components/CardProject/card";
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
          <section className={styles.section2} id="section2">
            <div className={styles.section2Content}>
              <div className={styles.containerTitleSection2}>
                <p className={styles.paragrafoTopSection2}>Minhas</p>
                <h1 className={styles.titleSection2}>Atuações</h1>
              </div>
    
              <CardWhite 
                iconSrc="/computerDesign.svg"
                title="Product Design"
                description="Criação completa de soluções digitais, da ideação aos testes, focada em estratégia, design, UX e dados para desenvolver produtos funcionais, escaláveis e centrados no usuário."
              />

              <CardBlue 
                iconSrc="/searchBranco.svg"
                title="UX Research"
                description="Pesquisa e análise de usuários para entender necessidades, comportamentos e preferências, informando decisões de design e estratégia de produto."
              />

              <CardWhite 
                iconSrc="/phone.svg"
                title="Social Media Design"
                description="Desenvolvimento de conteúdo visual estratégico para redes sociais, focado em engajamento, identidade da marca e comunicação eficaz, fortalecendo a presença digital e a interação com o público."
              />

              <CardBlue 
                iconSrc="/computerBranco.svg"
                title="Redesign de Interfaces"
                description="Reformulação visual e estrutural de interfaces para modernização, melhoria da usabilidade e UX, otimizando navegação, fortalecendo a identidade visual e alinhando o design às necessidades do público e do negócio."
              />
             
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
                <p className={styles.aboutProjectBottom}>Site institucional desenvolvido para apresentar informações sobre a SECOB (provavelmente uma Secretaria de Obras ou similar). Foco em acessibilidade, linguagem clara e design responsivo. Ideal para órgãos governamentais ou projetos sociais que precisam se comunicar com a população de forma visualmente atrativa e funcional.</p>
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
