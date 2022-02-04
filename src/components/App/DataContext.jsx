import React, { useState, useContext, useEffect } from "react";
import { getIngredients } from "../../utils/utils";

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getIngredients()
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </>
  );
}
