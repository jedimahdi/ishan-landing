import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Select from 'react-select'

import Header from '../../components/homepage/header/header.component'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
// import Select from '../../shared/components/FormElements/Select'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import {useHttpClient} from '../../shared/hooks/http-hook'
import {SERVER_URL} from '../../shared/util/vars'
import './course_list.styles.scss'

const CourseListPage = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [loadedCourses, setLoadedCourses] = useState()

  const options = [
    {value: 'all', label: 'همه‌ی دوره ها', color: '#666666'},
    {value: 'art', label: 'هنرهای دیجیتالی', color: '#666666'},
    {value: 'game', label: 'بازیسازی', color: '#666666'},
    {value: 'programming', label: 'برنامه نویسی', color: '#666666'},
  ]

  const colourStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: '#333',
      border: 'none',
      padding: '10px',
      fontSize: '22px',
      boxShadow: 'none',
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
      return {
        ...styles,
        backgroundColor: isSelected ? '#666' : '#333',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '21px',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? data.color : '#333'),
        },
      }
    },
    menu: styles => ({...styles, backgroundColor: '#333', top: '58px'}),
    input: styles => ({...styles}),
    placeholder: styles => ({...styles}),
    singleValue: (styles, {data}) => ({...styles, color: '#fff'}),
    indicatorSeparator: styles => ({display: 'none'}),
  }

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

                    {/* <Select no_label id="category" large>
                      <option value="">همه ی دوره ها</option>
                      <option value="">هنرهای دیجیتالی</option>
                      <option value="">بازیسازی</option>
                      <option value="">برنامه نویسی</option>
                    </Select> */}
                    <br />
                    <Select
                      options={options}
                      defaultValue={options[0]}
                      styles={colourStyles}
                      // menuColor="red"
                    />
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
