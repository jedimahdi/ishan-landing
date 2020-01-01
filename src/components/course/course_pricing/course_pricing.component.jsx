import React from 'react';

import './course_pricing.styles.scss';

const CoursePricing = () => {
  return (
    <section id="pricing">
      <div className="pricing__circle" />
      <div className="seprator-lg" />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <p>شروع دوره موشن گرافیک</p>
            <p>از اول مهرماه ۱۳۹۸</p>
          </div>
          <div className="col-lg-4">
            <p>قیمت دوره</p>
            <p>۵۰۰ هزار تومن</p>
          </div>
          <div className="col-lg-4">جهت مشاوره و رزرو دوره</div>
        </div>
      </div>
      <div className="seprator-lg" />
    </section>
  );
};

export default CoursePricing;
