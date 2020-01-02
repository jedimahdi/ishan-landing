import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { SettingsContext } from '../../../providers/settings/settings.provider';

const NavItem = ({}) => {
  return (
    <li className="dropdown yamm-fw">
      <Link
        className=" dropdown-toggle"
        to="/"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span>درباره ما</span>
      </Link>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li className="mega-menu container">
          <div className="row yamm-content">
            <div className="col-md-3">
              <div className="attention">
                <aside>
                  <p>
                    Founded in 1997, Gnomon has trained thousands of students
                    and professionals for careers in the entertainment industry.
                  </p>
                  <p className="last">
                    <Link to="/about">
                      بیشتر
                      <i className="fa fa-long-arrow-left fa-pad-left green-icon" />
                    </Link>
                  </p>
                </aside>
              </div>
              <div className="separator" />
              <aside>
                <ul className="subsection-links">
                  <li>
                    <a href="https://www.gnomon.edu/about/staff">
                      Staff &amp; Advisory Board
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gnomon.edu/about/accreditation">
                      Accreditation Information
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gnomon.edu/about/consumer-disclosures">
                      Consumer Disclosures
                    </a>
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
                  src="https://www.gnomon.edu/assets/navigation/about_alumni_1140-399862295f54fde56b005033ebb4803cad3ff3fe70332021518bdd3436dde0cd.jpg"
                  alt="About alumni 1140"
                />
                <img
                  className="drop-shadow img-responsive-full visible-md"
                  src="https://www.gnomon.edu/assets/navigation/about_alumni_970-1aa50bfb8eb7cc455bdf6820842d16a8b78bc3fd32fdc717a9a5bfdade98677d.jpg"
                  alt="About alumni 970"
                />
                <h3>Alumni Success Stories</h3>
                <p>
                  Gnomon strives to place graduates into their dream jobs right
                  out of school.
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
                  src="https://www.gnomon.edu/assets/navigation/about_campus_1140-55bf8220306c9af1e60f390c957dd0c50e96eeec748931062dbdc85a19e20875.jpg"
                  alt="About campus 1140"
                />
                <img
                  className="drop-shadow img-responsive-full visible-md"
                  src="https://www.gnomon.edu/assets/navigation/about_campus_970-3bcd0c619d6f772152ca926fb8917f694142d864cd2eb67f1ce18a358c86386b.jpg"
                  alt="About campus 970"
                />
                <h3>Campus</h3>
                <p>
                  Our 30,000 sq ft. facility has been designed to create a
                  production-like environment conducive to creativity and
                  learning.
                </p>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="subsection-grid-item"
                href="https://www.gnomon.edu/about/instructors"
              >
                <img
                  className="drop-shadow img-responsive-full visible-lg"
                  src="https://www.gnomon.edu/assets/navigation/about_instructors_1140-2a472a22ca062339095b6e8f994650d34c4740cb136f10526bbf650cff54123f.jpg"
                  alt="About instructors 1140"
                />
                <img
                  className="drop-shadow img-responsive-full visible-md"
                  src="https://www.gnomon.edu/assets/navigation/about_instructors_970-31c50a046a1de5b454791844164a50ff9c9c169408a44b26f3fcffab11f54de9.jpg"
                  alt="About instructors 970"
                />
                <h3>Instructors</h3>
                <p>
                  Gnomon’s instructors are working professionals teaching
                  techniques from their specific areas of expertise.
                </p>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};

const Header = ({ media, small }) => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <header>
      <div className="masthead" style={{ height: `${small ? '45' : '80'}vh` }}>
        {media ? (
          <div
            className="bg-video"
            style={{
              backgroundImage: `url(${media})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}
          ></div>
        ) : (
          <div className="bg-video">
            <ReactPlayer
              id="bg-video"
              url={settingItems['homepage_header_video']}
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
        )}
        <div className="main-menu-container">
          <nav
            className="navbar navbar-inverse gnomon-navbar yamm"
            role="navigation"
          >
            <ul className="nav navbar-nav container-lg">
              <NavItem />
              <NavItem />
              <NavItem />
              <NavItem />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
