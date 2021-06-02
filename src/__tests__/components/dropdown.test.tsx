import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Dropdown from "../../components/Dropdown/Dropdown";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Dropdown target={<div>target</div>} />);
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});
