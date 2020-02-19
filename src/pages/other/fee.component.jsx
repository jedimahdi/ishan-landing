import React from 'react'

import Header from '../../components/homepage/header/header.component'
import Image1Src from '../../assets/images/other/shahriyeh.jpg'
import './enroll.styles.scss'

const EnrollPage = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="نحوه پرداخت شهریه" />
      <section className="steps-section text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="title_group">
            <h2>شهریه و نحوه پرداخت</h2>
            <p>
              شهریه دوره ها و رشته ها بر اساس ساعات و شاخص های مهارتی آن رشته
              تعیین شده است{' '}
            </p>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <div className="step-section">
                <h4>گزینه های پرداخت</h4>
                <p>
                  پرداخت شهریه دوره ها پس از تعیین صلاحیت هنرآموز باید به صورت
                  کامل پرداخت شود در صورتی که فراگیر تمایل به پرداخت شهریه ب
                  وصرت اقسازی می باشد باید ابتدا ۶۰ درصد مبلغ دوره را پرداخت
                  نمده و مابقی را پس از گذشت نیمی از دوره به صورت کامل پرداخت
                  نماید در غیر اینصورت از ادامه دوره منع گردیده و هزینه ای به
                  فراگیر استرداد نمی شود{' '}
                </p>
              </div>

              <div className="step-section">
                <h4>کمک ها و تخفیفات مالی</h4>
                <p>
                  در صورتی که فراگیر در دوره برگزار شده امتیاز بالای ۹۵ را از
                  استاد بگیرد شامل ۲۵ درصد تخفیف برای دوره بعد خواهد شد و اگرهر
                  هنرآموز مجموعه آیشن فردی را جهت آموزش معرفی کند شامل ۱۰ درصد
                  تخفیف نیز خواهد بود
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
    </React.Fragment>
  )
}

export default EnrollPage
