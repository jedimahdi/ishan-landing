import React from 'react';
import { Link } from 'react-router-dom';

import './course.styles.scss';

import CourseHeader from '../../components/course/course_header/course_header.component';
import CourseOverview from '../../components/course/course_overview/course_overview.component';
import CourseSpecs from '../../components/course/course_specs/course_specs.component';
import CourseSchedule from '../../components/course/course_schedule/course_schedule.component';
import CourseInstructor from '../../components/course/course_instructor/course_instructor.component';
import CoursePricing from '../../components/course/course_pricing/course_pricing.component';
import CourseGallery from '../../components/course/course_gallery/course_gallery.component';
import CourseFaq from '../../components/course/course_faq/course_faq.component';

const CoursePage = () => (
  <main>
    <CourseHeader />
    <CourseOverview />

    <div className="seprator" />
    <div className="container">
      <div className="divider" />
    </div>
    <div className="seprator" />

    <CourseSpecs />

    <div className="seprator-lg" />

    <CourseSchedule />

    <div className="seprator" />

    <CourseInstructor />

    <CourseGallery />

    <CoursePricing />
    <div className="seprator-lg" />

    <CourseFaq />

    {/* <section id="faq" className="my-accordian">
      <div className="container">
        <div className="schedule-header">
          <h5>سوالات متداول</h5>
          <Link to="/course" className="expand-all" id="expand-faq">
            <div>
              <span>باز کردن همه </span> <i className="fa fa-angle-down" />
            </div>
          </Link>
        </div>
        <div className="seprator" />
        <div className="accordion schedule" id="accordionExample">
          <div className="card">
            <div
              className="card-header toggle-accordian"
              id="faq1"
              data-toggle="collapse"
              data-target="#faqOne"
              aria-expanded="false"
              aria-controls="faqOne"
            >
              <div>
                <p className="mb-0">هفته اول</p>
                <h2 className="mb-0">معرفی گرافیک حرکت</h2>
              </div>
              <div>
                <i className="fa toggle-accordian-icon" />
              </div>
            </div>

            <div
              id="faqOne"
              className="collapse faq-collapse"
              aria-labelledby="faq1"
            >
              <div className="card-body">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className="card-header toggle-accordian"
              id="faq2"
              data-toggle="collapse"
              data-target="#faqTwo"
              aria-expanded="false"
              aria-controls="faqTwo"
            >
              <div>
                <p className="mb-0">هفته دوم</p>
                <h2 className="mb-0">طراحی سه بعدی و مدلسازی قسمت اول</h2>
              </div>
              <div>
                <i className="fa toggle-accordian-icon" />
              </div>
            </div>

            <div
              id="faqTwo"
              className="collapse faq-collapse"
              aria-labelledby="faq2"
            >
              <div className="card-body">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیی موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <div className="seprator-lg" />
  </main>
);

export default CoursePage;
