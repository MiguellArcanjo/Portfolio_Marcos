import styles from './card.module.css';

interface CardProps {
    title: string;
    description: string;
    iconSrc: string;
}

export function CardWhite(props: CardProps) {
    return (
        <>
            <div className={styles.containerCardsWhiteSection2}>
                <div className={styles.iconWrapper}>
                  <img src={props.iconSrc} alt="" />
                </div>

                <div className={styles.divider}></div>

                <div className={styles.textContent}>
                  <h1>{props.title}</h1>
                  <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}


export function CardBlue(props: CardProps) {
    return (
        <>
            <div className={styles.containerCardsBlueSection2}>
                <div className={styles.iconWrapper}>
                  <img src={props.iconSrc} alt="" />
                </div>

                <div className={styles.divider}></div>

                <div className={styles.textContent}>
                 <h1>{props.title}</h1>
                  <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}