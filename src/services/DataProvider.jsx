import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState, useContext, createContext } from "react";
import Loader from "../components/Loader/Loader";
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
    <DataContext.Provider value={data}>
      {loading ? <Loader /> : children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default DataProvider;
