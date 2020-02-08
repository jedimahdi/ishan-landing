import React from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom'

import Image1Src from '../../../assets/images/header/ertebatbama.jpg'
import Image2Src from '../../../assets/images/header/ghavanin.jpg'
import Image3Src from '../../../assets/images/other/asatid.jpg'

const AboutOverlay = props => {
  const content = (
    <div className="custom-modal row yamm-content main-menu-container">
      <div className="col-md-3">
        <div className="attention">
          <aside>
            <p>
              آیشن با هدف آموزش نیروهای خلاق و کارآمد بازار کار، در حیطه هنرهای
              دیجیتالی ، بازی سازی و برنامه نویسی شروع به فعالیت کرده است
            </p>
          </aside>
        </div>
        <div className="separator" />
        <aside>
          <ul className="subsection-links">
            <li>
              <Link to="/learning_process">فرآیند آموزشی در پلتفرم آیشن</Link>
            </li>
            <li>
              <Link to="/internship">کارآموزی و افزایش مهارت</Link>
            </li>
            <li>
              <Link to="/labor">دروازه ای برای ورود به بازار کار</Link>
            </li>
          </ul>
        </aside>
      </div>
      <div className="col-md-3">
        <Link className="subsection-grid-item" to="/contact">
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image1Src}
            alt="About alumni 1140"
          />
          <h3>ارتباط با ما</h3>
          <p>راه ای ارتباطی مختلفی برای تسهیل هرچه بهتر در نظر گرفته شده است</p>
        </Link>
      </div>
      <div className="col-md-3">
        <Link className="subsection-grid-item" to="/terms">
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image2Src}
            alt="About campus 1140"
          />
          <h3>قوانین و مقررات</h3>
          <p>هنرجو و متقاضی محترم لطفا یا دقت قوانین و مقررات را مطالعه کنید</p>
        </Link>
      </div>
      <div className="col-md-3">
        <Link className="subsection-grid-item" to="/instructors">
          <img
            className="drop-shadow img-responsive-full visible-lg"
            src={Image3Src}
            alt="About instructors 1140"
          />
          <h3>مربیان آموزشی</h3>
          <p>
            استفاده از اساتید به نام و مجرب در جهت پرورش نیروهای خلاق و توانمند
            که نیاز صنعت و بازار را به خوبی می شناسند
          </p>
        </Link>
      </div>
    </div>
  )

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

export default AboutOverlay
