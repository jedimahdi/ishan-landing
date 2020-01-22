import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';
import Image1Src from '../../assets/images/other/1.jpg';
import Image2Src from '../../assets/images/other/021.jpg';
import Image3Src from '../../assets/images/other/03.jpg';
import Image4Src from '../../assets/images/other/05.jpg';
import Button from '../../shared/components/FormElements/Button';
import './education.styles.scss';

const EducationPage = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="مشاوره" />
      <section className="steps-section text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="title_group">
            <h2>مشاوره و هدایت آموزشی</h2>
            <small>سفر خود را به دنیای آموزش و مهارت آغاز کنید</small>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="black-box">
                <div className="black-title">
                  <h4>مشاوره و هدایت آموزشی</h4>
                  <small>دوره های آمادگی برای افزایش مهارت بازار کار</small>
                </div>
                <ul>
                  <li>
                    <Link to="/">پذیرش و ثبت نام</Link>
                  </li>
                  <li>
                    <Link to="/">شهریه و طریقه پرداخت</Link>
                  </li>
                  <li>
                    <Link to="/">سوالات متداول</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <p>
                پس از اعلام آمادگی هنرآموز در سایت ، جهت مشاوره و تعیین سطح و
                بررسیِ قابلیت ها و ظرفیت های هنرآموز، با ایشان ارتباط برقرارکرده
                و مشخص می شود که هنرآموز در کدام دوره ( دورۀ اتصال به بازارکار
                یا دورۀ مهارت افزایی ) می تواند ثبت نام نماید. پس از ثبت نام
                هنرآموز در سامانه پلتفرم آموزشی با پروفایل اختصاصی در اختیار
                هنرآموز قرار می گیرد. این مشاوره در جهت پیدا کردن استعداد
                هنرآموزان و تعیین سطح توانایی آنها می باشد و فرد پس از یک مشاوره
                درست و صحیح با صاحبان صنعت می تواند با خیالی آسوده و با همتی سخت
                به ادامه راه خود ادامه دهد آن چیزی که بسیار مهم می باشد در بخش
                مشاوره و هدایت آموزشی این است که یک منتور کارآزموده در آن رشته
                همواره همراه شما خواهد بود و در تمام مراحل دوره آموزشی و حل
                تمارین و بعد از آن پشتیبانی مستمر خواهد داشت.
              </p>
            </div>
            <div className="col-md-3">
              <img src={Image2Src} alt="" className="img-responsive" />
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
      <section id="edu-basics" style={{ backgroundImage: `url(${Image3Src})` }}>
        <div className="seprator-lg"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <h3>اصولی یاد بگیرید</h3>
              <p>
                مشاوران به دانشجویان این فرصت را می دهند تا علاقه و مهارت خود را
                در زمینه های مختلف ارزیابی کنند ، ضمن اینکه مهارت های اساسی را
                که برای ساختن یک هنرآموز طراز بازار کار نیاز هست به او خواهیم
                داد{' '}
              </p>
              <h4>امکان استفاده رشته ها برای دانش آموزان</h4>
              <p>
                دانش آموزان با توجه به تست های مهارتی و استعدادیابی که از طرف
                مجموعه گرفته می شود به دوره یا رشته مورد نظر راهنمایی و مشاوره
                می شوند
              </p>

              <h4>
                فرصتی برای ورود به دروازه هنرهای دیجیتالی ، بازیسازی و برنامه
                نویسی
              </h4>
              <p>
                فرصتی برای ورود به دروازه هنرهای دیجیتالی ، بازیسازی و برنامه
                نویسی
              </p>
              <Button inverse>همین حالا مشاوره را شروع کنید</Button>
            </div>
          </div>
        </div>
        <div className="seprator-lg"></div>
      </section>
      <section style={{ backgroundImage: `url(${Image4Src})` }}>
        <div className="seprator-lg"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>
                برای آموزش خود سرمایه گذاری کنید. صبر کنید، مگر گیتس از دانشگاه
                هاروارد اخراج نشده بود؟ بله، او اخراج شد. اما در جلسه “از من هر
                چیزی می خواهید بپرسید” پایگاه Reddit در سال ۲۰۱۴ فردی از او
                پرسید، ” بهترین توصیه مالی شخصی شما به کسانی که کمتر از ۱۰۰ هزار
                دلار در سال درآمد دارند چیست؟ ” او پاسخ داد: ” بر روی آموزش خود
                سرمایه گذاری کنید”.
              </p>
            </div>
          </div>
        </div>
        <div className="seprator-lg"></div>
      </section>

      <section>
        <div className="seprator-lg"></div>
        <div className="container">
          <h3 className="steps-buttons-title">قدم بعدی را محکم بردارید</h3>

          <div className="row steps-buttons">
            <div className="col-md-3">
              <Button danger>
                <i className="fa fa-angle-left"></i>
                <span>با یک مشاور صحبت کنید</span>
              </Button>
            </div>
            <div className="col-md-3">
              <Button danger>
                <i className="fa fa-angle-left"></i>
                <span>خدمات فنی و پشتیبانی</span>
              </Button>
            </div>
            <div className="col-md-3">
              <Button danger>
                <i className="fa fa-angle-left"></i>
                <span>شتابدهنده</span>
              </Button>
            </div>
            <div className="col-md-3">
              <Button danger>
                <i className="fa fa-angle-left"></i>
                <span>خدمات فنی و پشتیبانی</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="seprator-lg"></div>
      </section>
    </React.Fragment>
  );
};

export default EducationPage;
