import React from 'react';

import './course_specs.styles.scss';

const CourseSpecs = () => {
  return (
    <section id="specs">
      <div className="container text-right">
        <div className="row">
          <div className="col-md-4 offset-md-1 spec-items-column">
            <div className="spec-item">
              <div className="spec-title">موارد مورد نیاز</div>
              <div className="spec-value">
                Knowledge of Maya, ZBrush, Substance; other course pre-reqs
                include Intro to Production Modeling, and Vegetation & Plants
                for Games
              </div>
            </div>
            <div className="spec-item">
              <div className="spec-title">پیش نیاز دوره</div>
              <div className="spec-value">Cinema4D, Adobe After Effects</div>
            </div>
          </div>

          <div className="col-md-3 offset-md-1 spec-items-row">
            <div className="spec-item">
              <div className="spec-title">مدت زمان دوره</div>
              <div className="spec-value">هشت هفته</div>
            </div>
            <div className="spec-item">
              <div className="spec-title">مهلت ارسال تمرین</div>
              <div className="spec-value">اخر هر هفته</div>
            </div>
            <div className="spec-item">
              <div className="spec-title">برگزاری ورکشاپ</div>
              <div className="spec-value">یکبار در انتهای دوره</div>
            </div>
          </div>

          <div className="col-md-3 spec-items-row">
            <div className="spec-item">
              <div className="spec-title">مدت زمان دوره</div>
              <div className="spec-value">هشت هفته</div>
            </div>
            <div className="spec-item">
              <div className="spec-title">مهلت ارسال تمرین</div>
              <div className="spec-value">اخر هر هفته</div>
            </div>
            <div className="spec-item">
              <div className="spec-title">برگزاری ورکشاپ</div>
              <div className="spec-value">یکبار در انتهای دوره</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSpecs;
