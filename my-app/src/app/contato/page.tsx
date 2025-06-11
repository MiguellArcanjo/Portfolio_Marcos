"use client"

import styles from "./page.module.css";
import Nav from "@/components/Nav/nav"
import Footer from "@/components/Footer/footer";
import { s } from "framer-motion/client";


export default function Contato() {

  return (
    <div className={`${styles.page}`}>
      <Nav />

      <main className={styles.mainContainerContato}>
        <section className={styles.sectionIntroduction}>
          <h1>Olha quem tá aqui 👀</h1>
          <p className={styles.p1}>Ficou com dúvida, se interessou em algo ou quer trabalhar comigo?</p>
          <p className={styles.p2}><span className={styles.destaque}>Se sim</span>, Preenche esse campo abaixo</p>
        </section>

        <section className={styles.sectionForm}>
          <form action="">
            <div className={styles.directionLeft}>
              <div className={styles.contactInfo}>
                <h1>Informações de contato</h1>
                <p>Preencha o formulário ao lado {'->'}</p>
                <div>
                  <img src="figmaMini.svg" alt="" />

                  <img src="instaMini.svg" alt="" />
                  <img src="linkedinMini.svg" alt="" />
                </div>
              </div>

              <div className={styles.contactDetails}>
                <img src="phoneIcone.svg" alt="" />
                <p>+55 (83) 99688-1746</p>
              </div>

              <div className={styles.contactDetails}>
                <img src="mailIcone.svg" alt="" />
                <p>marcosldc.contato@gmail.com</p>
              </div>

              <div className={styles.logo}>
                <img src="LogoMarcosGrande.svg" alt="" />
              </div>
            </div>

            <div className={styles.directionRight}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id="nome" placeholder="Digite seu nome..." />
                </div>
                <div className={styles.field}>
                  <label htmlFor="sobrenome">Sobrenome</label>
                  <input type="text" id="sobrenome" placeholder="Digite seu sobrenome..." />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Digite seu melhor email..." />
                </div>
                <div className={styles.field}>
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" placeholder="+00 ( )" />
                </div>
              </div>

              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>Você está aqui como...</label>
                <div className={styles.radioOptions}>
                  <label className={styles.radioOption}>
                    <input type="radio" name="tipo" />
                    <span>Recrutador</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input type="radio" name="tipo" />
                    <span>Representante de Empresa</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input type="radio" name="tipo" />
                    <span>Interessado</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input type="radio" name="tipo" />
                    <span>Outro</span>
                  </label>
                </div>
              </div>

              <div className={styles.fieldTextArea}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  placeholder="Digite sua mensagem..."
                  className={styles.textarea}
                ></textarea>
              </div>

              <button type="submit" className={styles.button}>Enviar Mensagem</button>
              <div className={styles.contactMobileInfo}>
                <div className={styles.contactItem}>
                  <img src="phoneIconAzul.svg" alt="Ícone telefone" />
                  <p>+55 (83) 99688-1746</p>
                </div>
                <div className={styles.contactItem}>
                  <img src="mailIconAzul.svg" alt="Ícone e-mail" />
                  <p>marcosldc.contato@gmail.com</p>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
