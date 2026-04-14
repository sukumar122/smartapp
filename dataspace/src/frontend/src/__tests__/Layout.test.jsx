import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";

test("Layout renders outlet content", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Test Child</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Child")).toBeInTheDocument();
});
