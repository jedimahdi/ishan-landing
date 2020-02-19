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
              to='/accelerator'
              className="next-step-action"
            >
              <div className="text">
                {/* {settingItems['homepage_services_first_name']} */}
                شتابدهی
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link
              to='/shared_workspace'
              className="next-step-action"
            >
              <div className="text">
                {/* {settingItems['homepage_services_second_name']} */}
                فضای کار اشتراکی
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link
              to='/adviser-in-course'
              className="next-step-action"
            >
              <div className="text">
                {/* {settingItems['homepage_services_third_name']} */}
                جهت مشاوره حضوری
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link
              to='/speak-to-adviser'
              className="next-step-action"
            >
              <div className="text">
                {/* {settingItems['homepage_services_fourth_name']} */}
                با یک مشاور صحبت کنید
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
