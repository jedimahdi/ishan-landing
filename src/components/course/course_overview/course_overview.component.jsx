import React from 'react';

import './course_overview.styles.scss';

const CourseOverview = () => {
  return (
    <section id="overview">
      <div className="container">
        <h4 className="title mb-4">موشن گرافیک را اصولی بیاموزید</h4>

        <div className="row">
          <div className="col-md-8">
            <img
              src="https://www.cgmasteracademy.com/uploads/media/course/0001/03/8517471b45f494b35849a2da3228c4528eaacead.jpeg"
              alt="course"
            />
          </div>
          <div className="col-md-4">
            <p>
              موشن گرافیک چیست؟ شاید این سوال برای شما هم پیش آمده! برای دیدن
              نمونه کار موشن گرافیک روی “پخش (Play)” کلیک کنید تا یک نمونه موشن
              گرافیک ببینید. امروزه موشن گرافیک انتخاب بهتری برای تبلیغات
              ویدیویی است. موشن گرافیک توانسته جای تبلیغات ویدیویی رئال را در
              اینترنت و تلویزیون به خوبی پُر کند!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
