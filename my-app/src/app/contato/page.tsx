"use client";

import styles from "./page.module.css";
import Nav from "@/components/Nav/nav";
import Footer from "@/components/Footer/footer";
import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    tipo: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, name, type } = e.target;
    if (type === "radio") {
      setForm((prev) => ({ ...prev, tipo: value }));
    } else {
      setForm((prev) => ({ ...prev, [id || name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.nome} ${form.sobrenome}`,
          email: form.email,
          message: `Telefone: ${form.telefone}\nTipo: ${form.tipo}\nMensagem: ${form.mensagem}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Mensagem enviada com sucesso!");
        setForm({ nome: "", sobrenome: "", email: "", telefone: "", tipo: "", mensagem: "" });
      } else {
        setStatus(data.message || "Erro ao enviar mensagem.");
        alert("❌ Erro ao enviar mensagem.");
      }
    } catch {
      alert("❌ Erro ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  };

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
          <form onSubmit={handleSubmit}>
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
                  <input type="text" id="nome" placeholder="Digite seu nome..." value={form.nome} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="sobrenome">Sobrenome</label>
                  <input type="text" id="sobrenome" placeholder="Digite seu sobrenome..." value={form.sobrenome} onChange={handleChange} required />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Digite seu melhor email..." value={form.email} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" placeholder="+00 ( )" value={form.telefone} onChange={handleChange} />
                </div>
              </div>

              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>Você está aqui como...</label>
                <div className={styles.radioOptions}>
                  {["Recrutador", "Representante de Empresa", "Interessado", "Outro"].map((tipo) => (
                    <label className={styles.radioOption} key={tipo}>
                      <input
                        type="radio"
                        name="tipo"
                        value={tipo}
                        checked={form.tipo === tipo}
                        onChange={handleChange}
                      />
                      <span>{tipo}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.fieldTextArea}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  placeholder="Digite sua mensagem..."
                  className={styles.textarea}
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.button} disabled={loading}>
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </button>

              {status && <p style={{ marginTop: 10 }}>{status}</p>}

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
