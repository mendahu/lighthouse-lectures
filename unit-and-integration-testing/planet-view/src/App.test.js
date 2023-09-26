import React from "react";
import { render, waitForElement } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should show Loading text on initial render, and then fetch data", () => {
    const { queryByText, getAllByRole } = render(<App />);

    expect(queryByText("Loading...")).not.toBe(null);

    return waitForElement(() => {
      return getAllByRole("article");
    }).then(() => {
      expect(getAllByRole("article")).toHaveLength(2);
    });
  });
});
