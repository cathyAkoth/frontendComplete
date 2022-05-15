import React from "react";
import { Routes, Route } from "react-router-dom";
import { RegisterLoginBox, SelectRole } from "containers";
import { PrivacyPolicy, TermsOfService } from "components/contract";

const RegisterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectRole />} />
      <Route path="candidate" element={<RegisterLoginBox />} />
      <Route path="terms" element={<TermsOfService />} />
      <Route path="privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default RegisterRoutes;
