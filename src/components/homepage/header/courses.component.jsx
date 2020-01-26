import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Image1Src from '../../../assets/images/header/DIGITALY.jpg';
import Image2Src from '../../../assets/images/header/GAME.jpg';
import Image3Src from '../../../assets/images/header/PROGRAMING.jpg';

const CoursesOverlay = props => {
  const content = (
    <div className="custom-modal row yamm-content main-menu-container">
      <div className="col-md-4">
        <Link className="subsection-grid-item" to="/courses">
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image1Src}
            alt="Showcase gallery 1140"
          />
          <h3>هنرهای دیجیتالی</h3>
          <p>دوره های مرتبط با صنعت CGI , انیمیشن</p>
        </Link>
      </div>
      <div className="col-md-4">
        <Link className="subsection-grid-item" to="/courses">
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image2Src}
            alt="Showcase grad reels 1140"
          />
          <h3>بازیسازی</h3>
          <p>دوره های ورود به دنیای بازیسازی موبایل و کامپیوتر</p>
        </Link>
      </div>
      <div className="col-md-4">
        <Link className="subsection-grid-item" to="/courses">
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image3Src}
            alt="Showcase best of term 1140"
          />
          <h3>برنامه نویسی</h3>
          <p>برنامه نویسی را یک بار برای همیشه یاد بگیرید.</p>
        </Link>
      </div>
      <div className="clearfix" />
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default CoursesOverlay;
