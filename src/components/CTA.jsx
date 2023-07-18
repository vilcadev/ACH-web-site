import styles from "../style";

import ButtonContact from "./ButtonContact";

const CTA = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Escríbenos!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Contrátanos no cobramos muy caro, $80 la consulta, $300 si quieres un meet y foto con el equipo.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ButtonContact />
    </div>
  </section>
);

export default CTA;
