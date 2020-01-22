import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { CSSTransition } from 'react-transition-group';

import { SettingsContext } from '../../../providers/settings/settings.provider';
import Backdrop from '../../../shared/components/UIElements/Backdrop';
import AboutOverlay from './about.component';
import CoursesOverlay from './courses.component';
import FieldsOverlay from './fields.component';
import ReceptionOverlay from './reception.component';
import SupportOverlay from './support.component';

import './header.styles.scss';

const Header = ({ media, small, breadcrump }) => {
  const { settingItems } = useContext(SettingsContext);
  const [showAbout, setShowAbout] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showReception, setShowReception] = useState(false);

  const toggleAll = () => {
    setShowAbout(false);
    setShowCourses(false);
    setShowFields(false);
    setShowSupport(false);
    setShowReception(false);
  };

  const checkIsOpen = () => {
    return (
      showAbout || showCourses || showFields || showSupport || showReception
    );
  };

  const handleShowAbout = e => {
    e.preventDefault();
    let s = showAbout;
    toggleAll();
    setShowAbout(!s);
  };

  const handleShowCourses = e => {
    e.preventDefault();
    let s = showCourses;
    toggleAll();
    setShowCourses(!s);
  };

  const handleShowFields = e => {
    e.preventDefault();
    let s = showFields;
    toggleAll();
    setShowFields(!s);
  };

  const handleShowReception = e => {
    e.preventDefault();
    let s = showReception;
    toggleAll();
    setShowReception(!s);
  };

  const handleShowSupport = e => {
    e.preventDefault();
    let s = showSupport;
    toggleAll();
    setShowSupport(!s);
  };

  return (
    <header>
      <div className="masthead" style={{ height: `${small ? '55' : '80'}vh` }}>
        {media ? (
          <div>
            <div
              className="bg-video"
              style={{
                backgroundImage: `url(${media})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}
            ></div>
            <div className="header-breadcrumb container">
              <div className="breadcrumb-url container">
                <span>
                  <Link to="/">خانه</Link>
                </span>
                <span>
                  <i className="fa fa-angle-left"></i>
                </span>
                <span>{breadcrump}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-video">
            <ReactPlayer
              id="bg-video"
              url={settingItems['homepage_header_video']}
              width="100%"
              height="100%"
              playing
            />
          </div>
        )}
        <div className="main-menu-wrapper">
          <div className={`main-menu-container ${checkIsOpen() ? 'open' : ''}`}>
            <nav
              className="navbar navbar-inverse gnomon-navbar yamm"
              role="navigation"
            >
              <ul className="nav navbar-nav container-lg">
                <li className={`yamm-fw ${showAbout ? 'show' : ''}`}>
                  <Link to="/" role="button" onClick={handleShowAbout}>
                    <span>درباره ما</span>
                  </Link>
                  <Wrapper
                    show={showAbout}
                    onCancel={() => setShowAbout(false)}
                  >
                    <AboutOverlay />
                  </Wrapper>
                </li>
                <li className={`yamm-fw ${showCourses ? 'show' : ''}`}>
                  <Link to="/" role="button" onClick={handleShowCourses}>
                    <span>دوره ها</span>
                  </Link>
                  <Wrapper
                    show={showCourses}
                    onCancel={() => setShowCourses(false)}
                  >
                    <CoursesOverlay />
                  </Wrapper>
                </li>
                <li className={`yamm-fw ${showFields ? 'show' : ''}`}>
                  <Link to="/" role="button" onClick={handleShowFields}>
                    <span>رشته ها</span>
                  </Link>
                  <Wrapper
                    show={showFields}
                    onCancel={() => setShowFields(false)}
                  >
                    <FieldsOverlay />
                  </Wrapper>
                </li>

                <li className={`yamm-fw ${showSupport ? 'show' : ''}`}>
                  <Link to="/" role="button" onClick={handleShowSupport}>
                    <span>پشتیبانی</span>
                  </Link>
                  <Wrapper
                    show={showSupport}
                    onCancel={() => setShowSupport(false)}
                  >
                    <SupportOverlay />
                  </Wrapper>
                </li>

                <li className={`yamm-fw ${showReception ? 'show' : ''}`}>
                  <Link to="/" role="button" onClick={handleShowReception}>
                    <span>پذیرش</span>
                  </Link>
                  <Wrapper
                    show={showReception}
                    onCancel={() => setShowReception(false)}
                  >
                    <ReceptionOverlay />
                  </Wrapper>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const Wrapper = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={0}
        classNames="my-modal"
      >
        {props.children}
      </CSSTransition>
    </React.Fragment>
  );
};
// const About = props => {
//   return (
//     <React.Fragment>
//       {props.show && <Backdrop onClick={props.onCancel} />}
//       <CSSTransition
//         in={props.show}
//         mountOnEnter
//         unmountOnExit
//         timeout={0}
//         classNames="my-modal"
//       >
//         <AboutOverlay />
//       </CSSTransition>
//     </React.Fragment>
//   );
// };

export default Header;
