import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Button from '../../components/button/button.component';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { SERVER_URL } from '../../shared/util/vars';
import Image1Src from '../../assets/images/reshtehaa.jpg';

import './fields.styles.scss';

const FieldsPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [fields, setFields] = useState();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseData = await sendRequest(
          `${SERVER_URL}field`,
          'POST',
          JSON.stringify({}),
          {
            'Content-Type': 'application/json'
          }
        );

        setFields(responseData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCourses();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="رشته ها" />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      <div className="seprator"></div>

      {!isLoading && fields && (
        <section id="fields">
          <div className="container">
            <div className="title_group">
              <h2>معرفی رشته ها</h2>
              <p>
                آیشن در جهت تربیت و پرورش نیروهای طراز بازار کار اقدام به
                برگزاری ترمیک در زمینه هنرهای دیجیتالی،بازیسازی و برنامه نویسی
                کرده است تا افرادی که تمایل دارند به صورت قدم به قدم مهارتی را
                آموزش ببینند و فرآیند آموزش را از پایه و ابتدا شروع کنند، می
                توانند با مشاوران با تجربه در هر حوزه مشورت کنند و مسیر شغلی و
                حرفه ای خود را آغاز کنند .
              </p>
            </div>

            <div className="fields">
              {fields.map(field => (
                <Field field={field} key={field._id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

const Field = ({ field }) => {
  return (
    <Link to={`/field/${field._id}`} className="field-link">
      <div className="field">
        <div className="field-time">
          <span className="my-green">—</span> {field.duration} هفته
        </div>
        <div className="row">
          <div className="col-md-5">
            <img
              src={`${SERVER_URL}${field.img}`}
              alt="field"
              className="img-responsive"
            />
          </div>
          <div className="col-md-7">
            <h3>{field.title}</h3>
            <p>{field.desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const FieldInfo = () => {
  return (
    <div className="col-md-3 field-info">
      <h1>رشته اول</h1>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
      <Link to="/">
        دیدن همه دوره ها <i className="fa fa-long-arrow-left"></i>
      </Link>
    </div>
  );
};

const FieldCourses = () => {
  return (
    <div className="col-md-9">
      <div className="row">
        <FieldCourse />
        <FieldCourse />
        <FieldCourse />
        <FieldCourse />
      </div>
    </div>
  );
};

const FieldCourse = () => {
  return (
    <div className="col-md-6">
      <div className="course">
        <img
          src="https://www.gnomon.edu/assets/courses/on-campus_vehicle-design-237bf8b8acb96ed3d3ddb976ebb13ff333833de644bdec3f6431101ff1477605.jpg"
          alt="course"
          className="img-responsive"
        />
        <div className="course-body">
          <h3>مدلسازی Maya</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از.</p>
        </div>
      </div>
    </div>
  );
};

export default FieldsPage;
