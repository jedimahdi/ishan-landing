import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SettingsContext } from '../../../providers/settings/settings.provider';

import './rsvp.styles.scss';

const Rsvp = () => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <section
      className="rsvp"
      style={{
        backgroundImage: `url(${settingItems['homepage_tour_bg_image']})`
      }}
    >
      <div className="seprator-lg" />
      <div className="seprator-lg" />

      <div className="container">
        <div className="col-md-8 col-lg-7 text-right">
          <div className="title">{settingItems['homepage_tour_title']}</div>
          <div className="seprator" />
          <div className="seprator" />
          <Link
            to='/seminar'
            className="btn btn-primary"
          >
            {settingItems['homepage_tour_link_name']}{' '}
            <span className="w-60px" />
            <i className="fa fa-long-arrow-left" />
          </Link>
        </div>
      </div>

      <div className="seprator-lg" />
      <div className="seprator-lg" />
    </section>
  );
};

export default Rsvp;
