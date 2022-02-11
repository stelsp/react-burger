import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";
import { API_URL, URL_KEY_INGREDIENTS } from "../constants/api-url";

export function useData() {
  return useContext(DataContext);
}

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}${URL_KEY_INGREDIENTS}`)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider
      value={{
        loading: loading,
        data: data,
      }}
    >
      {loading ? <h1>Loading...</h1> : <>{children}</>}
    </DataContext.Provider>
  );
}

export default DataProvider;
