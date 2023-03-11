import { useSelector } from "react-redux";
import style from "./catImages.module.css";

const CatImages = () => {
  const images = useSelector((state) => state.catImages.images);

  return (
    <div className={style.images}>
      {images.map((i) => (
        <img className={style.img} key={i.img} src={i.url} />
      ))}
    </div>
  );
};

export default CatImages;
