import "../styles/CatsStyle.css";
import { useCallback, useEffect, useState } from "react";
import { CatReponse, getAllCats } from "../services/CatsService";
import Cat from "../models/CatModel";
import { CatCardComponent } from "./CatCardComponent";
import { CatImageComponent } from "./CatImageComponent";

export const CatsComponent = ({ catsPerPage, page }: CatReponse) => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCats = async () => {
      const cats = await getAllCats({
        catsPerPage,
        page,
      });
      setCats(cats);
      return cats;
    };
    getCats();
    setIsLoading(true);
  }, [catsPerPage, page]);

  const onChangeRefresh = useCallback(() => {
    setIsLoading(false);
    const getCats = async () => {
      const cats = await getAllCats({
        catsPerPage,
        page,
      });
      setCats(cats);
    };
    getCats();
    setIsLoading(true);
  }, [cats]);

  return (
    <>
        <CatCardComponent key={0} onChange={onChangeRefresh}>
          {cats.map((cat) => {
            return isLoading ? <CatImageComponent key={cat.id} url={cat.url} /> : <h2>Loading ...</h2>;
          })}
        </CatCardComponent>
    </>
  );
};
