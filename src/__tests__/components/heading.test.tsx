import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Heading from "../../components/Heading/Heading";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Heading>Title</Heading>);
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});
