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
      <h2 className={styles.modal_title}>{title}</h2>
      <p className={styles.modal_release}>{release}</p>
      <ul className={styles.detail_movie_ul}>
        {genres.slice(0, 4).map((g) => (
          <li className={styles.detail_movie_li} key={g.id}>
            {g.name},
          </li>
        ))}
      </ul>{" "}
      <a
        className={styles.detail_movie_link}
        href={homepage}
        target="_blank"
        rel="noreferrer"
      >
        {homepage === "" ? <p></p> : <p>公式ホームページ</p>}
      </a>
      <p>{overview}</p>
    </div>
  );
};

export default ModalBasic;
