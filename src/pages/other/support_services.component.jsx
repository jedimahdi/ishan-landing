import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';

import Image1Src from '../../assets/images/other/support-and-services.jpg';

import './internship.styles.scss';

const SupportAndServices = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="پشتیبانی و خدمات" />
      <section id="internship" className="text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 sidebar">
              <div className="subsection">
                <h4>خدمات</h4>
                <ul>
                  <li>
                    <Link to="/shared_workspace">فضای کار اشتراکی</Link>
                  </li>
                  <li>
                    <Link to="/accelerator">اجرایی</Link>
                  </li>
                  <li>
                    <Link to="/technical_services">فنی</Link>
                  </li>
                  <li>
                    <Link to="/mentoring">منتورینگ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="title_group">
                <h2>خدمات فنی و پشتیبانی</h2>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <p>
                    رایمون مدیا بعنوان بزرگترین مرکز CGI کشور توانایی ارائه
                    خدمات مختلف در حوزه تصویرسازی رایانه ای را دارا می باشد
                    خدماتی از قبیل:
                  </p>
                  <ul className="left-side">
                    <li>Animation (پویا نمایی)</li>
                    <li>Video Game (بازی های ویدئویی)</li>
                    <li>VFX (جلوه های ویژه دیجیتال) </li>
                    <li>Multimedia (چندرسانه ای)</li>
                    <li>Application (برنامک ابزارهای هوشمند)</li>
                    <li>Industrial design (طراحی صنعتی)</li>
                    <li>Architecture (معماری)</li>
                    <li>Fashion design (طراحی لباس)</li>
                  </ul>
                  <p>و همچنین دیگر قابلیت های فناورانه مانند:</p>
                  <ul className="left-side">
                    <li>V/R (واقعیت مجازی)</li>
                    <li>A/R (واقعیت افزوده)</li>
                    <li>BCI (واسط مغز و رایانه) </li>
                    <li>P/C GPU Based (پردازش موازی گرافیکی)</li>
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

export default SupportAndServices;
