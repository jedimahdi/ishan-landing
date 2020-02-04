import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';

import Image1Src from '../../assets/images/other/KARVARZI.jpg';

import './internship.styles.scss';
import ButtonIcon from '../../shared/components/FormElements/ButtonIcon';

const InternshipPage = () => {
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
                    <Link to="/learning_process">فرایند آموزشی در پلتفرم</Link>
                  </li>
                  <li>
                    <Link
                      to="/internship"
                      disabled
                      className="not-link-highlight"
                    >
                      کارآموزی و افزایش مهارت
                    </Link>
                  </li>
                  <li>
                    <Link to="/labor">دروازه ای برای ورود به بازار کار</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="title_group">
                <h2>کارآموزی و افزایش مهارت</h2>
                <small>مخصوص رشته های اتصال به بازار کار</small>
              </div>

              <div className="row">
                <div className="col-md-7">
                  <p>
                    طرح کارورزی امکان و فرصتی برای آشنایی فراگیران با محیط کار
                    محسوب می شود که نه تنها باعث افزایش قابلیت های آنان برای
                    اشتغال در آینده می شود بلکه به کارورزان قدرت انتخاب بیشتری
                    در انجام وظایف ارائه شده می دهد تا بتوانند بهتر به علاقمندی
                    ها و گرایش های خود در زمینه های مختلف پی برده و نقاط ضعف و
                    قوت کار خود را ارزیابی کنند. کارورزی یک تجربه دست اول و عملی
                    است که دانش آموختگان مهارت های شغلی مهمی را همانند برقراری
                    ارتباط، تعهد کاری، وقت شناسی، حل مساله، کارگروهی،
                    خودمدیریتی، برنامه‌ریزی و سازماندهی و آشنایی با فن‌آوری
                    بیاموزد که امروزه برای شاغل شدن بسیار واجب و ضروری هستند.
                  </p>
                </div>

                <div className="col-md-5">
                  <ul className="left-side">
                    <li>
                      طرح کارورزی تنها شامل فراگیرانی می شود که یک رشته را
                      انتخاب کرده باشند
                    </li>
                    <li>
                      زمان انتخاب رشته توجه به وجود کارورزی در آن دوره یا رشته
                      بفرمایید
                    </li>
                    <li>
                      کارورزی برای فراگیرانی می باشد که نمرات بالای 95 در طول
                      دوره گرفته باشند
                    </li>
                    <li>
                      تعداد روز و ساعات کارورزی بنا به ویژگی های دوره و آمادگی
                      کارفرما می باشد{' '}
                    </li>
                    <li>
                      پرداخت مالی در دوره کارورزی بنا به نظرات کارفرمایان می
                      باشد که در زمان مصاحبه مشخص خواهد شد.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="get-started">
                سفر خود را به دنیای آموزش و مهارت آغاز کنید
              </div>

              <div className="btn-wrapper">
                <ButtonIcon>با یک مشاور صحبت کنید</ButtonIcon>
                <ButtonIcon> پذیرش و ثبت نام</ButtonIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
    </React.Fragment>
  );
};

export default InternshipPage;
