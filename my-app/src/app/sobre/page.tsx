"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import Nav from "@/components/Nav/nav";
import Footer from "@/components/Footer/footer";
import LogoCard from "@/assets/logoCard.svg";
import FotoMarcos from "../../../public/fotoMarcos.svg";
import EmblaCarousel from "@/components/Carousel/carousel";
import RevealSection from "@/components/RevealSection/revealSection";

export default function Sobre() {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const SLIDE_COUNT = 6;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const imageUrls = slides.map((index) => `/imagemCarrocel${index + 1}.svg`);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const maxTilt = 15;
    const tiltXValue = (mouseY / (rect.height / 2)) * maxTilt;
    const tiltYValue = -(mouseX / (rect.width / 2)) * maxTilt;
    
    setTiltX(tiltXValue);
    setTiltY(tiltYValue);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setTiltX(0);
    setTiltY(0);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.page}`}>
      <Nav />

      <main className={styles.mainContainerSobre}>
        <RevealSection>
          <section className={styles.sectionAboutme}>
            <p className={styles.titleAboutme}>Sobre mim</p>
            <h1>"Transformando ideias em interfaces digitais intuitivas e funcionais"</h1>
            <p className={styles.location}>João pessoa, Paraíba, Brasil</p>
          </section>
        </RevealSection>

        <RevealSection>
          <section 
            className={styles.sectionCardBig}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={!isMobile ? {
              transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              transition: 'transform 0.1s ease-out'
            } : undefined}
          >
            {!isFlipped ? (
              <div className={styles.cardBig}>
                <div className={styles.cardBigContent}>
                  <LogoCard className={styles.icon} />
                  <p className={styles.titleCard}>Quem sou eu?</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardBackContent}>
                <div className={styles.leftSide}>
                    <h2 className={styles.cardBackTitle}>Quem sou eu?</h2>
                    <p className={styles.cardBackText}>Olá, sou Marcos Cunha, <strong>Product Designer</strong> formado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário de João Pessoa (UNIPÊ).</p>
                    <p className={styles.cardBackText}>Há três anos, venho ajudando pessoas e empresas a transformar suas necessidades em experiências digitais modernas e intuitivas. No início da minha carreira fiz o redesign do website do <strong>SECOOB</strong> — onde tive a oportunidade de aprender processos, padrões e boas práticas de design ao lado de um UI/UX Designer experiente. Com o passar dos anos, fui desenvolvendo diversos projetos até chegar ao cliente <strong>RealLed</strong>, para quem desenvolvi não apenas o website institucional, mas também ferramentas digitais, com o auxílio de inteligência artificial, para automatizar processos e simplificar o dia a dia do cliente.</p>
                    <p className={styles.cardBackText}>Minha abordagem é simples: escuta ativa, pesquisa profunda e prototipagem ágil para entregar soluções digitais memoráveis. Acredito que design é um divisor de águas — potencializa ideias, conecta pessoas e impulsiona resultados.</p>
                </div>
                <div className={styles.rightSide}>
                  <img src="fotoMarcos.svg" alt="Foto de Marcos Cunha" />
                </div>
              </div>
            )}
          </section>
        </RevealSection>
      </main>

      <RevealSection>
        <section className={styles.howItStartedSection}>
          <div className={styles.howItStartedTitleContainer}>
            <img src="/logoMarcosSimple.svg" alt="Icon" className={styles.howItStartedTitleIcon} />
            <h2 className={styles.howItStartedTitle}>Como tudo começou?</h2>
          </div>
          <div className={styles.howItStartedContent}>
            <div className={styles.howItStartedImageWrapper}>
              <img src="/FotoMarcosEquipe.svg" alt="Competição de robótica" className={styles.howItStartedImage} />
              <p className={styles.howItStartedCaption}>
                (FLL Regional RN 19/20 - 1ºSt Champion&apos;s Award, 1º Design do Robô e 1º Desempenho nas Finais + Classificação Nacional em São Paulo)
              </p>
            </div>
            <div className={styles.howItStartedTextWrapper}>
              <h3 className={styles.howItStartedSubtitle}>FIRST Lego League Challenge 2019/2020</h3>
              <p className={styles.howItStartedText}>
                Minha paixão pela tecnologia nasceu em 2019, durante o primeiro ano do ensino médio, quando me joguei de cabeça na minha primeira temporada como competidor de Robótica <strong>FIRST Lego League Challenge (FLL)</strong>. Caso você não conheça, a FLL é uma competição internacional que desafia crianças e adolescentes a resolver problemas do mundo real usando robôs LEGO e projetos de pesquisa. É um ambiente onde a criatividade e o trabalho em equipe são postos à prova, e foi ali que comecei a trilhar meu caminho.
              </p>
            </div>
          </div>
          <div className={styles.additionalText}>
              <p className={styles.howItStartedText}>
                Após essa experiência enriquecedora, mergulhei ainda mais fundo no mundo da robótica com o <strong>FIRST Tech Challenge (FTC)</strong>. A FTC é uma competição mais avançada, onde equipes de estudantes projetam, constroem e programam robôs de porte maior para competir em uma arena. Essa transição me permitiu aprofundar meus conhecimentos em engenharia e programação, e foi na temporada 2021/2022 que comecei a explorar o universo do design.
              </p>
              <p className={styles.howItStartedText}>
                Foi nesse período que me aventurei no <strong>Figma</strong>, desenvolvendo o design do aplicativo <strong>&quot;Caronas&quot;</strong>. A ideia era inovadora: um app focado em caronas de objetos. Se você fosse viajar, poderia anunciar sua rota e pessoas que quisessem enviar um objeto para o mesmo destino poderiam entrar em contato, pagando um valor pela entrega. Embora meu design inicial não fosse uma obra de arte (ainda não tinha muita experiência na área!!), esse projeto abriu um leque de possibilidades na minha mente, mostrando o poder do design e da tecnologia para resolver problemas cotidianos.
              </p>
          </div>

          <div className={styles.finalSectionContent}>
              <img src="/ComputersSectionSobre.svg" alt="Projetos em notebooks" className={styles.computerImage} />
              <div className={styles.finalTextWrapper}>
                  <p className={styles.howItStartedText}>
                      Os anos seguintes foram repletos de competições, onde apresentamos projetos em eventos como a <strong>Mostra Nacional de Robótica (MNR)</strong>. Com o fim do ensino médio, recebi um convite muito especial: me tornar juiz voluntário da FTC nas etapas nacionais da competição. Comecei como juiz do prêmio Dean&apos;s List e, em 2023/2024, atuei em Brasília. É uma função que me permite continuar conectado à comunidade e inspirar a próxima geração de inovadores, e sigo como juiz até hoje.
                  </p>
                  <p className={styles.howItStartedText}>
                      Em paralelo, tive a oportunidade de entrar na <strong>ZOOM Education for Life</strong>, a maior empresa de educação tecnológica do Brasil. Ao mesmo tempo em que cursava <strong>Análise e Desenvolvimento de Sistemas</strong>, me formei no final de 2024 e continuei aprimorando minhas habilidades com diversas especializações em <strong>UI/UX Design, HTML e CSS</strong> em plataformas renomadas como <strong>Alura, Dev Samurai e DevMedia</strong>.
                  </p>
                  <p className={styles.howItStartedText}>
                      Minha jornada é um constante aprendizado, e pretendo a cada dia mais me especializar e aprofundar minhas habilidades nesse universo tecnológico que tanto me fascina.
                  </p>
              </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <div className={styles.inspiringContainer}>
          <section className={styles.inspiringSection}>
              <h2 className={styles.inspiringTitle}>Inspirando Além do Design</h2>
              <p className={styles.inspiringText}>
                  Além do design, o voluntariado nas competições de robótica é uma das grandes forças que me movem. Já são duas temporadas atuando como juiz, uma experiência que vai muito além das arenas: tenho a oportunidade de inspirar jovens, acompanhar suas evoluções e, de alguma forma, contribuir para que enxerguem novas possibilidades para o futuro.
              </p>
              <p className={styles.inspiringText}>
                  Ver de perto o impacto da tecnologia e do trabalho em equipe na vida desses estudantes me lembra diariamente por que escolhi esse caminho. Sigo motivado não só a criar experiências digitais inovadoras, mas também a devolver para a comunidade tudo aquilo que aprendi — dentro e fora do design.
              </p>
              <p className={styles.inspiringText}>
                  Essa vivência reforça meu compromisso em unir tecnologia, criatividade e propósito em cada projeto que abraço.
              </p>
          </section>
          <div className={styles.carouselWrapper}>
              <EmblaCarousel slides={imageUrls} options={{ loop: true }} />
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <section className={styles.skillsSection} ref={skillsRef}>
          <h2 className={styles.skillsTitle}>Habilidades Técnicas</h2>
          <div className={`${styles.skillsGrid} ${skillsVisible ? styles.visible : ''}`}>
            <div className={styles.skillsColumn}>
              <h3 className={styles.skillsSubtitle}>Hard skills</h3>
              <div className={styles.skillItem}>
                <p>Adobe Illustrator</p>
                <div className={styles.progressBar}><div style={{ width: '50%' }}></div></div>
              </div>
              <div className={styles.skillItem}>
                <p>Figma</p>
                <div className={styles.progressBar}><div style={{ width: '85%' }}></div></div>
              </div>
              <div className={styles.skillItem}>
                <p>Notion</p>
                <div className={styles.progressBar}><div style={{ width: '65%' }}></div></div>
              </div>
              <div className={styles.skillItem}>
                <p>Design Thinking</p>
                <div className={styles.progressBar}><div style={{ width: '60%' }}></div></div>
              </div>
              <div className={styles.skillItem}>
                <p>UI Design</p>
                <div className={styles.progressBar}><div style={{ width: '80%' }}></div></div>
              </div>
            </div>
            <div className={styles.skillsColumn}>
              <h3 className={styles.skillsSubtitle}>Soft skills</h3>
              <div className={styles.skillItem}>
                <p>Comunicação</p>
                <div className={styles.progressBar}><div style={{ width: '65%' }}></div></div>
              </div>
              <div className={styles.skillItem}>
                <p>Organização</p>
                <div className={styles.progressBar}><div style={{ width: '85%' }}></div></div>
              </div>
              <div className={styles.skillItem}>
                <p>Proatividade</p>
                <div className={styles.progressBar}>
                  <div style={{ width: '95%' }}></div>
                
                </div>
              </div>
              <div className={styles.skillItem}>
                <p>Trabalho em Equipe</p>
                <div className={styles.progressBar}><div style={{ width: '90%' }}></div></div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className={styles.experienceSection}>
          <h2 className={styles.experienceTitle}>Experiência Profissional</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePoint}></div>
              <div className={styles.timelineContent}>
                <h4>Caronas</h4>
                <p>UI Design - Projeto<br/>Ensino Médio<br/>2020/2021</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePoint}></div>
              <div className={styles.timelineContent}>
                <h4>SECOOB</h4>
                <p>UI Design - Freelancer<br/>2022</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePoint}></div>
              <div className={styles.timelineContent}>
                <h4>ZOOM Education for Life</h4>
                <p>Monitor de Educação Tecnológica<br/>2023 - Atual</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePoint}></div>
              <div className={styles.timelineContent}>
                <h4>Real Led</h4>
                <p>UI Design - Freelancer<br/>2024</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelinePoint}></div>
              <div className={styles.timelineContent}>
                <h4>Ayvu</h4>
                <p>UI Design - Freelancer<br/>2025 - Em Andamento</p>
              </div>
          
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className={styles.educationSection}>
            <div className={styles.educationContent}>
                <h2 className={styles.educationTitle}>Formação Acadêmica</h2>
                <p className={styles.educationInstitution}>Unipê – Centro Universitário de João Pessoa</p>
                <p className={styles.educationCourse}>Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas</p>
                <p className={styles.educationDate}>Fevereiro de 2023 – Dezembro de 2024</p>
            </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className={styles.coursesSection}>
          <h2 className={styles.coursesTitle}>Cursos Extras</h2>
          <div className={styles.coursesGrid}>
              <div className={styles.courseColumn}>
                  <h3 className={styles.coursePlatform}>Dev Samurai</h3>
                  <ul>
                      <li>HTML: Do Básico ao Intermediário</li>
                      <li>CSS: Do Básico ao Intermediário</li>
                      <li>Typescript: Do Básico ao Intermediário</li>
                      <li>Javascript: Do Básico ao Intermediário</li>
                  </ul>
              </div>
              <div className={styles.courseColumn}>
                  <h3 className={styles.coursePlatform}>DevMedia</h3>
                  <ul>
                      <li>HTML5: Do Básico ao Avançado</li>
                      <li>CSS3: Do Básico ao Avançado</li>
                      <li>JavaScript: Do Básico ao Avançado</li>
                      <li>Git: Do Básico ao Avançado</li>
                      <li>GitHub: Do Básico ao Avançado</li>
                  </ul>
              </div>
              <div className={styles.courseColumn}>
                  <h3 className={styles.coursePlatform}>Alura</h3>
                  <ul>
                      <li>UX: Experiências centradas no usuário</li>
                      <li>UI Design: Mergulhando nas interfaces digitais</li>
                      <li>Acessibilidade em UX: Tornando interfaces acessíveis</li>
                      <li>Figma: Conhecendo a ferramenta</li>
                      <li>Adobe Illustrator</li>
                  </ul>
              </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className={styles.downloadSection}>
          <button className={styles.downloadButton}>
            Baixar Currículo
          </button>
        </section>
      </RevealSection>

      <Footer />
    </div>
  );
}
