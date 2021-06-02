import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import { ProgressWagashi } from "../Svg";
import { ProgressProps } from "./types";
import WagashiProgressWrapper from "./WagashiProgressWrapper";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<ProgressProps> = ({ primaryStep = 0, secondaryStep = null, showWagashiProgress = false }) => (
  <StyledProgress>
    {showWagashiProgress && (
      <WagashiProgressWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
        <ProgressWagashi />
      </WagashiProgressWrapper>
    )}
    <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
    {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
  </StyledProgress>
);
export default Progress;
