import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';

import './course_list.styles.scss';

const CourseList = () => {
  const options = {
    items: 1,
    autoplay: false,
    mouseDrag: false,
    loop: true,
    dots: false,
    nav: true,
    rtl: true,
    animateOut: 'fadeOut',
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>'
    ]
  };

  return (
    <div className="course-list-page">
      <div className="courses-slider text-right">
        <OwlCarousel options={options}>
          <CourseSliderItem image="https://www.cgmasteracademy.com/uploads/media/cache/api_thumb_1920x896/uploads/media/course/0001/02/b6e8e37dec53c7fd37819b634e994700663f3838.jpeg">
            <h1>شروع کار با Maya</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div className="row slider-footer">
              <div className="col-md-2">
                <Link className="btn btn-primary">ادامه مطلب</Link>
              </div>
              <div className="col-md-3 slider-calendar">
                <div className="row calendar-row">
                  <div className="col-md-1 offset-md-1">
                    <i className="fa fa-calendar"></i>
                  </div>
                  <div className="col-md-9">
                    <div className="starttime">شروع: ۲۹ بهمن</div>
                    <div className="duration">به مدت یکسال</div>
                  </div>
                </div>
              </div>
            </div>
          </CourseSliderItem>

          <CourseSliderItem image="https://www.cgmasteracademy.com/uploads/media/cache/api_thumb_1920x896/uploads/media/course/0001/25/5aae4022e0055500ebabbf299fecfbd23c3265a8.jpeg">
            <h1>شروع کار با Maya</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div className="row slider-footer">
              <div className="col-md-2">
                <Link className="btn btn-primary">ادامه مطلب</Link>
              </div>
              <div className="col-md-3 slider-calendar">
                <div className="row calendar-row">
                  <div className="col-md-1 offset-md-1">
                    <i className="fa fa-calendar"></i>
                  </div>
                  <div className="col-md-9">
                    <div className="starttime">شروع: ۲۹ بهمن</div>
                    <div className="duration">به مدت یکسال</div>
                  </div>
                </div>
              </div>
            </div>
          </CourseSliderItem>
          <CourseSliderItem image="https://www.cgmasteracademy.com/uploads/media/cache/api_thumb_1920x896/uploads/media/course/0001/13/02e7d7bfe97efd355bbb47a3c554816a74bf858a.jpeg">
            <h1>شروع کار با Maya</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div className="row slider-footer">
              <div className="col-md-2">
                <Link className="btn btn-primary">ادامه مطلب</Link>
              </div>
              <div className="col-md-3 slider-calendar">
                <div className="row calendar-row">
                  <div className="col-md-1 offset-md-1">
                    <i className="fa fa-calendar"></i>
                  </div>
                  <div className="col-md-9">
                    <div className="starttime">شروع: ۲۹ بهمن</div>
                    <div className="duration">به مدت یکسال</div>
                  </div>
                </div>
              </div>
            </div>
          </CourseSliderItem>
        </OwlCarousel>
      </div>
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
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
            </div>
          </div>
        </div>
        <div className="seprator-lg"></div>
      </section>
    </div>
  );
};

const CourseItem = () => {
  return (
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

        <div className="course-overlay"></div>
      </a>
    </div>
  );
};

const CourseSliderItem = ({ children, image }) => {
  return (
    <div
      className="course-slide"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      {children}
    </div>
  );
};

export default CourseList;
