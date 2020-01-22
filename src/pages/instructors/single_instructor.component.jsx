import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import Header from '../../components/homepage/header/header.component';
import Image1Src from '../../assets/images/teachers/techerssssss.jpg';
import TEACHERS_DATA from './teachers.json';
import './single_instructor.styles.scss';

const SingleInstructorPage = () => {
  const { instructor_name } = useParams();
  const instructor = TEACHERS_DATA.find(
    teacher => teacher.name === instructor_name
  );

  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="اساتید" />
      <section id="single_instructor" className="text-right text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="title_group">
            <h2>{instructor_name}</h2>
            <small className="subtitle">{instructor.subtitle}</small>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="teacher-avatar">
                <img
                  className="img-responsive"
                  src={`/images/${instructor.fg_image}`}
                  alt="instructor"
                />
              </div>
            </div>
            <div className="col-md-10">
              <p>{instructor.introduction}</p>

              <h5>سوابق</h5>
              <ul>
                {instructor.records &&
                  instructor.records.map(record => <li>{record}</li>)}
              </ul>

              <h5>تحصیلات</h5>
              <p>{instructor.education}</p>

              <h5>پروژه ها</h5>
              <ul>
                {instructor.projects &&
                  instructor.projects.map(project => <li>{project}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
    </React.Fragment>
  );
};

export default SingleInstructorPage;
