import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router'

import Header from '../../components/homepage/header/header.component'
import Image1Src from '../../assets/images/teachers/techerssssss.jpg'
import {SERVER_URL} from '../../shared/util/vars'
import {useHttpClient} from '../../shared/hooks/http-hook'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import './single_instructor.styles.scss'

const SingleInstructorPage = () => {
  const {instructor_id} = useParams()
  // const instructor = TEACHERS_DATA.find(
  //   teacher => teacher.name === instructor_name
  // );

  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [instructor, setInstructor] = useState()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseData = await sendRequest(
          `${SERVER_URL}teacher`,
          'POST',
          JSON.stringify({_id: instructor_id}),
          {
            'Content-Type': 'application/json',
          },
        )
        console.log(responseData)
        setInstructor(responseData)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchCourses()
  }, [sendRequest, instructor_id])

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Header
        media={Image1Src}
        small
        breadcrump={<Link to="/instructors">اساتید</Link>}
      />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && instructor && (
        <section id="single_instructor" className="text-white">
          <div className="seprator"></div>
          <div className="container">
            <div className="title_group">
              <h2>{instructor.name}</h2>
              <small className="subtitle">{instructor.subtitle}</small>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="teacher-avatar">
                  <img
                    className="img-responsive"
                    src={`${SERVER_URL}${instructor.fg_image}`}
                    alt="instructor"
                  />
                </div>
              </div>
              <div className="col-md-10">
                <p>{instructor.introduction}</p>

                <h5>سوابق</h5>
                <ul>
                  {instructor.records &&
                    instructor.records.map(record => (
                      <li key={record}>{record}</li>
                    ))}
                </ul>

                <h5>تحصیلات</h5>
                <p>{instructor.education}</p>

                <h5>پروژه ها</h5>
                <ul>
                  {instructor.projects &&
                    instructor.projects.map(project => (
                      <li key={project}>{project}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="seprator"></div>
        </section>
      )}
    </React.Fragment>
  )
}

export default SingleInstructorPage
