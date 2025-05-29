import { useEffect, useState } from 'react';
import styles from './nav.module.css';

function Nav() {
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    
    // Limpeza do evento no unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
         <nav className={`${styles.navContainer} ${hasShadow ? styles.shadow : ''}`}>
            <div className={styles.logo}>
                <img src="/logoMarcos.svg" alt="Logo" />
                <div>
                    <p className={styles.name}>Marcos Cunha</p>
                    <p className={styles.function}>Design Visual Jr</p>
                </div>
            </div>
            <div className={styles.navLinks}>
                <a href="#section1">Sobre</a>
                <a href="#section2">Atuação</a>
                <a href="#section3">Portfólio</a>
                <a href="#">Contato</a>
            </div>
        </nav>
    )
}

export default Nav;