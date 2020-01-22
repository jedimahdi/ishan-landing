import React from 'react';
import ReactDOM from 'react-dom';

import Image1Src from '../../../assets/images/header/shetabdahandeh-HEDEAR.jpg';
import Image2Src from '../../../assets/images/header/fani-HEADER.jpg';

const ReceptionOverlay = props => {
  const content = (
    <div className="dialogue row yamm-content main-menu-container">
      <div className="col-md-4">
        <div className="attention">
          <aside>
            <p>
              مجموعه آیشن در جهت تیم سازی و حمایت از صاحبان ایده برنامه های
              متعددی دارد که فراگیر پس از پایان دوره بتواند دانش خود را به
              بهترین شکل مکن به کار بگیرد
            </p>
          </aside>
        </div>
        <div className="separator" />
        <aside>
          <ul className="subsection-links">
            <li>
              <a href="https://www.gnomon.edu/about/staff">فضای کار اشتراکی</a>
            </li>
            <li>
              <a href="https://www.gnomon.edu/about/staff">خدمات منتورینگ</a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="col-md-4">
        <a
          className="subsection-grid-item"
          href="https://www.gnomon.edu/about/alumni"
        >
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image1Src}
            alt="About alumni 1140"
          />
          <h3>شتابدهی</h3>
          <p>
            از تیم های استارت‌آپی که ایده‌ های مورد تأیید ما را دارند حمایت
            می‌کنیم، درواقع ایده‌های استارت‌آپ‌های مختلف را گلچین می‌کنیم و
            بهترین آن‌ها که در کمترین زمان به بیشترین پیشرفت برسد را انتخاب
            می‌کنیم.
          </p>
        </a>
      </div>
      <div className="col-md-4">
        <a
          className="subsection-grid-item"
          href="https://www.gnomon.edu/about/campus"
        >
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image2Src}
            alt="About campus 1140"
          />
          <h3>خدمات فنی</h3>
          <p>
            تمامی امکانات فنی و نوین شرکت رایمون مدیا زیر یک سقف و به بهترین نحو
            در اختیار فعالان این حوزه قرار خواهد گرفت.
          </p>
        </a>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default ReceptionOverlay;
