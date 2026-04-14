import apiClient from "../client";

test("API client baseURL is set correctly", () => {
  expect(apiClient.defaults.baseURL).toBe("http://localhost:8000");
});

test("API client has JSON headers", () => {
  expect(apiClient.defaults.headers["Content-Type"]).toBe(
    "application/json"
  );
});
