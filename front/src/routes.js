import React from "react";

import {Route, IndexRoute} from 'react-router';

// auth containers
import Home from "./home/components/Home.js";
import Login from "./login/components/Login.js";
import SignIn from "./authentication/components/Signin.js";
import DashMainStudent from "./dashboard_student/components/DashMain.js";
import DashStudentExplore from "./dashboard_student/components/DashExplore.js";
import DashboardExplore from "./dashboard_student/components/DashboardExplore.js";
import DashboardStudent from "./dashboard_student/components/Dashboard.js";
import NewsFeedStudent from "./dashboard_student/components/NewsFeed.js";
import TimeTableStudent from "./dashboard_student/components/TimeTable.js";
import ProfileStudent from "./dashboard_student/components/Profile.js";
import CourseStudent from "./dashboard_student/components/Course.js";
import ClassInfo from "./dashboard_student/components/ClassInfo.js";
import DashMainTutor from "./dashboard_tutor/components/DashMainTutor.js";
import DashboardTutor from "./dashboard_tutor/components/DashboardTutor.js";
import ProfileTutor from "./dashboard_tutor/components/ProfileTutor.js";
import PaymentsTutor from "./dashboard_tutor/components/PaymentsTutor.js";
import SessionTutor from "./dashboard_tutor/components/SessionTutor.js";

import AppK from "./App.js"

export const getRoutes = (store) => <Route path="/" component={AppK}>
  {/* AUTH */}
  <IndexRoute component={Home}/>
  <Route path="/login" component={Login}></Route>
  <Route path="/signin" component={SignIn}></Route>
  <Route path="/dashboard/student" component={DashMainStudent}>
    <IndexRoute component={NewsFeedStudent}/>
    <Route path="newsfeed" component={NewsFeedStudent}/>
    <Route path="profile" component={ProfileStudent}/>
    <Route path="time" component={TimeTableStudent}/>
    <Route path="course" component={CourseStudent}/>
    <Route path="explore" component={DashStudentExplore}/>
  </Route>
  <Route path="/dashboard/student_explore" component={DashStudentExplore}>
    <IndexRoute component={DashboardExplore}/>
    <Route path="details" component={ClassInfo}/>
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
