import React from "react";
import Navbar from "./assets/Screens/Website/Navbar";
import Index from "./assets/Screens/Website/Index";
import Footer from "./assets/Screens/Website/Footer";
import About from "./assets/Screens/Website/About";
import Contact from "./assets/Screens/Website/Contact";
import { Route, Routes } from "react-router-dom";
import Agent_details from "./assets/Screens/Admin/Agent_details";
import EditAgent from "./assets/Screens/Admin/EditAgent";
import Branch_details from "./assets/Screens/Admin/Branch_details";
import ViewBranch from "./assets/Screens/Admin/ViewBranch";
import Editbranch from "./assets/Screens/Admin/Editbranch";
import CoureierTypes from "./assets/Screens/Admin/CoureierTypes";
import Login from "./assets/Screens/Admin/components/Login";
import UserProfile from "./assets/Screens/Admin/UserProfile";
import Dashbraod from "./assets/Screens/Admin/Dashbraod";
import AdminDetails from "./assets/Screens/Admin/AdminDetails";
import CompaniesDetails from "./assets/Screens/Admin/CompaniesDetails";
import EditCompany from "./assets/Screens/Admin/EditCompany";
import ViewCompany from "./assets/Screens/Admin/ViewCompany";
import CourierDetails from "./assets/Screens/Admin/CourierDetails";
import Pracel from "./assets/Screens/Admin/Pracel";
import ViewCouier from "./assets/Screens/Admin/ViewCouier";
import Agent_login from "./assets/Screens/Agent/Agent_login";
import AgentLayout from "./assets/Screens/Agent/AgentLayout";
import Agent_dashboard from "./assets/Screens/Agent/Agent_dashboard";
import Agent_couerier from "./assets/Screens/Agent/Agent_couerier";
import Agent_AddCouerier from "./assets/Screens/Agent/Agent_AddCouerier";
import ViewAgentCouerier from "./assets/Screens/Agent/ViewAgentCouerier";
import AgentProfile from "./assets/Screens/Agent/AgentProfile";
import EditCoueier from "./assets/Screens/Admin/EditCoueier";
import ContactDetail from "./assets/Screens/Admin/ContactDetail";
import BlockAgent from "./assets/Screens/Agent/BlockAgent";
import Faq from "./assets/Screens/Website/Faq";
import UserLogin from "./assets/Screens/Website/UserLogin";
import Userreg from "./assets/Screens/Website/Userreg";
import UserData from "./assets/Screens/Website/UserData";
import UserDetailsAdmin from "./assets/Screens/Admin/UserDetailsAdmin";
import AddCouerier from "./assets/Screens/Website/AddCouerier";
import TrackCouerier from "./assets/Screens/Website/TrackCouerier";
import Forgetpassword from "./assets/Screens/Website/Forgetpassword";

