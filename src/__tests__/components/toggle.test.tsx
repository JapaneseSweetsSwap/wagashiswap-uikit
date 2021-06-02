import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="md" />);
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});

it("renders correctly scale sm", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="sm" />);
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});
