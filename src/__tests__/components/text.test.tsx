import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Text from "../../components/Text/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>wagashi</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});
