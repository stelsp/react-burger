import style from "./BurgerConstructor.module.css";
import { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { useData } from "../../services/DataProvider";
import Checkout from "./Checkout/Checkout";

function BurgerConstructor() {
  const data = useData();
  const bun = data.find((el) => el.type === "bun");
  const main = data.filter((el) => el.type !== "bun").slice(6, 12);

  const IngredientsIDs = useMemo(() => {
    return [...main.map((el) => el._id), bun._id];
  }, [data]);

  const IngredientsPrice = useMemo(() => {
    const mainPrice = main.reduce((sum, el) => sum + el.price, 0);
    const bunPrice = bun.price;
    const price = mainPrice + bunPrice * 2;
    return price;
  }, [data]);

  return (
    <section className={style.container}>
      <div className={"mt-25 mb-10"}>
        <div className={style.item + " mb-4 ml-4 mr-4 pl-8"}>
          <ConstructorElement
            type={"top"}
            isLocked={true}
            text={`${bun.name} (верх)`}
            thumbnail={bun.image}
            price={bun.price}
          />
        </div>

        <ul className={style.list}>
          {main.map((el) => {
            return (
              <li key={el._id} className={style.item + " mb-4 ml-4 mr-1"}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={el.name}
                  thumbnail={el.image}
                  price={el.price}
                />
              </li>
            );
          })}
        </ul>
        <div className={style.item + " mt-4 ml-4 mr-4 pl-8"}>
          <ConstructorElement
            type={"bottom"}
            isLocked={true}
            text={`${bun.name} (низ)`}
            thumbnail={bun.image}
            price={bun.price}
          />
        </div>
      </div>
      <Checkout
        ingredientsIDs={IngredientsIDs}
        ingredientsPrice={IngredientsPrice}
      />
    </section>
  );
}

export default BurgerConstructor;
