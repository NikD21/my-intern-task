import { useDispatch, useSelector } from "react-redux";
import { requestNewCategoryImages } from "../../react-redux/images.reducer";
import style from "./catCategories.module.css";

function CatCategories() {
  const categories = useSelector((state) => state.catCategories.categories);

  const dispatch = useDispatch();

  const onHandleSelect = (categoryId) => {
    dispatch(requestNewCategoryImages(categoryId));
  };

  return (
    <div className={style.categories}>
      {categories?.map((c) => (
        <button
          className={style.categoryButton}
          onClick={() => onHandleSelect(c.id)}
          key={c.id}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}

export default CatCategories