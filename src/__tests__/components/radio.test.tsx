import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Radio from "../../components/Radio/Radio";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Radio name="radio" value="1" />);
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});
