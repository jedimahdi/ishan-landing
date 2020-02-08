import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Header from '../../components/homepage/header/header.component'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import {useHttpClient} from '../../shared/hooks/http-hook'
import {SERVER_URL} from '../../shared/util/vars'
import './course_list.styles.scss'

const CourseListPage = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [loadedCourses, setLoadedCourses] = useState()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseData = await sendRequest(`${SERVER_URL}recCourse`)
        console.log(responseData)
        setLoadedCourses(responseData)
      } catch (err) {}
    }
    fetchCourses()
  }, [sendRequest])

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Header media="s" small breadcrump="دوره ها" no_header={true} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && loadedCourses && (
        <div className="course-list-page">
          <div className="courses-slider text-right"></div>
          <section id="courses">
            <div className="seprator-lg"></div>
            <div className="container text-right">
              <div className="course-list">
                <div className="row">
                  <div className="col-md-4">
                    <h2>لیست دوره های</h2>
                    <h3>هنرهای دیجیتالی</h3>
                    <h3>بازیسازی</h3>
                    <h3>برنامه نویسی</h3>
                  </div>
                  <ListCourses courses={loadedCourses} />
                </div>
              </div>
            </div>
            <div className="seprator-lg"></div>
          </section>
        </div>
      )}
    </React.Fragment>
  )
}

const ListCourses = props => {
  return (
    <React.Fragment>
      {props.courses.map(course => (
        <Course course={course} key={course._id} />
      ))}
    </React.Fragment>
  )
}

const Course = props => {
  return (
    <div className="col-md-4">
      <Link to={`/course/${props.course._id}`} className="course-link">
        <div className="course">
          <img
            src={`${SERVER_URL}${props.course.img}`}
            alt="course"
            className="img-responsive course-bg-image"
          />
          <div className="course-body">
            <h3>{props.course.title}</h3>
            <p>{props.course.minidesc}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default CourseListPage
