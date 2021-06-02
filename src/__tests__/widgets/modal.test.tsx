import React from "react";
import noop from "lodash/noop";
import { renderWithTheme } from "../../testHelpers";
import { Modal } from "../../widgets/Modal";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <Modal title="Title" onDismiss={noop}>
      body
    </Modal>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});
