export interface CatReponse {
  catsPerPage: number;
  page: number;
}

export const getAllCats = async ({ catsPerPage, page }: CatReponse) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${catsPerPage}&page=${page}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      redirect: "follow",
    }
  );

  return response.json();
};
