import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';
import Button from '../../shared/components/FormElements/Button';
import Image1Src from '../../assets/images/other/FARAHANI.jpg';
import './learning_process.styles.scss';

const LearningProcessPage = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="فرایند آموزش" />
      <section id="learning_process" className="text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="title_group">
            <h2>فرآیند آموزشی در پلتفرم آیشن </h2>
            <small>رسیدن به مهارت لازم جهت بازار کار دغدغه ماست</small>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="black-box">
                <div className="black-title">
                  <h4>فرآیند آموزشی در پلتفرم آیشن </h4>
                </div>

                <ul>
                  <li>
                    <Link to="/enroll">نحوه ثبت نام</Link>
                  </li>
                  <li>
                    <Link to="/fee">شهریه و نحوه پرداخت</Link>
                  </li>
                  <li>
                    <Link to="/faq">سوالات متداول</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <p>
                یک سیستم آموزشی مدرن با محتوای آموزشی به روز این امکان را به شما
                می دهد تا در هر جایی که هستید بتوانید از این آموزش ها بهره مند
                شده و توانایی و مهارت لازم برای ورود به بازار کار را بدست
                بیارید. در این فرآیند آموزشی ، رود آموزش شما همواره توسط یک
                منتور مربوط به حوزه فعالیت خود بررسی می شود و با تمارینی که
                استاد در هر جلسه برای شما تعریف کرده است میتوانید قدم به قدم تا
                حرفه ای شدن پیش بروید . در این پلتفرم امکانی برای شما فراهم شده
                است که از جلسه رفع اشکال آنلاین و یا حضوری با استاد استفاده کنید
                و در 2 جلسه حضوری که در هر دوره تعبیه شده است شما می توانید
                تمامی اشکالات خود را برطرف کنید{' '}
              </p>
              <div className="sub-buttons">
                <Button inverse>صحبت با یک مشاور</Button>
                <Button inverse>مشاوره حین دوره</Button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-list">
                <ul>
                  <li>پرورش نیروی کار خلاق و طراز</li>
                  <li>تقویت و پیشرفت بازار کار با تزریق نیروهای مجرب</li>
                  <li>
                    اتصال دانشجویان تحصیل کرده و تایید شده به بازار کار مناسب
                  </li>
                  <li>
                    تولید فرآیندهای آموزشی با محتوای غنی و استاندارد و بهبود
                    فضای آموزش مجازی
                  </li>
                  <li>کارآفرینی و ایجاد بستر اشتغال زایی</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
      <section id="bazare-kar">
        <div className="seprator"></div>
        <div className="container ">
          <h2>توانمند شدن فراگیران در طراز بازار کار </h2>
          <p>
            آموزش هایی که یک فرد قبل از ورود به بازار کار می بیند غالبا آموزش
            هایی کلاسیک و محدود به مباحث آکادمیک تاریخ گذشته است . ما در آیشن به
            خوبی به خلاء بین آموزش های مرسوم و بازار کار موافقیم، به همین منظور
            اقدام به آموزش هایی برای اتصال نیروی کارآمد و طراز ، به بازار کار و
            همچنین تقویت بازار کار با این نیروها کرده ایم.
          </p>

          <div className="title_group">
            <h3>سیکل آموزشی در آیشن</h3>
            <small>در تمامی دوره ها این فرآیند طی میشود</small>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="process-step">
                <h4>مشاوره و تعیین دوره</h4>
                <p>
                  پس از اعلام آمادگی هنرآموز در سایت ، جهت مشاوره با هنرآموز
                  ارتباط گرفته می شود و هنرآموز در یکی از دوره ها - اتصال به
                  بازار کار ، مهارت افزایی - قرار میگیرد
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-step">
                <h4>ثبت نام و دریافت پلتفرم آموزشی</h4>
                <p>
                  هنرآموز با مراجعه به سایت اقدام به ثبت نام کرده و پلتفرم آیشن
                  را دریافت می کند
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-step">
                <h4>ارسال ویدئو و تمرین جلسات</h4>
                <p>
                  به صورت هفتگی ویدئو جلسات برای هنرآموز ارسال می شود و هنرآموز
                  پس از یادگیری، تمرین آن جلسه را تا پایان هفته برای استاد ارسال
                  می کند
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-step">
                <h4>جلسه رفع اشکال آنلاین</h4>
                <p>
                  در میانه دوره یک جلسه به صورت آنلاین برگزار می شود که در آن به
                  رفع اشکال هنر آموزان پرداخته می شود
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="process-step">
                <h4>ارتباط با استاد</h4>
                <p>
                  تمرین ارسالی، توسط استاد بررسی و نمـــــره هر جلسـه در
                  پلتفــــرم برای هنرآموز نمایش داده می شود
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-step">
                <h4>مشاوره در طول دوره </h4>
                <p>
                  در طول دوره مشاور آموزشی با هنرآموز در ارتباط بوده و از روند
                  پیشرفت هنرآموز مطلع میرشود
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-step">
                <h4>برگزاری ورکشاپ</h4>
                <p>
                  در انتهای دوره، یک ورکشاپ به صـــــورت حضـــــوری برگــــزار
                  مــــی شــــود تا هنــــــرآمـــــــــــوزان سؤالات خود را در
                  خصوص تمرین نهایی مطرح نمایند
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-step">
                <h4>اتمام دوره و اعلام نمرات</h4>
                <p>
                  پس از اتمــــــام دوره نمــــــرات نهایــــی اعلام مــــی
                  شـــــود و در صورتی که نمرۀ هنرآمــــــوز به حدنصاب رسیده
                  باشــــد برای اتصــال به بازارکـــــــــار معرفــــی می شود
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
    </React.Fragment>
  );
};

export default LearningProcessPage;
