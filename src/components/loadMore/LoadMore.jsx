import { useDispatch } from "react-redux";
import { loadMoreImages } from "../../react-redux/images.reducer";
import style from "./loadMore.module.css";

const LoadMore = () => {
  const dispatch = useDispatch();

  const onHandleLoad = () => {
    dispatch(loadMoreImages());
  };

  return (
    <div className={style.loadMoreWrapper}>
      <button className={style.loadMore} onClick={onHandleLoad}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
