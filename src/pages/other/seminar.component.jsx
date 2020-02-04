import React from 'react';

import Header from '../../components/homepage/header/header.component';

import Image1Src from '../../assets/images/other/SEMINAR.jpg';

import './internship.styles.scss';

const SeminarPage = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="همایش‌ها" />
      <section id="internship" className="text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_group">
                <h2>
                  برگزاری سمینار در دانشگاه و مدارس و بازدید از استودیو و شرکت
                  های فعال
                </h2>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <p>
                    یک فرصت عالی جهت مشاوره و بازدید و دیدن پایپ لاین کاری در
                    بخش های مختلف برای شما وجود دارد و می توانید با اشخاصی که در
                    صنعت فعالیت میکنند بنشینید و مشاوره بگیرید
                  </p>
                  <ul className="left-side" style={{ marginBottom: '20px' }}>
                    <li>
                      مشاوره در حوزه های هنرهای دیجیتالی-برنامه نویسی-بازیسازی
                    </li>
                    <li>
                      مدیریت و مشاوره در ضمینه پایپ لاین تولید و استفاده از
                      متدهای روز دنیا
                    </li>
                    <li>خدمات مشاوره بازار</li>
                    <li>
                      ارایه خدمات حقوقی جهت مشاوره در قرارداد های داخلی و بین
                      المللی
                    </li>
                  </ul>
                  <p>
                    امکان مشاوره از ساعت 10:30 الی 16 با هماهنگی قبلی وجود دارد
                    و افراد می توانند جهت مشاوره حضوری با توجه به زمینه فعالیت
                    به استودیو ها و شرکت های همکار معرفی شوند
                  </p>
                  <p>
                    شما می توانید درخواست برگزاری سمینار های تخصصی و مسابقات را
                    در دانشگاه و شهر خود از طریق ایمیل با موضوع درخواستی بفرستید
                    و با بررسی های مورد نظر حتما هر چه زودتر در شهر و دانشگاه
                    شما خواهیم بود
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

export default SeminarPage;
