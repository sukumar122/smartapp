import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("loads Home page on /", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /home/i })
  ).toBeInTheDocument();
});

test("loads About page on /about", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /about/i })
  ).toBeInTheDocument();
});
