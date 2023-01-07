import { rest } from "msw";

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
  rest.get(`${baseUrl}/villains`, (req, res, ctx) => {
    return res(ctx.json(villainsFixture));
  }),

  rest.delete(`${baseUrl}/villains/:id`, (req, res, ctx) => {
    return villainsFixture.find((h) => h.id === req.params.id)
      ? res(ctx.status(200))
      : res(ctx.status(404));
  }),
];
