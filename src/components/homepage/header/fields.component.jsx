import React from 'react';
import ReactDOM from 'react-dom';

import Image1Src from '../../../assets/images/fields/animat.jpg';
import Image2Src from '../../../assets/images/fields/texturing.jpg';
import Image3Src from '../../../assets/images/fields/vfx.jpg';
import Image4Src from '../../../assets/images/fields/django.jpg';
import Image5Src from '../../../assets/images/fields/RIG.jpg';
import Image6Src from '../../../assets/images/fields/RENDER.jpg';

const FieldsOverlay = props => {
  const content = (
    <div className="dialogue yamm-content main-menu-container">
      <div className="row">
        <div className="col-md-4">
          <a
            className="subsection-grid-item"
            href="https://www.gnomon.edu/academics/foundation-in-art-&amp;-design"
          >
            <img
              className="drop-shadow img-responsive-full visible-lg"
              src={Image1Src}
              alt="Programs fad 1140"
            />
            <h3>رشته انیمیت</h3>
            <h5>10 الی 12ماهه ، هفته ای یک جلسه</h5>
            <p>
              در رشته انیمیت ابتدا شما با یک نرم افزار مایا آشنا می شوید و تمام
              فرآیند کاری در این نرم افزار را آموزش می بینید ، سپس در ترم دوم با
              ویژگی های انیمیت آشنا می شوید و ترم سوم با توجه به داده ها می
              توانید در یک پروژه واقعی قرار بگیرید
            </p>
          </a>
        </div>

        <div className="col-md-4">
          <a
            className="subsection-grid-item"
            href="https://www.gnomon.edu/academics/foundation-in-art-&amp;-design"
          >
            <img
              className="drop-shadow img-responsive-full visible-lg"
              src={Image2Src}
              alt="Programs fad 1140"
            />
            <h3>رشته تکسچر</h3>
            <h5>6 الی 8 ماهه، هفته ای یک جلسه</h5>
            <p>
              رشته تکسچر ابتدا در ترم اول با نرم افزار سابستنس شروع می شود و فرد
              با دانش طراحی وارد ترم دوم شده که شیدینگ در مایا را فرا میگیرد و
              سپس وارد ترم سوم شده و مباحث مربوط به تکسچرینگ را به صورت تخصصی
              آموزش میبیند
            </p>
          </a>
        </div>

        <div className="col-md-4">
          <a
            className="subsection-grid-item"
            href="https://www.gnomon.edu/academics/foundation-in-art-&amp;-design"
          >
            <img
              className="drop-shadow img-responsive-full visible-lg"
              src={Image3Src}
              alt="Programs fad 1140"
            />
            <h3>رشته vfx</h3>
            <h5>9 الی 11 ماهه</h5>
            <p>
              vfx یکی از رشته های جذاب برای مخاطبین می باشد چرا که شما میتوانید
              خلاقیت و خیالات را در کار بگیرید و هر صحنه ای را که دوست دارید
              بسازید ، این رشته در مجموعه آیشن در ترم اول با هودینی آغاز شه و
              مباحث مربوط به جلوه های ویژه به صورت کامل توضیح داده می شود
            </p>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <a
            className="subsection-grid-item"
            href="https://www.gnomon.edu/academics/foundation-in-art-&amp;-design"
          >
            <img
              className="drop-shadow img-responsive-full visible-lg"
              src={Image4Src}
              alt="Programs fad 1140"
            />
            <h3>رشته جنگو</h3>
            <h5>5 الی 7 ماهه</h5>
            <p>
              فریم ورک جنگو برای اونایی که علاقه مند به برنامه نویسی back-end
              هستند همواره جذاب بوده . شما در این رشته ابتدا با زبان برنامه
              نویسی پایتون آشنا خواهید شد و بعد از اون میتونید با میانی لینوکس و
              گیت ، آموزش فریم ورک جنگو فصل جدیدی رو توی بازار کاری برای خودتون
              فراهم کنید
            </p>
          </a>
        </div>

        <div className="col-md-4">
          <a
            className="subsection-grid-item"
            href="https://www.gnomon.edu/academics/foundation-in-art-&amp;-design"
          >
            <img
              className="drop-shadow img-responsive-full visible-lg"
              src={Image5Src}
              alt="Programs fad 1140"
            />
            <h3>رشته ریگر</h3>
            <h5>9الی 12 ماهه</h5>
            <p>
              در رشته ریگر شما در ترم اول با مبانی مایا آشنا می شوید و سپس در
              ترم دوم اسکریپتینگ می خوانید و در ترم سوم وارد ریگ مقدماتی ، ترم
              چارم متوسط و ترم پنجم پیشرفته خواهید شد
            </p>
          </a>
        </div>

        <div className="col-md-4">
          <a
            className="subsection-grid-item"
            href="https://www.gnomon.edu/academics/foundation-in-art-&amp;-design"
          >
            <img
              className="drop-shadow img-responsive-full visible-lg"
              src={Image6Src}
              alt="Programs fad 1140"
            />
            <h3>مدلینگ بلندر</h3>
            <h5>4الی5 ماهه</h5>
            <p>
              در دوره آموزشی بلندر در ترم اول یک توضیح کاملی در مورد امکانات و
              ابزار بلندر توضیح داده میشود و در ترم دوم به صورت تخصصی روی مدلینگ
              صحبت خواهد شد.
            </p>
          </a>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default FieldsOverlay;
