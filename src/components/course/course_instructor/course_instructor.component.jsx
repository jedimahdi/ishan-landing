import React, { useContext } from 'react';

import { SettingsContext } from '../../../providers/settings/settings.provider';

import './course_instructor.styles.scss';

const CourseInstructor = () => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <section id="instructors">
      <div className="seprator-lg" />
      <div className="container text-right">
        <div className="row">
          <div className="col-md-5 offset-md-2">
            <div className="instructor-profile">
              <img
                className="rounded-circle"
                src="https://www.cgmasteracademy.com/media/cache/resolve/instructor_profile//uploads/media/instructor/0001/34/802159b5c1b897ee21047f8fca23e28acd5c355a.jpeg"
                alt="profile"
              />
              <div className="instructor-name">
                <h6>محمد علی علیا</h6>
                <div>تهران</div>
              </div>
            </div>
            <p className="instructor-bio">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="col-md-3 instructor-banner">
            <p>انها می آموزند که قهرمان واقعی شنل ندارند.</p>
          </div>
        </div>
      </div>
      <div className="seprator-lg" />
    </section>
  );
};

export default CourseInstructor;
