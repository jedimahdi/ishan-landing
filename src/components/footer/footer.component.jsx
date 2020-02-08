import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import {SettingsContext} from '../../providers/settings/settings.provider'
import {toPersianDigits} from '../../shared/util/helpers'

import './footer.styles.scss'

const Footer = () => {
  const {settingItems} = useContext(SettingsContext)

  return (
    <footer className="text-right">
      <div className="seprator" />
      <div className="container">
        <div className="row social-and-logins align-items-center">
          <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2">
            <div className="social social-left">
              <ul>
                <li>
                  <a href="https://t.me/ishan_online">
                    <i className="fa fa-telegram" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/989032344166">
                    <i className="fa fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-6 col-md-6 col-lg-8">
            <div className="social">
              <ul>
                <li className="mailing-list">
                  <div className="mailing-list-row align-items-center">
                    <div className="rss text-white">
                      عضویت در خبرنامه و دریافت اخرین اخبار
                    </div>
                    <div className="form-input">
                      <input placeholder="ایمیل خود را وارد کنید" />
                    </div>
                    <button>ثبت</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-2 col-lg-2">
            <div className="row logins">
              <div className="col-sm-12">
                <Link to="/calendar" className="empower">
                  <span>تقویم دوره‌ها</span>
                  <i className="fa fa-long-arrow-left fa-pad-left-hidden-tn" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seprator" />
      <hr />
      <div className="seprator" />

      <div className="container">
        <div className="row company-info">
          <div className="col-md-2 col-lg-2">
            <Link to="/">آیشن</Link>
            <br />
            {settingItems['contact_address']}
          </div>
          <div className="col-md-3 col-lg-2 col-sm-3">
            ایمیل : <Link to="/">{settingItems['contact_email']}</Link>
            <br />
            تلفن :‌ {toPersianDigits(settingItems['contact_number'])}
          </div>
          <div className="col-xs-6 col-sm-3 col-md-2 col-lg-2">
            <Link to="/contact">ارتباط با ما</Link>
            <br />
            <Link to="/terms">قوانین و مقررات</Link>
            <br />
            <Link to="/instructors">مربیان آموزشی</Link>
          </div>
          <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
            <Link to="/faq">سوالات متدوال</Link>
            <br />
            <Link to="/education">مشاوره و هدایت آموزشی</Link>
            <br />
            <Link to="/enroll">نحوه ثبت نام</Link>
          </div>
          <div className="hidden-xs col-sm-3 col-md-2 col-lg-4 copyright">
            {/* <span className="hidden-md hidden-sm hidden-xs">
              {settingItems['homepage_footer_about']}
            </span> */}
            {/* <br className="hidden-xs hidden-sm hidden-md" /> */}© ایشن ۱۳۹۸
            <span className="visible-lg"></span>
            <br className="hidden-lg" />
            All rights reserved.
          </div>
        </div>
      </div>

      <div className="seprator" />
    </footer>
  )
}

export default Footer
