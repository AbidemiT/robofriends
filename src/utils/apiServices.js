export const getApi = (api) => {
   return fetch(api)
    .then(res => res.json())
}
