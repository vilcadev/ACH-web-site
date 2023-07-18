import { project1 } from "../assets";
import styles, { layout } from "../style";

import { apple, google } from "../assets";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        AppLock Sumadi <br className="sm:block hidden" /> la 
        herramienta que tu necesitas.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Facil de instalar y muy seguro, si te atrapan RIP.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={project1} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
