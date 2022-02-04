import API_URL from "../constants/api-url";

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status + " - " + res.statusText}`);
};

const getApi = (API_URL, KEY) => {
  const promise = fetch(`${API_URL}/${KEY}`).then(checkRes);
  return promise;
};

const postApi = (API_URL, KEY, _id) => {
  const promise = fetch(`${API_URL}/${KEY}`, {
    method: "POST",
    body: JSON.stringify({
      ingredients: _id,
    }),
  }).then(checkRes);
  return promise;
};

export const getIngredients = getApi.bind(null, API_URL, "ingredients");
export const getOrder = postApi.bind(null, API_URL, "order");
