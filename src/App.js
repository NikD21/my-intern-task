import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import CatCategories from "./components/catCategories/CatCategories";
import CatImages from "./components/catImages/CatImages";
import LoadMore from "./components/loadMore/LoadMore";
import { requestCategories } from "./react-redux/categories.reducer";
import { requestImages } from "./react-redux/images.reducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestImages());
    dispatch(requestCategories());
  }, []);

  return (
    <>
      <div className="App">
        <h1>Cats...</h1>
        <CatCategories />
        <CatImages />
      </div>
      <LoadMore />
    </>
  );
}

export default App;
