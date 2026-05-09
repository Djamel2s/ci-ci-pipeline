import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders message from backend", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          message: "Hello from the backend! the secret value is test",
        }),
    }),
  );

  render(<App />);

  const message = await screen.findByText(/Hello from the backend/i);
  expect(message).toBeInTheDocument();

  global.fetch.mockClear();
});
