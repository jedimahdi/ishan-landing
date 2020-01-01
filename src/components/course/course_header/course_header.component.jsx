import React from 'react';
import { Link } from 'react-router-dom';

import './course_header.styles.scss';

const CourseHeader = () => {
  return (
    <section id="course-header">
      <div className="course-header__inner">
        <div
          style={{
            backgroundImage:
              'url(https://www.cgmasteracademy.com/uploads/media/course/0001/01/002521392ac33421d557d18046e4f0e3dfc9e2c6.jpeg)'
          }}
          className="course-header__media"
        />
      </div>
      <div className="container">
        <div className="row text-right">
          <div className="col-md-7 header-content">
            <Link to="/course" className="back-link">
              <i className="fa fa-angle-right ml-1" />
              <span>بازگشت به لیست دوره ها</span>
            </Link>
            <h2 className="my-4">موشن گرافیک</h2>
            <p className="header-description mb-5">
              یک دوره ۸ هفته ای با معرفی اصول اساسی ساخت موشن گرافیک با استفاده
              از روش های استاندارد صنعتی
            </p>

            <div className="row calendar">
              <div className="col-md-3">
                <Link to="/course" className="btn btn-primary">
                  ثبت نام در دوره
                </Link>
              </div>
              <div className="col-md-8 start-time">
                <i className="fa fa-calendar" />
                زمان شروع دوره: مهر ماه
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeader;
