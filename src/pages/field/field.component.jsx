import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';

import './field.styles.scss';

const FieldPage = () => {
  return (
    <div className="field-page text-right text-white">
      <Header
        media="https://www.gnomon.edu/assets/bg_pageheaders/bg_headerimages12-3a4be5930bc6db284e0fcc467896eda5de2f44a6a6823b9b79143f1fb18c8c0e.jpg"
        small
      />
      <div className="seprator" />
      <section>
        <div className="container">
          <div className="field-title">
            <h2>عنوان رشته</h2>
            <small>شروع ماجراجویی به عنوان هنرمند</small>
          </div>

          <div className="row">
            <div className="col-md-3 ">
              <div className="field-sidebar">
                <div className="sidebar-title">
                  <h5>عنوان تست</h5>
                  <small>تست تست</small>
                </div>
                <ul>
                  <li>
                    <Link to="/">چطور ثبت نام کنیم</Link>
                  </li>
                  <li>
                    <Link to="/">چطور ثبت نام کنیم</Link>
                  </li>
                  <li>
                    <Link to="/">چطور ثبت نام کنیم</Link>
                  </li>
                  <li>
                    <Link to="/">سوالات متداول</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-7">
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.{' '}
                  </p>

                  <h6 className="next-terms">ثبت نام در ترم های اینده</h6>
                  <table className="table table-compare table-bordered upcoming-terms">
                    <thead>
                      <tr>
                        <th>ترم</th>
                        <th>تاریخ ثبت نام</th>
                        <th>تاریخ شروع</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>زمستان ۲۰۲۰</td>
                        <td>۱۴ بهمن</td>
                        <td>۷ اسفند</td>
                      </tr>
                      <tr>
                        <td>زمستان ۲۰۲۰</td>
                        <td>۱۴ بهمن</td>
                        <td>۷ اسفند</td>
                      </tr>
                      <tr>
                        <td>زمستان ۲۰۲۰</td>
                        <td>۱۴ بهمن</td>
                        <td>۷ اسفند</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-5">
                  <img
                    src="https://www.gnomon.edu/assets/programs/foundation/discuss_thumbs_foundation-8d196dbdfa04e012f3fe877197ef541c04b9530bfafbf9064806dd674b70f582.jpg"
                    alt="field"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seprator" />
      </section>

      <section id="terms">
        <div className="seprator" />
        <div className="container">
          <div className="curriculum-title">
            <h2>برنامه تحصیلی</h2>
            <small>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </small>
          </div>

          <Term />
          <Term />
          <Term />
        </div>
      </section>
    </div>
  );
};

const Term = () => {
  return (
    <div className="term">
      <div className="term-num">ترم اول</div>
      <TermCourseList />
    </div>
  );
};

const TermCourseList = () => {
  return (
    <div className="row">
      <TermCourse />
      <TermCourse />
      <TermCourse />
      <TermCourse />
    </div>
  );
};

const TermCourse = () => {
  return (
    <div className="col-md-6 ">
      <div className="field-course">
        <div className="course-image">
          <img
            src="https://www.gnomon.edu/assets/programs/foundation/classthumbs/psdfordp_foundation_class_thumbs-113d8c6ff7fedb01a477ec77f949887d57bed70c91b26ed75403279def37234a.jpg"
            alt="course"
            className="img-responsive"
          />
        </div>
        <div className="course-info">
          <h3>طراحی کاراکتر</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FieldPage;
