import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SettingsContext } from '../../../providers/settings/settings.provider';

import './events.styles.scss';

const Events = () => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <section className="community-events text-right">
      <div className="seprator-lg" />

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="title-block">
              <div className="title">رویداد ها</div>
              <p>
                <Link to="/" className="link-white">
                  جستجو رویدادها <i className="fa fa-long-arrow-left" />
                </Link>
                <br />
                <Link to="/" className="link-white">
                  جستجو گالری ها <i className="fa fa-long-arrow-left" />
                </Link>
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <Link to="/" className="content-block transparent">
              <div className="thumbnails">
                <div className="overlay" />
                <img
                  className="img-responsive-full"
                  src="https://d2kektcjb0ajja.cloudfront.net/images/events/thumbs/000/000/260/thumb-1574731152-kitbash3d_v1C_gThumb.jpg?1574731152"
                  alt=""
                />
              </div>
              <div className="description">
                <h4>رویداد اشنایی با تست</h4>
                Thursday, October 10th, 2019
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-6">
            <Link to="/" className="content-block transparent">
              <div className="thumbnails">
                <div className="overlay" />
                <img
                  className="img-responsive-full"
                  src="https://d2kektcjb0ajja.cloudfront.net/images/events/thumbs/000/000/259/thumb-1573519085-conceptartMCU_v2_gThumb.jpg?1573519085"
                  alt=""
                />
              </div>
              <div className="description">
                <h4>رویداد اشنایی با تست</h4>
                Thursday, October 10th, 2019
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-6">
            <Link to="/" className="content-block transparent">
              <div className="thumbnails">
                <div className="overlay" />
                <img
                  className="img-responsive-full"
                  src="https://d2kektcjb0ajja.cloudfront.net/images/events/thumbs/000/000/256/thumb-1569613155-clarisse_gThumb.jpg?1569613155"
                  alt=""
                />
              </div>
              <div className="description">
                <h4>رویداد اشنایی با تست</h4>
                Thursday, October 10th, 2019
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-6">
            <Link to="/" className="content-block transparent">
              <div className="thumbnails">
                <div className="overlay" />
                <img
                  className="img-responsive-full"
                  src="https://d2kektcjb0ajja.cloudfront.net/images/events/thumbs/000/000/257/thumb-1571701456-borderlands3_v2_gThumb.jpg?1571701456"
                  alt=""
                />
              </div>
              <div className="description">
                <h4>رویداد اشنایی با تست</h4>
                Thursday, October 10th, 2019
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-6">
            <Link to="/" className="content-block transparent">
              <div className="thumbnails">
                <div className="overlay" />
                <img
                  className="img-responsive-full"
                  src="https://d2kektcjb0ajja.cloudfront.net/images/events/thumbs/000/000/258/thumb-1573174661-avengers_v1_gThumb.jpg?1573174661"
                  alt=""
                />
              </div>
              <div className="description">
                <h4>رویداد اشنایی با تست</h4>
                Thursday, October 10th, 2019
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="seprator" />
    </section>
  );
};

export default Events;
