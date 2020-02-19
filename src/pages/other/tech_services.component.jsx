import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../../components/homepage/header/header.component'
import Image1Src from '../../assets/images/other/fani.jpg'
import './custom-list.styles.scss'

const TechServicesPage = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="خدمات فنی" />
      <section id="tech" className=" text-white">
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
                    <Link to="/mentoring">خدمات منتورینگ</Link>
                  </li>
                  <li>
                    <Link to="/accelerator">شتابدهی</Link>
                  </li>
                  <li>
                    <Link
                      to="/technical_services"
                      disabled
                      className="not-link-highlight"
                    >
                      خدمات فنی
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <h2>فنی</h2>
              <p>
                تمامی امکانات فنی و نوین شرکت رایمون مدیا زیر یک سقف و به بهترین
                نحو در اختیار فعالان این حوزه قرار خواهد گرفت. برای استفاده از
                این امکانات متقاضیان میتوانند از طریق سایت شرکت رایمون مدیا
                اقدام به رزرو خدمات نمایند. امکانات و تجهیزات فنی رایمون مدیا به
                شرح زیر است:
              </p>

              <ul className="custom-list">
                <li>
                  رندرفارم با قدرت ۳۴۰۰ گیگا هرتز با امکان ۸۵۰۰۰ گیگاهرتز ساعت
                  در روز
                </li>
                <li>
                  ورک استیشن با قدرت ۱۶۰ گیگا هرتز برای تست رندر و پردازش مجتمع
                </li>
                <li>دیتا سنتر مجهز</li>
                <li>۱۱۰ ورک استیشن اختصاصی برای تولیدات سه بعدی</li>
                <li>۵۰ عدد ورک استیشن اختصاصی برای تولیدات دو بعدی</li>
                <li>
                  ۳۰ عدد ورک استیشن فوق سریع برای تیمهای لایتینگ و رندرینگ
                </li>
                <li>۳۰ عدد ورک استیشن به همراه قلم نوری برای کارهای ۲ بعدی</li>
                <li>۲۰ عدد سیستمهای اداری و کنترل پروژه</li>
                <li>پرینتر سه بعدی</li>
                <li>
                  استوریج به ظرفیت ۱۲۰ ترابایت به همراه بک آپ لحظه ای و روزانه
                </li>
                <li>
                  بانک اطلاعات برای نگه داری تا ۲۰ سال به ظرفیت ۵۰۰ ترابایت
                </li>
                <li> ظرفیت کلی نگهداری دیتا بیش از ۱۰۰۰ ترابایت</li>
                <li>
                  موشن کپچر اپتیکال ۲۴ دوربین با کیفیت ۱۶ مگاپیکسل برای کپچر ۷
                  نفر همزمان (بدن و صورت)
                </li>
                <li>
                  اسکنر سه بعدی با امکان اسکن اجسام و انسان با رنگ و تکستچر
                </li>
                <li>
                  دوربین تصویر برداری و فیلم برداری به همراه تمامی تجهیزات برای
                  کارهای تلفیقی
                </li>
                <li>
                  تجهیزات کامل استودیویی با امکان اجاره جهت استفاده در بیرون
                  مجموعه
                </li>
                <li>
                  ۳ باکس کامل تدوین به همراه انواع سامانه ها برای گرفتن خروجی
                </li>
                <li>
                  باکس کامل تصحیح رنگ به همراه نمایشگر مخصوص و ست اختصاصی
                  تانژانت بصورت بلادرنگ
                </li>
                <li>برق اضطراری و ژنراتور برای پشتیبانی از تولید بدون وقفه</li>
                <li>
                  سامانه ابری ویژه جمع آوری اطلاعات تولید و مدیریت پروژه بصورت
                  مکانیزه
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
    </React.Fragment>
  )
}

export default TechServicesPage
