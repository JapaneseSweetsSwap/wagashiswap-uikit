import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Link, LinkExternal } from "../../components/Link";

it("renders link correctly", () => {
  const { asFragment } = renderWithTheme(<Link href="https://wagashiswap.com">Link</Link>);
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});

it("renders link external link correctly", () => {
  const { asFragment } = renderWithTheme(<LinkExternal href="https://wagashiswap.com">Link</LinkExternal>);
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});