const App = () => {
  const LoginedUser = JSON.parse(window.localStorage.getItem("userData"));
  return (
    <div>
      <Routes>
        <Route
          path={"/admin"}
          element={
            LoginedUser ? <AdminDetails></AdminDetails> : <Login></Login>
          }
        ></Route>
        <Route
          path={"/companies"}
          element={
            LoginedUser ? (
              <CompaniesDetails></CompaniesDetails>
            ) : (
              <Login></Login>
            )
          }
        ></Route>
        <Route
          path={"/Index"}
          element={LoginedUser ? <Dashbraod></Dashbraod> : <Login></Login>}
        ></Route>
        <Route path={"/"} element={<Index></Index>}></Route>
        <Route path={"/Home"} element={<Index></Index>}></Route>
        <Route path={"/About"} element={<About></About>}></Route>
        <Route path={"/Contact"} element={<Contact></Contact>}></Route>
        <Route
          path={"/agent"}
          element={
            LoginedUser ? <Agent_details></Agent_details> : <Login></Login>
          }
        ></Route>
        <Route
          path={"/branch"}
          element={
            LoginedUser ? <Branch_details></Branch_details> : <Login></Login>
          }
        ></Route>
        <Route
          path={"/pracel"}
          element={LoginedUser ? <Pracel></Pracel> : <Login></Login>}
        ></Route>
        <Route
          path={"/editagent/:id"}
          element={LoginedUser ? <EditAgent></EditAgent> : <Login></Login>}
        ></Route>
        <Route
          path={"/view_branch/:id"}
          element={LoginedUser ? <ViewBranch></ViewBranch> : <Login></Login>}
        ></Route>
        <Route
          path={"/edit_branch/:id"}
          element={LoginedUser ? <Editbranch></Editbranch> : <Login></Login>}
        ></Route>
        <Route
          path={"/edit_company/:id"}
          element={LoginedUser ? <EditCompany></EditCompany> : <Login></Login>}
        ></Route>
        <Route
          path={"/view_company/:id"}
          element={LoginedUser ? <ViewCompany></ViewCompany> : <Login></Login>}
        ></Route>
        <Route
          path={"/couerier"}
          element={
            LoginedUser ? <CourierDetails></CourierDetails> : <Login></Login>
          }
        ></Route>
        <Route
          path={"/couerierType"}
          element={
            LoginedUser ? <CoureierTypes></CoureierTypes> : <Login></Login>
          }
        ></Route>
        <Route path={"/Login"} element={<Login></Login>}></Route>
        <Route
          path={"/LoginAgent"}
          element={<Agent_login></Agent_login>}
        ></Route>
        <Route
          path={"/Agentlayout"}
          element={<AgentLayout></AgentLayout>}
        ></Route>
        <Route
          path={"/user/:id"}
          element={LoginedUser ? <UserProfile></UserProfile> : <Login></Login>}
        ></Route>
        <Route
          path={"/viewParcel/:id"}
          element={LoginedUser ? <ViewCouier></ViewCouier> : <Login></Login>}
        ></Route>
        <Route
          path={"/EditParcel/:id"}
          element={<EditCoueier></EditCoueier>}
        ></Route>
        <Route
          path={"/fetchContact"}
          element={<ContactDetail></ContactDetail>}
        ></Route>
        <Route
          path={"/Agent_dashboard"}
          element={
            LoginedUser ? <Agent_dashboard></Agent_dashboard> : <Login></Login>
          }
        ></Route>
        <Route
          path={"/Agent_Couerier"}
          element={<Agent_couerier></Agent_couerier>}
        ></Route>
        <Route
          path={"/Agent_addCouerier"}
          element={<Agent_AddCouerier></Agent_AddCouerier>}
        ></Route>
        <Route  path={"/Agent_viewCouerier/:id"} element={<ViewAgentCouerier></ViewAgentCouerier>}
        ></Route>
        <Route
          path={"/Agent_profile/:id"}
          element={<AgentProfile></AgentProfile>}
        ></Route>
        <Route path={"/blockagent"} element={<BlockAgent></BlockAgent>}></Route>
        <Route path={"/faq"} element={<Faq></Faq>}></Route>
        <Route path={"/userLogin"} element={ LoginedUser ?  <Index></Index>:<UserLogin></UserLogin>}></Route>
        <Route path={"/userreg"} element={<Userreg></Userreg>}></Route>
        userprofile
        <Route
          path={"/userprofile/:id"}
          element={<UserData></UserData>}
        ></Route>
          <Route
          path={"/addCouerier"}
          element={LoginedUser ?<AddCouerier></AddCouerier>:<UserLogin></UserLogin>}
        ></Route>
        <Route
          path={"/user_data"}
          element={<UserDetailsAdmin></UserDetailsAdmin>}
        ></Route>

 <Route
          path={"/TrackCouerier"}
          element={<TrackCouerier></TrackCouerier>}
        ></Route>
         <Route
          path={"/forgetPw"}
          element={<Forgetpassword></Forgetpassword>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
