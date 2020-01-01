import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SettingsContext } from '../../../providers/settings/settings.provider';

import './teachers.styles.scss';

const Teachers = () => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <section className="browse-instructors">
      <div className="seprator-lg hidden-xs hidden-sm" />

      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <div className="title">
              {settingItems['homepage_teacher_title']}
            </div>
            <p>{settingItems['homepage_teacher_desc']}</p>
            <p>
              <Link to="/" className="link-larger">
                جستجو اساتید <i className="fa fa-long-arrow-left" />
              </Link>
            </p>
          </div>
          <div className="col-md-8">
            <img
              className="img-responsive"
              src={settingItems['homepage_teacher_image']}
              alt="instructors"
            />
          </div>
        </div>
      </div>

      <div className="seprator-lg" />
    </section>
  );
};
export default Teachers;
