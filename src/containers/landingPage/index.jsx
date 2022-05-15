import React from "react";
import Header from "./header";
import WhatMukozi from "./whatMukozi";
import Features from "./features";
import Possibility from "./possibility";
import { Brand, CTA } from "components";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Brand />
      <WhatMukozi />
      <Features />
      <Possibility />
      <CTA />
    </div>
  );
};

export default LandingPage;
