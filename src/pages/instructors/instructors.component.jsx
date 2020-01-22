import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';
import Image1Src from '../../assets/images/teachers/techerssssss.jpg';
import TEACHERS_DATA from './teachers.json';
import './instructors.styles.scss';

const InstructorsPage = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="اساتید" />
      <section id="about" className="text-right text-white">
        <div className="seprator"></div>
        <div className="container">
          <h2>مدربیان </h2>
          <div className="row">
            <div className="col-md-12 ">
              <p>
                مجموعه ای بسیار ارزشمند از مربیان با سابقه و با تجربه در عرصه
                هنرهای دیجیتالی-بازیسازی - برنامه نویسی وکارآفرینی دور هم جمع
                شده اند تا بهترین و با کیفیت ترین آموزش را در اختیار فراگیران
                قرار بدهند و با پشتیبانی در حین دوره ها و نقد و بررسی بر روی
                تمارین و رصد پیشرفت و افت فراگیران در طی دوره و با برگزاری
                ورکشاپ های تخصصی این امکان را فراهم کنند تا تمامی کشور و حتی
                فراگیران خارج از کشور بتوانند استعداد و علاقه خود را کشف کنند و
                مهارت خود را در زمینه های مختلف افزایش دهند تا جهت ورود به بازار
                کار و یا شروع یک استارت آپ و خلق ایده در کنار شما عزیزان باشند .
                این مربیان آمده اند تا شما را در طراز بازار کار تربیت کنند تا
                باعث افزایش کیفیت بازار کار شوید.
              </p>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>

      <section className="community-events text-right">
        <div className="seprator-lg" />

        <div className="container">
          <div className="row">
            {TEACHERS_DATA.map(teacher => (
              <div className="col-md-4 col-sm-6" key={teacher.id}>
                <Link
                  to={`/instructors/${teacher.name}`}
                  className="content-block transparent"
                >
                  <div className="thumbnails">
                    <div className="overlay" />
                    <img
                      className="img-responsive-full"
                      src={`/images/${teacher.bg_image}`}
                      alt="bg_teacher"
                    />
                    <img
                      className="teacher-image img-responsive"
                      src={`/images/${teacher.fg_image}`}
                      alt="teacher"
                    />
                  </div>
                  <div className="description">
                    <h4>{teacher.name}</h4>
                    {teacher.subtitle}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="seprator" />
      </section>
    </React.Fragment>
  );
};

export default InstructorsPage;
