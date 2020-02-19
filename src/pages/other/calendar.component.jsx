import React, {useEffect, useState} from 'react'
import axios from 'axios'
import moment from 'jalali-moment'

import Header from '../../components/homepage/header/header.component'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import {useHttpClient} from '../../shared/hooks/http-hook'
import {SERVER_URL} from '../../shared/util/vars'
import {toPersianDigits} from '../../shared/util/helpers'
import './calendar.styles.scss'

const CalendarPage = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [loadedCourses, setLoadedCourses] = useState()
  moment.locale('fa', {useGregorianParser: true})

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
      <Header media="s" small breadcrump="تقویم دوره ها" no_header={true} />

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && loadedCourses && (
        <div className="container">
          <div className="text-white">
            <h3>تقویم دوره‌ها</h3>

            <table className="calendar table">
              <thead>
                <tr>
                  <th>دوره</th>
                  <th>قیمت</th>
                  <th>استاد</th>
                  <th>روز</th>
                  <th>زمان</th>
                  <th>تاریخ شروع</th>
                </tr>
              </thead>
              <tbody>
                {loadedCourses.map(course => (
                  <tr key={course._id}>
                    <td>
                      <div className="calendar-course-title">
                        {course.title}
                      </div>
                    </td>
                    <td>
                      <div>{toPersianDigits(course.price)}</div>
                    </td>
                    <TeacherItem teacher_id={course.teacher} />
                    <td></td>
                    <td></td>
                    <td>{moment(course.s_time).format('jYYYY/jMM/jDD')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="seprator-lg" />
    </React.Fragment>
  )
}

const TeacherItem = props => {
  const [teacher, setTeacher] = useState()

  useEffect(() => {
    const fetchTeacher = async teacher_id => {
      const teacher = await axios.post(`${SERVER_URL}teacher`, {
        _id: teacher_id,
      })
      setTeacher(teacher.data)
    }

    fetchTeacher(props.teacher_id)
  }, [props.teacher_id])

  return <td>{teacher && teacher.name}</td>
}

export default CalendarPage
