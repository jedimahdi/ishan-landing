import React from 'react';
// import { Link } from 'react-router-dom';

import './accordian.styles.scss';

class Accordian extends React.Component {
  handleExpandAll = event => {};

  render() {
    return (
      <section id="course-schedule" className="my-accordian">
        <div className="container">
          <div className="schedule-header text-right">
            <h5>برنامه ریزی دوره موشن گرافیک</h5>
            <button
              className="expand-all"
              id="expand-course"
              onClick={this.handleExpandAll}
            >
              <div>
                <span>باز کردن همه </span> <i className="fa fa-angle-down" />
              </div>
            </button>
          </div>
          <div className="seprator" />
          <div className="accordion schedule" id="accordionExample">
            <div className="card">
              <div
                className="card-header toggle-accordian"
                id="headingOne"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
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
                id="collapseOne"
                className="collapse schedule-collapse"
                aria-labelledby="headingOne"
              >
                <div className="card-body">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
              </div>
            </div>

            <div className="card">
              <div
                className="card-header toggle-accordian"
                id="headingTwo"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
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
                id="collapseTwo"
                className="collapse schedule-collapse"
                aria-labelledby="headingTwo"
              >
                <div className="card-body">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیی
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Accordian;
