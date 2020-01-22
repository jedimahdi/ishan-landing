import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './about.styles.scss';

const AboutPage = () => {
  return (
    <React.Fragment>
      <Header
        media="https://www.gnomon.edu/assets/masthead-gradient-3ad4ef328def7513b35239de408de7e91bf1e35950b2fc37a707093498d06eeb.png), url(https://www.gnomon.edu/assets/bg_pageheaders/bg_headerimages59-86a0d282aa2541d48d9b7fbb086524e6d38a43106654babd9e4b1d593672e0ef.jpg"
        small
        breadcrump="درباره ما"
      />
      <section id="about" className="text-right text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="row">
            <Sidebar title="درباره">
              <li>
                <Link>تست ۱</Link>
              </li>
              <li>
                <Link>تست 2</Link>
              </li>
            </Sidebar>
            <div className="col-md-9">
              <h2>درباره ما</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
