import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Alert } from "../../components/Alert";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Alert title="Alert title">Description</Alert>);

  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});
