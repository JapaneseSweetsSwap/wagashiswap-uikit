import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 32 32" {...props}>
       <path d="M8.671,23.454a5.044,5.044,0,0,1-1.327.2,4.969,4.969,0,0,1-4.8-6.324,4.955,4.955,0,0,1,0-8.661A4.954,4.954,0,0,1,8.67,2.547a4.955,4.955,0,0,1,8.661,0A4.954,4.954,0,0,1,23.453,8.67a4.954,4.954,0,0,1,0,8.659,4.931,4.931,0,0,1-6.124,6.125,4.954,4.954,0,0,1-8.66,0Z"/>

  </Svg>
);

export default Icon;
