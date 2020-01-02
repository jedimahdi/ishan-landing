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
import CourseList from './pages/course_list/course_list.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contact/contact.component';
import FieldsPage from './pages/fields/fields.component';
import FieldPage from './pages/field/field.component';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

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
  const { settingItems, setSettings } = useContext(SettingsContext);

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
          <Route path="/course" component={CoursePage} />
          <Route path="/courses" component={CourseList} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/fields" component={FieldsPage} />
          <Route path="/field" component={FieldPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
