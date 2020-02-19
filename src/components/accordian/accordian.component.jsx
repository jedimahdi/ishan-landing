import React from 'react';
// import { Link } from 'react-router-dom';

import {toPersianDigits} from '../../shared/util/helpers'
import './accordian.styles.scss';

const Accordian = props => {
  const handleExpandAll = event => {};

  const { items } = props;
  let nitems = [];
  let innerArray = [];
  for (let week in items) {
    innerArray = [];
    for (let day in items[week]) {
      let b = items[week][day];

      innerArray.push({
        week: week,
        // day: day,
        title: b.title,
        desc: b.desc,
        files: b.files,
        vid: b.vid
      });
    }

    nitems.push(innerArray);
  }

  return (
    <section id="course-schedule" className="my-accordian">
      <div className="container">
        <div className="schedule-header text-right">
          <h5>برنامه ریزی دوره موشن گرافیک</h5>
          <button
            className="expand-all"
            id="expand-course"
            onClick={handleExpandAll}
          >
            <div>
              <span>باز کردن همه </span> <i className="fa fa-angle-down" />
            </div>
          </button>
        </div>
        <div className="seprator" />
        <div className="accordion schedule" id="accordionExample">
          {nitems.map(item => (
            <div className="card" key={item[0].week}>
              <div
                className="card-header toggle-accordian"
                id={`heading${item[0].week}`}
                data-toggle="collapse"
                data-target={`#collapse${item[0].week}`}
                aria-expanded="false"
                aria-controls={`collapse${item[0].week}`}
              >
                <div>
                  <p className="mb-0">هفته {toPersianDigits(item[0].week)}</p>
                  <h2 className="mb-0">{item[0].title}</h2>
                </div>
                <div>
                  <i className="fa toggle-accordian-icon" />
                </div>
              </div>

              <div
                id={`collapse${item[0].week}`}
                className="collapse schedule-collapse"
                aria-labelledby={`heading${item[0].week}`}
              >
                <div className="card-body">{item[0].desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordian;
