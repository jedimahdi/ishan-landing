import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Button from '../../components/button/button.component';

import './fields.styles.scss';

const FieldsPage = () => {
  return (
    <React.Fragment>
      <Header
        media="https://www.gnomon.edu/assets/bg_pageheaders/bg_headerimages57-71db2b7e873aa7bc604639d62056061b15684175995aa3d2b3f56fd7da9f0574.jpg"
        small
      />
      <div className="seprator"></div>
      <section id="fields">
        <div className="container">
          <div className="row">
            <Sidebar title="رشته ها">
              <li>
                <Link>رشته یک</Link>
              </li>
              <li>
                <Link>رشته دو</Link>
              </li>
            </Sidebar>

            <div className="col-md-9 text-right text-white">
              <h2>رشته ها</h2>
              <p>
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
              </p>
              <div className="row">
                <div className="col-md-3">
                  <Button url="/" name="صحبت با مشاور" />
                </div>
                <div className="col-md-3">
                  <Button url="/" name="همه دوره ها" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="seprator-lg"></div>
      <div className="fields-list">
        <Field secondMode={false} />
        <Field secondMode={true} />
        <Field secondMode={false} />
        <Field secondMode={true} />
      </div>
    </React.Fragment>
  );
};

const Field = ({ field, secondMode }) => {
  return (
    <section
      className="field text-right text-white"
      style={{ backgroundColor: secondMode ? '#1c1c1c' : '#000' }}
    >
      <div className="seprator-lg"></div>
      <div className="container">
        <div className="row">
          {secondMode ? <FieldCourses /> : <FieldInfo />}
          {secondMode ? <FieldInfo /> : <FieldCourses />}
        </div>
      </div>
      <div className="seprator-lg"></div>
    </section>
  );
};

const FieldInfo = () => {
  return (
    <div className="col-md-3 field-info">
      <h1>رشته اول</h1>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
      <Link to="/">
        دیدن همه دوره ها <i className="fa fa-long-arrow-left"></i>
      </Link>
    </div>
  );
};

const FieldCourses = () => {
  return (
    <div className="col-md-9">
      <div className="row">
        <FieldCourse />
        <FieldCourse />
        <FieldCourse />
        <FieldCourse />
      </div>
    </div>
  );
};

const FieldCourse = () => {
  return (
    <div className="col-md-6">
      <div className="course">
        <img
          src="https://www.gnomon.edu/assets/courses/on-campus_vehicle-design-237bf8b8acb96ed3d3ddb976ebb13ff333833de644bdec3f6431101ff1477605.jpg"
          alt="course"
          className="img-responsive"
        />
        <div className="course-body">
          <h3>مدلسازی Maya</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از.</p>
        </div>
      </div>
    </div>
  );
};

export default FieldsPage;
