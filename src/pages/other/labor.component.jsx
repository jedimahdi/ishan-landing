import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';

import Image1Src from '../../assets/images/other/ETESAL-BAZARKAR.jpg';

import './internship.styles.scss';

const LaborPage = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="کارآموزی" />
      <section id="internship" className="text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 sidebar">
              <div className="subsection">
                <h4>لینک ها</h4>
                <ul>
                  <li>
                    <Link to="/fields">رشته ها</Link>
                  </li>
                  <li>
                    <Link to="/courses">دوره ها</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="title_group">
                <h2>فرآیند اتصال به بازار کار</h2>
                <small>دروازه ای برای ورود به اشتغال</small>
              </div>

              <div className="row">
                <div className="col-md-7">
                  <p>
                    پس از اتمام دوره یا رشته هایی که گزینه اتصال به بازار کار
                    توسط مجموعه آیشن فراهم شده است با اعلام نمرات نهایی،
                    هنرآموزانی که امتیاز کافی برای ورود به بازار کار را کسب کرده
                    اند به صورت تضمینی به بازارکار معرفی می شوند.
                  </p>
                </div>

                <div className="col-md-5">
                  <ul className="left-side">
                    <li>همکاری با استودیو ها و شرکت فعال در صنعت</li>
                    <li>همکاری با شرکت های دانش بنیان</li>
                    <li>فرایند شتابدهی به استارت آپ ها</li>
                    <li>همکاری در پروژه های موجود در آیشن</li>
                  </ul>
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

export default LaborPage;
