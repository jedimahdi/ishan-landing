import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { SettingsContext } from '../../../providers/settings/settings.provider';

const Header = () => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <header>
      <div className="masthead">
        <div className="bg-video">
          <ReactPlayer
            id="bg-video"
            url={settingItems['homepage_header_video']}
            width="100%"
            height="100%"
            playing={true}
          />
        </div>
        <div className="main-menu-container">
          <nav
            className="navbar navbar-inverse gnomon-navbar yamm"
            role="navigation"
          >
            <ul className="nav navbar-nav container-lg">
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

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li className="mega-menu container">
                    <div className="row yamm-content">
                      <div className="col-md-3">
                        <div className="attention">
                          <aside>
                            <p>
                              Founded in 1997, Gnomon has trained thousands of
                              students and professionals for careers in the
                              entertainment industry.
                            </p>
                            <p className="last">
                              <a href="https://www.gnomon.edu/about">
                                Find out more
                                <i className="fa fa-long-arrow-right fa-pad-left green-icon" />
                              </a>
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
                            Gnomon strives to place graduates into their dream
                            jobs right out of school.
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
                            Our 30,000 sq ft. facility has been designed to
                            create a production-like environment conducive to
                            creativity and learning.
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
                            Gnomon’s instructors are working professionals
                            teaching techniques from their specific areas of
                            expertise.
                          </p>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown yamm-fw">
                <Link
                  className=" dropdown-toggle"
                  to="/"
                  role="button"
                  id="dropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>دوره ها</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="mega-menu container">
                    <div className="row yamm-content">
                      <div className="col-md-4">
                        <a
                          className="subsection-grid-item"
                          href="https://www.gnomon.edu/showcase"
                        >
                          <img
                            className="drop-shadow img-responsive-full visible-lg"
                            src="https://www.gnomon.edu/assets/navigation/showcase_gallery_1140-3e7bc7e1ade7bc95b6ec4245e89de3f94b9e289156f47ca86bb13a12c978814b.jpg"
                            alt="Showcase gallery 1140"
                          />
                          <h3>Student Gallery</h3>
                          <p>
                            Take a look at some of the traditional and digital
                            artwork Gnomon students produce during their
                            education.
                          </p>
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          className="subsection-grid-item"
                          href="https://www.gnomon.edu/showcase/graduate-reels"
                        >
                          <img
                            className="drop-shadow img-responsive-full visible-lg"
                            src="https://www.gnomon.edu/assets/navigation/showcase_grad-reels_1140-971d4a799458fb6214c06ba823627a953cc3b522521deaf9ffcc31d9632f2765.jpg"
                            alt="Showcase grad reels 1140"
                          />
                          <h3>Graduate Reels</h3>
                          <p>
                            These student reels are the culmination of the
                            education and training students receive at Gnomon.
                          </p>
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          className="subsection-grid-item"
                          href="https://www.gnomon.edu/showcase/best-of-term"
                        >
                          <img
                            className="drop-shadow img-responsive-full visible-lg"
                            src="https://www.gnomon.edu/assets/navigation/showcase_best-of-term_1140-bfae116182be783ff17191e7fcd9862256638a57715f6d92e26927c3cc09acbd.jpg"
                            alt="Showcase best of term 1140"
                          />
                          <h3>Best of Term</h3>
                          <p>
                            The Gnomon Best of Term competition recognizes the
                            best work being done by Gnomon students.
                          </p>
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown yamm-fw">
                <Link
                  className=" dropdown-toggle"
                  to="/"
                  role="button"
                  id="dropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>مقالات</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="mega-menu container">
                    <div className="row yamm-content">
                      <div className="col-md-4">
                        <div className="attention high">
                          <aside>
                            <p>
                              Gnomon regularly hosts inspiring and educational
                              events featuring some of the most talented artists
                              working in film and games.
                            </p>
                          </aside>
                        </div>
                        <div className="separator" />
                        <aside>
                          <ul className="subsection-links">
                            <li>
                              <a href="https://www.gnomon.edu/community/gnomon-gallery">
                                Browse Gallery Shows
                              </a>
                            </li>
                            <li>
                              <a href="https://www.gnomon.edu/community/events">
                                Browse Events
                              </a>
                            </li>
                          </ul>
                        </aside>
                      </div>
                      <div className="col-md-4">
                        <a
                          className="subsection-grid-item"
                          href="https://www.gnomon.edu/community/gnomon-gallery/marvel-studios-visual-development-concept-art-of-the-mcu"
                        >
                          <img
                            className="drop-shadow img-responsive-full visible-lg"
                            src="https://d2kektcjb0ajja.cloudfront.net/images/events/thumbs/000/000/259/thumb-1573519085-conceptartMCU_v2_gThumb.jpg?1573519085"
                            alt="Thumb 1573519085 conceptartmcu v2 gthumb"
                          />
                          <h3>
                            Marvel Studios Visual Development: Concept Art of
                            the Marvel Cinematic Universe
                          </h3>
                          <p className="large">
                            At Gnomon Gallery
                            <br />
                            On display until January 31st, 2020
                          </p>
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          className="subsection-grid-item"
                          href="https://www.gnomon.edu/community/events/kitbash3d-and-the-virtual-frontier"
                        >
                          <img
                            className="drop-shadow img-responsive-full visible-lg"
                            src="https://d2kektcjb0ajja.cloudfront.net/images/events/thumbs/000/000/260/thumb-1574731152-kitbash3d_v1C_gThumb.jpg?1574731152"
                            alt="Thumb 1574731152 kitbash3d v1c gthumb"
                          />
                          <h3>KitBash3d and the Virtual Frontier</h3>
                          <p className="large">Thursday, December 12th</p>
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
