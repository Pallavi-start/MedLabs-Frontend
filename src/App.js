import { Route ,Routes,BrowserRouter } from "react-router-dom";

import "./App.css"

import Header from "./components/Header";
// import OptometryLenskart from "./components/OptometryLenskart";
import PharmaBusinessAnalytics from "./components/PharmaBusinessAnalytics";
import Footer from "./components/Footer";
import AllPrograms from "./components/AllPrograms";
import MLTProgram from "./components/MedicalLaboratoryTechnology";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";
import StudentPolicy from "./components/StudentPolicy";
import RefundPolicy from "./components/RefundPolicy";
// import PartnerWithUs from "./components/PartnerWithUs";
import HospitalAdministration from "./components/HospitalAdministration";
// import OTT from "./components/OperationTheatreTechnology";
import MedicalRadiologyAndImagingTechnology from "./components/MedicalRadiologyAndImagingTechnology";
// import OperationTheatreTechnologyEye from "./components/OperationTheatreTechnologyEye-Q";
import Campuses from "./components/Campuses";
import NewsBlog from "./components/News&Blog";
import CompetitiveIntelligence from "./components/ForecasstifyCompetitiveIntelligenceProgram";
import HEORProgram from "./components/HEORProgram";
import PharmaForecasting from "./components/PharmaForecastingTrainingProgram";
import AIHealthcareTraining from "./components/AIInHealthcareTrainingProgram";
import CommercialAnalyticsTraining from "./components/CommericialAnalytics";
import BreakingIntoPharmaAnalytics from "./components/BreakingIntoPharmaAnalytics";
import PharmacovigilanceBlog from "./components/PharmacovigilanceBlog";
import HEORBlog from "./components/HEORBlog";
import RegulatoryAffairsPage from "./components/RegulatoryAffairsPage";
import PharmaForecastingPage from "./components/PharmaForecastingPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  
 
return(
  <BrowserRouter>
   <ScrollToTop />
    <Header />
      <Routes>
      <Route path="/AllPrograms" element={<AllPrograms/>}/>
     {/* <Route path="/OptometryLenskart" element={<OptometryLenskart />} /> */}
     <Route path="/AIInHealthcareTrainingProgram" element={<AIHealthcareTraining/>}/>
      <Route path="/PharmaBusinessAnalytics" element={<PharmaBusinessAnalytics/>}/>
      <Route path="/ForecassitifyCompetitiveIntelligenceProgram" element={<CompetitiveIntelligence/>}/>
      <Route path="/HEORProgram" element={<HEORProgram/>}/>
      <Route path="/PharmaForecastingTrainingProgram" element={<PharmaForecasting />} />
      <Route path="/CommericialAnalytics"element={<CommercialAnalyticsTraining/>}/>
      <Route path="/MedicalLaboratoryTechnology" element={<MLTProgram/>}/>
      <Route path="/HospitalAdminitration"element={<HospitalAdministration/>}/>
      {/* <Route path="/OperationTheatreTechnology"element={<OTT/>}/> */}
       <Route path="/MedicalRadiologyAndImagingTechnology"element={<MedicalRadiologyAndImagingTechnology/>}/>
      {/* <Route path="/OperationTheatreTechnologyEye-Q"element={<OperationTheatreTechnologyEye/>}/> */}
      <Route path="/Campuses"element={<Campuses/>}/>
      <Route path="/News&Blog"element={<NewsBlog/>}/>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
      <Route path="/TermsCondition"element={<TermsCondition/>}/>
      <Route path="/StudentPolicy"element={<StudentPolicy/>}/>
     <Route path="/RefundPolicy"element={<RefundPolicy/>}/>
      {/* <Route path="/PartnerWithUs"element={<PartnerWithUs/>}/> */}
     <Route path="/BreakingIntoPharmaAnalytics" element={<BreakingIntoPharmaAnalytics/>}/>
     <Route path="/PharmacovigilanceBlog" element={<PharmacovigilanceBlog/>}/>
     <Route path="/HEORBlog" element={<HEORBlog/>}/>
     <Route path="/RegulatoryAffairsPage" element={<RegulatoryAffairsPage/>}/>
     <Route path="/PharmaForecastingPage" element={<PharmaForecastingPage/>}/>
     <Route path="/" element={<Home/>}/>
     

    </Routes>
     <Footer/>
    </BrowserRouter>
    
);
}
export default App;

