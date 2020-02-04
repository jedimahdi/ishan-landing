import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SettingsContext } from '../../../providers/settings/settings.provider';

const Services = () => {
  const { settingItems } = useContext(SettingsContext);

  return (
    <section>
      <div className="seprator-lg" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link to="/support-and-services">
              <img
                className="img-responsive"
                width="800"
                height="204"
                src={settingItems['homepage_services_fields_image_url']}
                alt="art"
              />
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/education">
              <img
                className="img-responsive"
                width="800"
                height="204"
                src={settingItems['homepage_services_course_image_url']}
                alt="art"
              />
            </Link>
          </div>
        </div>

        <div className="seprator-lg" />

        <div className="row">
          <div className="col-md-3">
            <Link
              to={settingItems['homepage_services_first_link']}
              className="next-step-action"
            >
              <div className="text">
                {settingItems['homepage_services_first_name']}
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link
              to={settingItems['homepage_services_second_link']}
              className="next-step-action"
            >
              <div className="text">
                {settingItems['homepage_services_second_name']}
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link
              to={settingItems['homepage_services_third_link']}
              className="next-step-action"
            >
              <div className="text">
                {settingItems['homepage_services_third_name']}
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link
              to={settingItems['homepage_services_fourth_link']}
              className="next-step-action"
            >
              <div className="text">
                {settingItems['homepage_services_fourth_name']}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="seprator-lg" />
    </section>
  );
};

export default Services;
