import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const urlDestino = 'https://www.youtube.com/shorts/A5bJ3AmZTY4'; // URL a la que deseas redirigir

  return (
    <a href={urlDestino} target="_blank" rel="noopener noreferrer">
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className="text-gradient">Ver</span>
            </p>
            <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
          </div>
          
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Proyectos</span>
          </p>
        </div>
      </div>
    </a>
  );
}

export default GetStarted;
