import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SettingsContext } from '../../providers/settings/settings.provider';

import './footer.styles.scss';

const Footer = () => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <footer className="text-right">
      <div className="seprator" />
      <div className="container">
        <div className="row social-and-logins">
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <div className="social social-left">
              <ul>
                <li>
                  <Link target="_blank" to="/">
                    <i className="fa fa-facebook-square" />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="/">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="/">
                    <i className="fa fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="/">
                    <i className="fa fa-pinterest" />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="/">
                    <i className="fa fa-vimeo-square" />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="/">
                    <i className="fa fa-youtube" />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="/">
                    <i className="fa fa-twitch" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-6 col-md-3 col-lg-4">
            <div className="social">
              <ul>
                <li className="mailing-list">
                  <Link to="/">
                    <i className="fa fa-envelope fa-lg" />
                    <span className="hidden-tn">
                      اضافه شدن به لیست گیرنده ایمیل ها
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-5 col-lg-4">
            <div className="row logins">
              <div className="col-sm-6">
                <Link to="/" className="online">
                  <span>کلاس های انلاین</span>
                </Link>
                <i className="fa fa-long-arrow-left fa-pad-left-hidden-tn" />
              </div>
              <div className="col-sm-6">
                <Link to="/" className="empower">
                  <span>پرتال دانشجو</span>
                </Link>
                <i className="fa fa-long-arrow-left fa-pad-left-hidden-tn" />
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
            <Link to="/">Gnomon</Link>
            <br />
            {settingItems['contact_address']}
          </div>
          <div className="col-md-3 col-lg-2 col-sm-3">
            ایمیل : <Link to="/">{settingItems['contact_email']}</Link>
            <br />
            تلفن :‌ {settingItems['contact_number']}
          </div>
          <div className="col-xs-6 col-sm-3 col-md-2 col-lg-2">
            <Link to="https://www.gnomon.edu/about/accreditation">
              Accreditation
            </Link>
            <br />
            <Link to="https://www.gnomon.edu/about/consumer-disclosures">
              Students Right to Know
            </Link>
            <br />
            <Link to="https://www.gnomon.edu/about/consumer-disclosures">
              Consumer Disclosures
            </Link>
            <br />
            <Link to="https://www.gnomon.edu/files/net-price-calculator/npcalc.htm">
              Net Price Calculator
            </Link>
          </div>
          <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
            <Link to="https://www.gnomon.edu/non-discrimination-policy">
              Non-Discrimination Policy
            </Link>
            <br />
            <Link to="https://www.gnomon.edu/privacy-policy">
              Privacy Policy
            </Link>
            <br />
            <Link to="https://www.gnomon.edu/files/gnomon-catalog.pdf">
              Student Catalog
            </Link>
            <br />
            <Link to="https://www.gnomon.edu/disclosures-policies">
              Disclosures &amp; Policies
            </Link>
          </div>
          <div className="hidden-xs col-sm-3 col-md-2 col-lg-4 copyright">
            <span className="hidden-md hidden-sm hidden-xs">
              {settingItems['homepage_footer_about']}
            </span>
            <br className="hidden-xs hidden-sm hidden-md" />
            ©ایشن ۱۳۹۸
            <span className="visible-lg"></span>
            <br className="hidden-lg" />
            All rights reserved.
          </div>
        </div>
      </div>

      <div className="seprator" />
    </footer>
  );
};

export default Footer;
