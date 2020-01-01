import React from 'react';
import { Link } from 'react-router-dom';

import './course_list.styles.scss';

const CourseList = () => {
  return (
    <section id="courses">
      <div className="seprator-lg"></div>
      <div className="container text-right">
        <h1 className="title">لیست دوره ها</h1>

        <div className="scrollable-nav">
          <ul>
            <li>
              <Link to="/">گرافیک</Link>
            </li>
            <li className="active">
              <Link to="/">برنامه نویسی Python</Link>
            </li>
            <li>
              <Link to="/">برنامه نویسی Java</Link>
            </li>
            <li>
              <Link to="/">برنامه نویسی C++</Link>
            </li>
          </ul>
        </div>

        <div className="course-list">
          <div className="row">
            <div className="col-sm-6 col-lg-3 col-md-4 course">
              <a href="#">
                <div className="course-image">
                  <img
                    src="https://www.cgmasteracademy.com/media/cache/resolve/api_thumb_288x308//uploads/media/course/0001/04/7ac96aaaf105d159afc0e16563e4c15023f9c298.jpeg"
                    alt="course"
                  />
                </div>
                <div className="course-info">
                  <h2 className="course-title">آموزش گرافیک</h2>
                  <p className="course-start">
                    <i className="fa fa-calandar"></i> شروع: ۲۰ بهمن
                  </p>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-lg-3 col-md-4 course">
              <a href="#">
                <div className="course-image">
                  <img
                    src="https://www.cgmasteracademy.com/media/cache/resolve/api_thumb_288x308//uploads/media/course/0001/04/7ac96aaaf105d159afc0e16563e4c15023f9c298.jpeg"
                    alt="course"
                  />
                </div>
                <div className="course-info">
                  <h2 className="course-title">آموزش گرافیک</h2>
                  <p className="course-start">
                    <i className="fa fa-calandar"></i> شروع: ۲۰ بهمن
                  </p>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-lg-3 col-md-4 course">
              <a href="#">
                <div className="course-image">
                  <img
                    src="https://www.cgmasteracademy.com/media/cache/resolve/api_thumb_288x308//uploads/media/course/0001/04/7ac96aaaf105d159afc0e16563e4c15023f9c298.jpeg"
                    alt="course"
                  />
                </div>
                <div className="course-info">
                  <h2 className="course-title">آموزش گرافیک</h2>
                  <p className="course-start">
                    <i className="fa fa-calandar"></i> شروع: ۲۰ بهمن
                  </p>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-lg-3 col-md-4 course">
              <a href="#">
                <div className="course-image">
                  <img
                    src="https://www.cgmasteracademy.com/media/cache/resolve/api_thumb_288x308//uploads/media/course/0001/04/7ac96aaaf105d159afc0e16563e4c15023f9c298.jpeg"
                    alt="course"
                  />
                </div>
                <div className="course-info">
                  <h2 className="course-title">آموزش گرافیک</h2>
                  <p className="course-start">
                    <i className="fa fa-calandar"></i> شروع: ۲۰ بهمن
                  </p>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-lg-3 col-md-4 course">
              <a href="#">
                <div className="course-image">
                  <img
                    src="https://www.cgmasteracademy.com/media/cache/resolve/api_thumb_288x308//uploads/media/course/0001/04/7ac96aaaf105d159afc0e16563e4c15023f9c298.jpeg"
                    alt="course"
                  />
                </div>
                <div className="course-info">
                  <h2 className="course-title">آموزش گرافیک</h2>
                  <p className="course-start">
                    <i className="fa fa-calandar"></i> شروع: ۲۰ بهمن
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="seprator-lg"></div>
    </section>
  );
};

export default CourseList;
