const apiUrl =
  process.env.NODE_ENV === "production"
    ? "http://localhost:5000/api"
    : "http://localhost:5000/api";

const fetchWrapper = (url, method = "GET", body = {}) => {
  const completeUrl = `${apiUrl}/${url}`;
  const options = { method, headers: { "content-type": "application/json" } };
  if (Object.keys(body).length) options.body = JSON.stringify(body);
  return fetch(completeUrl, options).then((data) =>
    data.status === 204 ? true : data.json()
  );
};
export const get = (url) => fetchWrapper(url);
export const post = (url, body) => fetchWrapper(url, "POST", body);
export const put = (url, body) => fetchWrapper(url, "PUT", body);
export const del = (url) => fetchWrapper(url, "DELETE");
