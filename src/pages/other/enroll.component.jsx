import React, { useState } from 'react';

import Header from '../../components/homepage/header/header.component';
import Image1Src from '../../assets/images/other/sabtenam.jpg';
import Button from '../../shared/components/FormElements/Button';
import EnrollModal from '../../components/enroll-modal/enroll-modal.component';
import './enroll.styles.scss';

const EnrollPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <EnrollModal show={showModal} onCancel={() => setShowModal(false)} />

      <Header media={Image1Src} small breadcrump="نحوه پذیرش" />

      <section className="steps-section text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="title_group">
            <small>ورود به دروازه هنرهای دیجیتالی ،برنامه نویس،بازیسازی</small>
            <h2>نحوه پذیرش و ثبت نام</h2>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <p>
                مجموعه آیشن آموزش بنیادی را برای فراگیران فراهم می کند که
                میتوانند در رشته و زمینه فعالیت خود توانمند تر شده و رزومه قوی
                تری ایجاد کنند .مشاوران ما برای بحث در مورد اینکه آیا این دوره
                برای شما مناسب است ، در دسترس هستند .
              </p>

              <div className="step-section">
                <h4>مرحله اول </h4>
                <p>
                  فرم درخواست دوره و یا رشته مورد نظر را به صورت آنلاین پر کنید
                </p>
                <Button inverse onClick={() => setShowModal(true)}>
                  فرم ثبت نام
                </Button>
              </div>

              <div className="step-section">
                <h4>مرحله دوم</h4>
                <p>
                  اثبات توانایی و مهارت جهت حضور در دوره یا رشته انتخابی : پروژه
                  ها ، فعالیت ها و نمونه کارهای خود را ارسال می کنید و در صورت
                  تایید صلاحیت حضور شما در دوره یا رشته انتخابی ، مشاوران ما با
                  شما تماس خواهند گرفت{' '}
                </p>
              </div>

              <div className="step-section">
                <h4>مرحله سوم</h4>
                <p>اختصاص پنل فراگیر و پرداخت شهریه دوره و یا رشته مورد نظر</p>
              </div>
              <p>
                در صورت تعیین و تایید صلاحیت حضور شما در دوره یا رشته انتخابی ،
                مشاوران ما با شما تماس خواهند گرفت
              </p>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
    </React.Fragment>
  );
};

export default EnrollPage;
