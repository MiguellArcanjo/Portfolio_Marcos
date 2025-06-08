import { useRef, useState } from "react";
import styles from "./card.module.css";

type CardProps = {
  iconSrc: string;
  title: string;
  description: string;
};

export function CardWhite({ iconSrc, title, description }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    setIsHovering(true);
  };

  return (
    <div
      ref={ref}
      className={`${styles.containerCardsWhiteSection2} ${isHovering ? styles.hovered : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
      style={
        isHovering
          ? {
              "--mouse-x": `${mousePos.x}px`,
              "--mouse-y": `${mousePos.y}px`,
            } as React.CSSProperties
          : undefined
      }
    >
      <div className={styles.iconWrapper}>
        <img src={iconSrc} alt={title} />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.textContent}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}


export function CardBlue(props: CardProps) {

    const ref = useRef<HTMLDivElement>(null);
    const [border, setBorder] = useState("2px solid transparent");

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const distToEdge = 40;

        const nearEdge = (
        x < distToEdge || x > rect.width - distToEdge ||
        y < distToEdge || y > rect.height - distToEdge
        );

        setBorder(nearEdge ? "2px solid #00BFFF" : "2px solid transparent");
    }


    return (
         <div
            className={styles.containerCardsBlueSection2}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setBorder("2px solid transparent")}
            style={{ border }}
        >
            <div className={styles.iconWrapper}>
                <img src={props.iconSrc} alt={props.title} />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.textContent}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}