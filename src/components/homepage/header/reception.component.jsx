import React from 'react';
import ReactDOM from 'react-dom';

import Image1Src from '../../../assets/images/header/MOSHAVEEH-HEADER.jpg';
import Image2Src from '../../../assets/images/header/sabtenam-HEADER.jpg';
import Image3Src from '../../../assets/images/header/shahriyeh-HEADER.jpg';

const ReceptionOverlay = props => {
  const content = (
    <div className="dialogue row yamm-content main-menu-container">
      <div className="col-md-3">
        <div className="attention">
          <aside>
            <p>
              {' '}
              پذیرش در آیشن ابتدا با ارسال درخواست دوره و یا رشته از طرف فراگیر
              شروع می شود و با توجه به توانمندی ها و نمونه کارهای ارسالی ،
              صلاحیت شما احراز و میتوانید فصل جدیدی از آموزش را شروع کنید
            </p>
          </aside>
        </div>
        <div className="separator" />
        <aside>
          <ul className="subsection-links">
            <li>
              <a href="https://www.gnomon.edu/about/staff">درخواست دوره</a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="col-md-3">
        <a
          className="subsection-grid-item"
          href="https://www.gnomon.edu/about/alumni"
        >
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image1Src}
            alt="About alumni 1140"
          />
          <h3>مشاوره و هدایت آموزشی</h3>
          <p>
            س از اعلام آمادگی هنرآموز در سایت ، جهت مشاوره و تعیین سطح و بررسیِ
            قابلیت ها و ظرفیت های هنرآموز، با ایشان ارتباط برقرارکرده و مشخص می
            شود که هنرآموز در کدام دوره ( دورۀ اتصال به بازارکار یا دورۀ مهارت
            افزایی ) می تواند ثبت نام نماید.
          </p>
        </a>
      </div>
      <div className="col-md-3">
        <a
          className="subsection-grid-item"
          href="https://www.gnomon.edu/about/campus"
        >
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image2Src}
            alt="About campus 1140"
          />
          <h3>نحوه ثبت نام</h3>
          <p>فرم درخواست دوره و یا رشته مورد نظر را به صورت آنلاین پر کنید</p>
        </a>
      </div>
      <div className="col-md-3">
        <a
          className="subsection-grid-item"
          href="https://www.gnomon.edu/about/instructors"
        >
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image3Src}
            alt="About instructors 1140"
          />
          <h3>پرداخت شهریه</h3>
          <p>
            شهریه دوره ها و رشته ها بر اساس ساعات و شاخص های مهارتی آن رشته
            تعیین شده است{' '}
          </p>
        </a>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default ReceptionOverlay;
