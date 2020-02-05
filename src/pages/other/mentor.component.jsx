import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';
import Image1Src from '../../assets/images/other/mentoring.jpg';
import './custom-list.styles.scss';

const MentorPage = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="منتورینگ" />
      <section id="mentor" className=" text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 sidebar">
              <div className="subsection">
                <h4>خدمات</h4>
                <ul>
                  <li>
                    <Link
                      to="/shared_workspace"
                      disabled
                      className="not-link-highlight"
                    >
                      فضای کار اشتراکی
                    </Link>
                  </li>
                  <li>
                    <Link to="/mentoring">خدمات منتورینگ</Link>
                  </li>
                  <li>
                    <Link to="/accelerator">شتابدهی</Link>
                  </li>
                  <li>
                    <Link to="/technical_services">خدمات فنی</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <h2>منتورینگ</h2>
              <p>
                با توجه به توانایی ها و تجربه های ارزشمندی که در طول سال ها
                فعالیت در زمینه انیمیشن، بازی و جلوه های ویژه بصری داشته است،
                پتانسیل بالایی جهت مشاوره و حمایت فکری برای فعالان این صنعت
                دارد. برخی از انواع مشاوره قابل ارایه در مجموعه رایمون مدیا به
                شرح زیر است:
              </p>

              <ul className="custom-list">
                <li>
                  ارایه مشاوره جهت فیلم نامه، ارتقا سطح کارگردانی، تدوین و تمامی
                  موارد مورد نیاز
                </li>
                <li>
                  مدیریت و مشاوره در ضمینه پایپ لاین تولید و استفاده از متدهای
                  روز دنیا
                </li>
                <li>خدمات مشاوره بازار</li>
                <li>
                  ارایه خدمات حقوقی جهت مشاوره در قرارداد های داخلی و بین الملل
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
    </React.Fragment>
  );
};

export default MentorPage;
