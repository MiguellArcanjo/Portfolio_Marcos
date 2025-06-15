import { useEffect, useRef, useState } from 'react';
import styles from './nav.module.css';

function Nav() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Menu mobile FORA do nav */}
      <div
        className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}
        ref={menuRef}
        style={{ zIndex: 200000 }} // força z-index alto
      >
        <a href="/#section1">Sobre</a>
        <a href="/#section2">Atuação</a>
        <a href="/#section3">Portfólio</a>
        <a href="/contato">Contato</a>
      </div>
      <nav className={`${styles.navContainer} ${hasShadow ? `${styles.blur} ${styles.shadow}` : ''}`}>
        <div className={styles.logo}>
          <img src="/logoMarcos.svg" alt="Logo" />
          <div className={styles.logoText}>
            <p className={styles.name}>Marcos Cunha</p>
            <p className={styles.function}>Design Visual Jr</p>
          </div>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          ref={hamburgerRef}
        >
          ☰
        </div>
      </nav>
    </>
  );
}

export default Nav;
