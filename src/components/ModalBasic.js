import { useEffect, useRef } from "react";
import styles from "./ModalBasic.module.css";

const ModalBasic = ({
  setModalOpen,
  id,
  background,
  release,
  title,
  genres,
  homepage,
  overview,
}) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div ref={modalRef} className={styles.container}>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <img src={background} alt={title} />
      <h2>{title}</h2>
      <p>{release}</p>
      <p>{genres && genres.join(", ")}</p>
      <a href={homepage} target="_blank" rel="noopener noreferrer">
        Homepage
      </a>
      <p>{overview}</p>
    </div>
  );
};

export default ModalBasic;
