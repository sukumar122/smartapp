import { describe, test, expect } from "vitest";

describe("Environment Variables", () => {
  test("VITE_API_URL is defined", () => {
  expect(import.meta.env.VITE_API_URL).toBeDefined();
});
});
