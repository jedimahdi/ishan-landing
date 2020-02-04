import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import api from './utils/api';

import { SettingsContext } from './providers/settings/settings.provider';

import './App.css';
import './assets/css/style.css';
import './assets/css/owlcarousel/owl.carousel.min.css';
import './assets/css/owlcarousel/owl.theme.default.min.css';

import HomePage from './pages/homepage/homepage.component';
import CoursePage from './pages/course/course.component';
import CourseListPage from './pages/course_list/course_list.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contact/contact.component';
import TermsPage from './pages/terms/terms.component';
import InstructorsPage from './pages/instructors/instructors.component';
import SingleInstructorPage from './pages/instructors/single_instructor.component';
import LearningProcessPage from './pages/other/learning_process.component';
import InternshipPage from './pages/other/internship.component';
import LaborPage from './pages/other/labor.component';
import TechServicesPage from './pages/other/tech_services.component';
import MentorPage from './pages/other/mentor.component';
import SharedworkspacePage from './pages/other/shared_workspace.component';
import EnrollPage from './pages/other/enroll.component';
import FeePage from './pages/other/fee.component';
import EducationPage from './pages/other/education.component';
import FaqPage from './pages/other/faq.component';
import AcceleratorPage from './pages/other/accelerator.component';

import FieldsPage from './pages/fields/fields.component';
import FieldPage from './pages/field/field.component';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import SpeakAdviser from './pages/other/speak_to_adviser.component';
import AdviserCourse from './pages/other/adviser_in_course.component';
import SupportAndServices from './pages/other/support_services.component';
import SeminarPage from './pages/other/seminar.component';

function normalizeSettings(settings) {
  const t = settings.map(setting => {
    return { [setting.key]: setting.value };
  });
  let a = {};
  t.forEach(item => {
    a = { ...a, ...item };
  });
  return a;
}

function App() {
  const [isLoading, setLoading] = useState(true);
  const { setSettings } = useContext(SettingsContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('settings');
      const settings = normalizeSettings(res.data);
      setSettings(settings);
      setLoading(false);
      console.log(settings);
    };
    fetchData();
    // setLoading(false);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/course/:course_id" component={CoursePage} />
          <Route path="/courses" component={CourseListPage} />
          <Route path="/about" component={AboutPage} />

          <Route path="/contact" component={ContactPage} />
          <Route path="/terms" component={TermsPage} />
          <Route
            path="/instructors/:instructor_id"
            component={SingleInstructorPage}
          />
          <Route path="/instructors" component={InstructorsPage} />
          <Route path="/learning_process" component={LearningProcessPage} />
          <Route path="/internship" component={InternshipPage} />
          <Route path="/labor" component={LaborPage} />
          <Route path="/technical_services" component={TechServicesPage} />
          <Route path="/mentoring" component={MentorPage} />
          <Route path="/shared_workspace" component={SharedworkspacePage} />
          <Route path="/enroll" component={EnrollPage} />
          <Route path="/fee" component={FeePage} />
          <Route path="/education" component={EducationPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/accelerator" component={AcceleratorPage} />
          <Route path="/speak-to-adviser" component={SpeakAdviser} />
          <Route path="/adviser-in-course" component={AdviserCourse} />
          <Route path="/support-and-services" component={SupportAndServices} />
          <Route path="/seminar" component={SeminarPage} />

          <Route path="/fields" component={FieldsPage} />
          <Route path="/field/:field_id" component={FieldPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
