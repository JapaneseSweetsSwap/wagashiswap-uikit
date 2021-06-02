import React from "react";
import noop from "lodash/noop";
import { renderWithTheme } from "../../testHelpers";
import ConnectModal from "../../widgets/WalletModal/ConnectModal";
import AccountModal from "../../widgets/WalletModal/AccountModal";

it("renders ConnectModal correctly", () => {
  const { asFragment } = renderWithTheme(<ConnectModal login={noop} />);
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});

it("renders AccountModal correctly", () => {
  const { asFragment } = renderWithTheme(
    <AccountModal account="0xb218C5D6aF1F979aC42BC68d98A5A0D796C6aB01" logout={noop} />
  );
  expect(asFragment()).toMatchInlineSnapshot(`
  `);
});
