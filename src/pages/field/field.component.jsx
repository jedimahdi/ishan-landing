import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { SERVER_URL } from '../../shared/util/vars';

import './field.styles.scss';

const FieldPage = () => {
  const { field_id } = useParams();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [field, setField] = useState();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseData = await sendRequest(
          `${SERVER_URL}field`,
          'POST',
          JSON.stringify({ _id: field_id }),
          {
            'Content-Type': 'application/json'
          }
        );

        console.log(responseData);
        setField(responseData[0]);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCourses();
  }, [sendRequest, field_id]);

  return (
    <div className="field-page text-right text-white">
      <Header
        media="a"
        small
        no_header
        breadcrump={<Link to="/fields">رشته ها</Link>}
      />
      <div className="seprator" />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && field && (
        <section>
          <div className="container">
            <div className="field-title">
              <h2>{field.title}</h2>
              <p>{field.desc}</p>
            </div>

            <div className="field-courses">
              <h3>دوره های رشته</h3>
              <div className="row">
                {field.clist.map(c => {
                  let course = c.course;

                  return (
                    <div className="col-md-6" key={course._id}>
                      <Link
                        to={`/course/${course._id}`}
                        className="content-block transparent"
                      >
                        <div className="thumbnails">
                          <div className="overlay" />
                          <img
                            className="img-responsive-full"
                            src={`${SERVER_URL}${course.img}`}
                            alt=""
                          />
                        </div>
                        <div className="description">
                          <h4>{course.title}</h4>
                          {course.minidesc}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const Term = () => {
  return (
    <div className="term">
      <div className="term-num">ترم اول</div>
      <TermCourseList />
    </div>
  );
};

const TermCourseList = () => {
  return (
    <div className="row">
      <TermCourse />
      <TermCourse />
      <TermCourse />
      <TermCourse />
    </div>
  );
};

const TermCourse = () => {
  return (
    <div className="col-md-6 ">
      <div className="field-course">
        <div className="course-image">
          <img
            src="https://www.gnomon.edu/assets/programs/foundation/classthumbs/psdfordp_foundation_class_thumbs-113d8c6ff7fedb01a477ec77f949887d57bed70c91b26ed75403279def37234a.jpg"
            alt="course"
            className="img-responsive"
          />
        </div>
        <div className="course-info">
          <h3>طراحی کاراکتر</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FieldPage;
