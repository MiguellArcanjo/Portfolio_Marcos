import styles from './foote.module.css';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.container}>
                <div>
                    <img src="M.svg" alt="" />
                </div>

                <div>
                    <p className={styles.email}>@marcosldc.contato@gmail.com</p>
                    <div className={styles.socialIcons}>
                        <img src="figmaMini.svg" alt="" />
                        <img src="unionMini.svg" alt="" />
                        <img src="instaMini.svg" alt="" />
                        <img src="linkedinMini.svg" alt="" />
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="" className={styles.label}>Fale comigo</label>
                    <input type="text" placeholder='Me envie uma mensagem...' className={styles.input}/>
                </div>

            </div>
            <p className={styles.direitos}>@ 2025 Marcos cunha</p>
        </footer>
    )
}

export default Footer;