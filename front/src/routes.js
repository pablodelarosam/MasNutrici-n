import React from "react";

import {Route, IndexRoute} from 'react-router';

// auth containers
import Home from "./home/components/Home.js";
import Login from "./login/components/Login.js";
import SignIn from "./authentication/components/Signin.js";

import DashMainPatient from "./dashboard_patient/components/DashMain.js";
import Status from "./dashboard_patient/components/Status.js";
import Patients from "./dashboard_doctor/components/Patients.js";
import ProfilePatient from "./dashboard_patient/components/Profile.js";
import DietsPatient from "./dashboard_patient/components/DietsPatient.js";
import DashMainDoctor from "./dashboard_doctor/components/DashMainDoctor.js";
import DietsDoctor from "./dashboard_doctor/components/DietsDoctor.js";
import TimeTablePatient from "./dashboard_patient/components/TimeTable.js";
import TimeTableDoctor from "./dashboard_doctor/components/TimeTable.js";
import DietDetails from "./dashboard_doctor/components/DietsDetails.js";

import AppK from "./App.js"

export const getRoutes = (store) =>
<Route path="/" component={AppK}>
  {/* AUTH */}
  <IndexRoute component={Home}/>
  <Route path="/login" component={Login}></Route>
  <Route path="/signin" component={SignIn}></Route>

  <Route path="/dashboard/paciente" component={DashMainPatient} onEnter={requireAuth}>
    <IndexRoute component={ProfilePatient}/>
    <Route path="perfil" component={ProfilePatient}/>
    <Route path="dietas" component={DietsPatient}/>
    <Route path="estatus" component={Status}/>
    <Route path="timetable" component={TimeTablePatient}/>
  </Route>

  <Route path="/dashboard/doctor" component={DashMainDoctor} onEnter={requireAuth}>
  <IndexRoute component={Patients}/>
    <Route path="pacientes" component={Patients}/>
    <Route path="dietas" component={DietsDoctor} />
    <Route path="timetable" component={TimeTableDoctor}/>
    <Route path="detalles/:id" component={DietDetails}/>

  </Route>

</Route>

function requireAuth(nextState, replace) {
  if (!sessionStorage["user"]) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
