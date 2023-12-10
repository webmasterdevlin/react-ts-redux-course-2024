import { HttpResponse, http } from "msw";

const baseUrl = "http://localhost/api";

export const heroesFixture = [
  {
    id: "7ggew732dw",
    firstName: "Barry",
    lastName: "Allen",
    house: "DC",
    knownAs: "Flash",
  },
  {
    id: "1ggew732dw",
    firstName: "Scott",
    lastName: "Summer",
    house: "Marvel",
    knownAs: "Cyclopes",
  },
];

export const heroHandler = [
  http.get(`${baseUrl}/heroes`, () => {
    return HttpResponse.json(heroesFixture);
  }),

  http.delete(`${baseUrl}/heroes/:id`, ({ params }) => {
    const exist = heroesFixture.find((h) => h.id === params.id);
    return new HttpResponse(null, { status: exist ? 200 : 404 });
  }),
];
