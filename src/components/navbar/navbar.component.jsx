import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SettingsContext } from '../../providers/settings/settings.provider';
import { toPersianDigits } from '../../shared/util/helpers';
import Logo from '../../assets/images/logo.svg';

const Navbar = () => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-inverse navbar-dark ishan-topbar ">
      <div className="container">
        <div className="my-navbar">
          <div className="navbar-right">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo" className="logo" />
              آیشن
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <span>{settingItems['contact_address']}</span>
              </li>
              <li className="nav-item">
                <span>{toPersianDigits(settingItems['contact_number'])}</span>
              </li>
              <li className="nav-item">
                <Link to="/" className="academiclink">
                  <i className="fa fa-calendar" /> تقویم دوره ها
                </Link>
              </li>
              <li className="nav-itemm divider" />
              <li className="nav-item">
                <Link className="nav-link" to="/course">
                  بلاگ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
