import React from 'react';

import Header from '../../components/homepage/header/header.component';
import Image1Src from '../../assets/images/other/course_adviser.jpg';

const AdviserCourse = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="مشاوره" />
      <section id="internship" className="text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_group">
                <h2>مشاوره و بررسی پیشرفت فراگیران در حین دوره</h2>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <p>
                    در طول دوره ، مشاور آموزشی با فراگیر در ارتباط بوده و از
                    روند پیشرفت فراگیر مطلع می شوند و در صورت افت فراگیر با او
                    ارتباط مستقیم گرفته و از او در مورد افت آموزشی پرسش خواهد شد
                    و در صورت مشکل در فهم و یا اجرای پروژه ها کمک خواهند کرد و
                    فراگیر را در سیکل درست آموزش نگه می دارد .
                  </p>

                  <ul className="left-side" style={{ marginBottom: '20px' }}>
                    <li> رفع اشکال تمارین </li>
                    <li>راهنمایی در کسب موفقیت و اتمام دوره ها</li>
                    <li>خدمات مشاوره بازار</li>
                    <li>بررسی ظرفیت های فراگیر</li>
                  </ul>

                  <p>
                    این مشاوره در پیشبرد آموزشی فراگیران به بهترین شکل ممکن
                    تاثیر گذار می باشند و چون مشاوران جهت اتصال به بازار کار
                    فراگیران فعال هستند ، می توانند افراد را با توجه به خصوصیات
                    فنی و اخلاقی به بازار کار مناسب معرفی کنند
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seprator-lg"></div>
      </section>
    </React.Fragment>
  );
};

export default AdviserCourse;
