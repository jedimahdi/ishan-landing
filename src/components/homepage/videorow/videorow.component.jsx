import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { SettingsContext } from '../../../providers/settings/settings.provider';

import './videorow.styles.scss';

const Videorow = () => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <section className="home_videorow">
      <div className="seprator-lg" />

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-right">
            <h4 className="title">
              {settingItems['homepage_introduction_title']}
            </h4>
            <div className="seprator" />
            <small className="subtitle">
              {settingItems['homepage_introduction_sub_title']}
            </small>
            <div className="seprator" />

            <ReactPlayer
              url={settingItems['homepage_introduction_video']}
              width="100%"
              height="500px"
              controls={true}
              playing={false}
              // light={true}
            />
          </div>
        </div>

        <div className="seprator" />
        <div className="seprator" />

        <div className="row programs-list text-center">
          <div className="col-sm-4">
            <Link to="/labor" className="program">
              <img
                className="img-responsive"
                src={settingItems['homepage_introduction_first_image']}
                alt="program"
              />
              <div className="program-title">
                {settingItems['homepage_introduction_first_title']}
              </div>
              <div className="program-subtitle">
                {settingItems['homepage_introduction_first_desc']}
              </div>
            </Link>
          </div>
          <div className="col-sm-4">
            <Link to="/internship" className="program">
              <img
                className="img-responsive"
                src={settingItems['homepage_introduction_second_image']}
                alt="program"
              />
              <div className="program-title">
                {settingItems['homepage_introduction_second_title']}
              </div>
              <div className="program-subtitle">
                {settingItems['homepage_introduction_second_desc']}
              </div>
            </Link>
          </div>
          <div className="col-sm-4">
            <Link to="/learning_process" className="program">
              <img
                className="img-responsive"
                src={settingItems['homepage_introduction_third_image']}
                alt="program"
              />
              <div className="program-title">
                {settingItems['homepage_introduction_third_title']}
              </div>
              <div className="program-subtitle">
                {settingItems['homepage_introduction_third_desc']}
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="seprator-lg" />
    </section>
  );
};

export default Videorow;
