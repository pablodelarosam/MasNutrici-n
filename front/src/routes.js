import React from "react";

import {Route, IndexRoute} from 'react-router';

// auth containers
import Home from "./home/components/Home.js";
import Login from "./login/components/Login.js";
import SignIn from "./authentication/components/Signin.js";

import DashMainPatient from "./dashboard_patient/components/DashMain.js";
import NewsFeedStudent from "./dashboard_patient/components/NewsFeed.js";
import TimeTableStudent from "./dashboard_patient/components/TimeTable.js";
import ProfileStudent from "./dashboard_patient/components/Profile.js";
import CourseStudent from "./dashboard_patient/components/Course.js";
import StatusPatient from './dashboard_patient/components/StatusPatient.js'

import DashMainTutor from "./dashboard_tutor/components/DashMainTutor.js";
import DashboardTutor from "./dashboard_tutor/components/DashboardTutor.js";
import ProfileTutor from "./dashboard_tutor/components/ProfileTutor.js";
import PaymentsTutor from "./dashboard_tutor/components/PaymentsTutor.js";
import SessionTutor from "./dashboard_tutor/components/SessionTutor.js";

import AppK from "./App.js"

export const getRoutes = (store) =>
<Route path="/" component={AppK}>
  {/* AUTH */}
  <IndexRoute component={Home}/>
  <Route path="/login" component={Login}></Route>
  <Route path="/signin" component={SignIn}></Route>

  <Route path="/dashboard/patient" component={DashMainPatient}>
    <IndexRoute component={NewsFeedStudent}/>
    <Route path="newsfeed" component={NewsFeedStudent}/>
    <Route path="profile" component={ProfileStudent}/>
    <Route path="time" component={TimeTableStudent}/>
    <Route path="course" component={CourseStudent}/>
    <Route path="status" component={StatusPatient}/>
  </Route>

  <Route path="/dashboard/tutor" component={DashMainTutor}>
  <IndexRoute component={NewsFeedStudent}/>
  <Route path="newsfeed" component={NewsFeedStudent}/>
    <Route path="profile" component={ProfileTutor} />
    <Route path="payments" component={PaymentsTutor} />
    <Route path="sessions" component={SessionTutor} />
    <Route path="courses" component={CourseStudent} />
    <Route path="time" component={TimeTableStudent} />
  </Route>

</Route>
