export const searchImagesBy = (query) => {
  const queryParams = new URLSearchParams({ query }).toString();

  return fetch("https:/api.unsplash.com/search/photos?" + queryParams, {
    method: "GET",
    headers: {
      Authorization: "Client-ID DuTd-A9yBX1yZ-iyyoGep8vN-b37Tg0Zyj64LVhoTI8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Bad response", response.status);
      }

      return response.json();
    })
    .catch((error) => console.log(error));
};
