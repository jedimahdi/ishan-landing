import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import Header from '../../components/homepage/header/header.component';
import Modal from '../../shared/components/UIElements/Modal';
import Sidebar from '../../components/sidebar/sidebar.component';
import RequestFormModal from './request_form.component';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { SERVER_URL } from '../../shared/util/vars';
import Button from '../../shared/components/FormElements/Button';
import CourseSchedule from '../../components/course/course_schedule/course_schedule.component';
import './course.styles.scss';
// import CourseHeader from '../../components/course/course_header/course_header.component';
// import CourseOverview from '../../components/course/course_overview/course_overview.component';
// import CourseSpecs from '../../components/course/course_specs/course_specs.component';
// import CourseSchedule from '../../components/course/course_schedule/course_schedule.component';
// import CourseInstructor from '../../components/course/course_instructor/course_instructor.component';
// import CoursePricing from '../../components/course/course_pricing/course_pricing.component';
// import CourseGallery from '../../components/course/course_gallery/course_gallery.component';
// import CourseFaq from '../../components/course/course_faq/course_faq.component';

const CoursePage = () => {
  const { course_id } = useParams();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [course, setCourse] = useState();
  const [teacher, setTeacher] = useState();
  const [listCourses, setListCourses] = useState();
  const [formModal, setFormModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseData = await sendRequest(
          `${SERVER_URL}getCourseDetail`,
          'POST',
          JSON.stringify({ _id: course_id }),
          {
            'Content-Type': 'application/json'
          }
        );

        const teacherData = await sendRequest(
          `${SERVER_URL}teacher`,
          'POST',
          JSON.stringify({ _id: responseData.teacher }),
          {
            'Content-Type': 'application/json'
          }
        );

        // const coursesList = await sendRequest(
        //   `${SERVER_URL}field`,
        //   'POST',
        //   JSON.stringify({}),
        //   {
        //     'Content-Type': 'application/json'
        //   }
        // );
        const coursesList = await sendRequest(`${SERVER_URL}recCourse`);

        console.log(responseData);
        console.log(teacherData);
        console.log(coursesList);
        setCourse(responseData);
        setTeacher(teacherData);
        setListCourses(coursesList);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCourses();
  }, [sendRequest, course_id]);

  return (
    <React.Fragment>
      <Header
        media="s"
        small
        breadcrump={<Link to="/courses">دوره ها</Link>}
        no_header={true}
      />
      <RequestFormModal show={formModal} onCancel={() => setFormModal(false)} />
      {!isLoading && course && (
        <VideoModal
          vid={course.vid}
          show={videoModal}
          onCancel={() => setVideoModal(false)}
        />
      )}

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && course && teacher && listCourses && (
        <div className="container">
          <div className="seprator"></div>
          <div className="row">
            <Sidebar title="لیست دوره‌ها">
              {listCourses.map(field => (
                <li key={field._id}>
                  <Link to={`/field/${field._id}`}>{field.title}</Link>
                </li>
              ))}
            </Sidebar>
            <div className="col-md-9">
              <div className="course-details">
                <div className="course-image">
                  <img
                    src={`${SERVER_URL}${course.img}`}
                    alt="course_image"
                    className="img-responsive"
                  />
                </div>

                <div className="course-title">
                  <h2>{course.title}</h2>
                  <small>{course.minidesc}</small>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <p>{course.desc}</p>
                  </div>
                  <div className="col-md-4">
                    <ul className="course-pres">
                      <li>
                        قیمت دوره: <span>{course.price} تومان</span>
                      </li>
                      <li>
                        طول دوره:
                        <span> {Object.keys(course.weeks).pop()} هفته</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="seprator-lg"></div>

              <div className="course-teacher">
                <h3>استاد و پشتیبان دوره </h3>

                <table className="table table-borderless teacher-and-support">
                  <thead>
                    <tr>
                      <th>عکس</th>
                      <th>استاد</th>
                      <th>تاریخ و ساعت</th>
                      <th>پروفایل استاد</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={`${SERVER_URL}${teacher.fg_image}`}
                          alt="teacher"
                          className="img-responsive"
                        />
                      </td>
                      <td>
                        <h6>{teacher.name}</h6>
                        <div>{teacher.subtitle}</div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <h6>تاریخ شروع</h6> 11 مهر 98
                        </div>
                        <div className="d-flex justify-content-around">
                          <h6>تاریخ پایان</h6> 15 آذر 98
                        </div>
                      </td>
                      <td>
                        <div>جهت مشاهده پروفایل </div>
                        <Link to={`/instructors/${teacher._id}`}>
                          کلیک کنید
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="seprator-lg"></div>
              <CourseSchedule weeks={course.weeks} />
              <div className="seprator-lg"></div>

              <div className="my-accordian">
                <div className="accordion schedule" id="accordionExample">
                  <div className="card">
                    <div
                      className="card-header toggle-accordian"
                      id={`headingTest`}
                      data-toggle="collapse"
                      data-target={`#collapseTest`}
                      aria-expanded="false"
                      aria-controls={`collapseTest`}
                    >
                      <div>
                        <p className="mb-0">تست</p>
                        <h2 className="mb-0">عنوان</h2>
                      </div>
                      <div>
                        <i className="fa toggle-accordian-icon" />
                      </div>
                    </div>

                    <div
                      id={`collapseTest`}
                      className="collapse schedule-collapse"
                      aria-labelledby={`headingTest`}
                    >
                      <div className="card-body">متن تست</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="seprator-lg"></div>

              <div className="my-get-started">
                <h3>شروع کنید </h3>
                <div className="gstarted">
                  <div className="right-gstarted">
                    <Button onClick={() => setFormModal(true)} danger>
                      <i className="fa fa-angle-left"></i>
                      <span>جهت مشاوره و پیش ثبت‌نام</span>
                    </Button>
                    <Button to="/faq" danger>
                      <i className="fa fa-angle-left"></i>
                      <span>سوالات متداول</span>
                    </Button>
                  </div>

                  <div className="left-gstarted">
                    <Button
                      className="play-button"
                      onClick={() => setVideoModal(true)}
                      danger
                    >
                      <span>تیزر معرفی دوره</span>
                      <i className="fa fa-play"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="seprator-lg" />
    </React.Fragment>
  );
};

const VideoModal = props => {
  return (
    <Modal show={props.show} onCancel={props.onCancel} header="تیزر معرفی دوره">
      <div className="preview-video">
        <ReactPlayer
          id="bg-video"
          url={`${SERVER_URL}${props.vid}`}
          width="100%"
          height="100%"
          playing
          controls
        />
      </div>
    </Modal>
  );
};

export default CoursePage;
