import { Route ,Routes,BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css"
import axios from "axios";
import Header from "./components/Header";
import OptometryLenskart from "./components/OptometryLenskart";
import Footer from "./components/Footer";
import AllPrograms from "./components/AllPrograms";
import MLTProgram from "./components/MedicalLaboratoryTechnology";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";
import StudentPolicy from "./components/StudentPolicy";
import RefundPolicy from "./components/RefundPolicy";
import PartnerWithUs from "./components/PartnerWithUs";
import HospitalAdministration from "./components/HospitalAdministration";
import OTT from "./components/OperationTheatreTechnology";
import MedicalRadiologyAndImagingTechnology from "./components/MedicalRadiologyAndImagingTechnology";
import OperationTheatreTechnologyEye from "./components/OperationTheatreTechnologyEye-Q";
import Campuses from "./components/Campuses";
import NewsBlog from "./components/News&Blog";


const App = () => {
  
 
return(
  <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/AllPrograms" element={<AllPrograms/>}/>
     <Route path="/OptometryLenskart" element={<OptometryLenskart />} />
      <Route path="/MedicalLaboratoryTechnology" element={<MLTProgram/>}/>
      <Route path="/HospitalAdminitration"element={<HospitalAdministration/>}/>
      <Route path="/OperationTheatreTechnology"element={<OTT/>}/>
       <Route path="/MedicalRadiologyAndImagingTechnology"element={<MedicalRadiologyAndImagingTechnology/>}/>
      <Route path="/OperationTheatreTechnologyEye-Q"element={<OperationTheatreTechnologyEye/>}/>
      <Route path="/Campuses"element={<Campuses/>}/>
      <Route path="/News&Blog"element={<NewsBlog/>}/>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
      <Route path="/TermsCondition"element={<TermsCondition/>}/>
      <Route path="/StudentPolicy"element={<StudentPolicy/>}/>
     <Route path="/RefundPolicy"element={<RefundPolicy/>}/>
      <Route path="/PartnerWithUs"element={<PartnerWithUs/>}/>
     
      <Route path="/" element={<Home/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    
);
}
export default App;

