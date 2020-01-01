import React from 'react';

import Header from '../../components/homepage/header/header.component';
import Comments from '../../components/homepage/comments/comments.component';
import Services from '../../components/homepage/services/services.component';
import Videorow from '../../components/homepage/videorow/videorow.component';
import Articles from '../../components/homepage/articles/articles.component';
import Teachers from '../../components/homepage/teachers/teachers.component';
import Gallery from '../../components/homepage/gallery/gallery.component';
import Rsvp from '../../components/homepage/rsvp/rsvp.component';
import Events from '../../components/homepage/events/events.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="clearfix" />
    <Header />
    <Comments />
    <Services />
    <Videorow />
    <Articles />
    <Teachers />
    {/* <Gallery /> */}
    <Rsvp />
    {/* <Events /> */}
  </div>
);

export default HomePage;
