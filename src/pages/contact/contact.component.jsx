import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/sidebar/sidebar.component';
import Header from '../../components/homepage/header/header.component';

const ContactPage = () => {
  return (
    <React.Fragment>
      <Header
        media="https://www.gnomon.edu/assets/visit/bg-contact-b5f08cfae09db46fe78e617313412e414ea49fec3c4bfaa078f93e1c64a43202.jpg"
        small
      />
      <section id="contact" className="text-right text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="row">
            <Sidebar title="مشاهده کنید">
              <li>
                <Link>تست ۱</Link>
              </li>
              <li>
                <Link>تست 2</Link>
              </li>
            </Sidebar>
            <div className="col-md-9">
              <h2>تماس با ما</h2>
              <p>
                Gnomon’s Foundation in Art & Design provides a year of
                fundamental art education to students looking to become better
                artists, build a well-rounded portfolio, and lay the groundwork
                for further education in digital production or a related field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactPage;
