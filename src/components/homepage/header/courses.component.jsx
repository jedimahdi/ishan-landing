import React from 'react';
import ReactDOM from 'react-dom';

import Image1Src from '../../../assets/images/header/DIGITALY.jpg';
import Image2Src from '../../../assets/images/header/GAME.jpg';
import Image3Src from '../../../assets/images/header/PROGRAMING.jpg';

const CoursesOverlay = props => {
  const content = (
    <div className="dialogue row yamm-content main-menu-container">
      <div className="col-md-4">
        <a
          className="subsection-grid-item"
          href="https://www.gnomon.edu/showcase"
        >
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image1Src}
            alt="Showcase gallery 1140"
          />
          <h3>هنرهای دیجیتالی</h3>
          <p>دوره های مرتبط با صنعت CGI , انیمیشن</p>
        </a>
      </div>
      <div className="col-md-4">
        <a
          className="subsection-grid-item"
          href="https://www.gnomon.edu/showcase/graduate-reels"
        >
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image2Src}
            alt="Showcase grad reels 1140"
          />
          <h3>بازیسازی</h3>
          <p>دوره های ورود به دنیای بازیسازی موبایل و کامپیوتر</p>
        </a>
      </div>
      <div className="col-md-4">
        <a
          className="subsection-grid-item"
          href="https://www.gnomon.edu/showcase/best-of-term"
        >
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image3Src}
            alt="Showcase best of term 1140"
          />
          <h3>برنامه نویسی</h3>
          <p>برنامه نویسی را یک بار برای همیشه یاد بگیرید.</p>
        </a>
      </div>
      <div className="clearfix" />
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default CoursesOverlay;
