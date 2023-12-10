import { HttpResponse, http } from "msw";

const baseUrl = "http://localhost/api";

export const villainsFixture = [
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

export const villainHandler = [
  http.get(`${baseUrl}/villains`, () => {
    return HttpResponse.json(villainsFixture);
  }),

  http.delete(`${baseUrl}/villains/:id`, ({ params }) => {
    const exist = villainsFixture.find((h) => h.id === params.id);
    return new HttpResponse(null, { status: exist ? 200 : 404 });
  }),
];
