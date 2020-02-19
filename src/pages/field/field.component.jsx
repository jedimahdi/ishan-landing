import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

import Header from '../../components/homepage/header/header.component'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import FieldAgenda from '../../components/field-agenda/field-agenda.component'
import {toPersianDigits} from '../../shared/util/helpers'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import {useHttpClient} from '../../shared/hooks/http-hook'
import {SERVER_URL} from '../../shared/util/vars'

import './field.styles.scss'

const FieldPage = () => {
  const {field_id} = useParams()
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [field, setField] = useState()
  const [events, setEvents] = useState()
  // const [fieldList, setFieldList] = useState()

  // const canvasRef = React.useRef();

  // const drawCourses = () => {
  //   const canvas = canvasRef.current;
  //   let ctx = canvas.getContext('2d');
  //   ctx.beginPath();
  //   ctx.arc(95, 150, 40, 0, 2 * Math.PI);
  //   ctx.stroke();
  //   ctx.font = '10px Arial';
  //   ctx.fillText('Hello World', 118, 153);
  // };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseData = await sendRequest(
          `${SERVER_URL}field`,
          'POST',
          JSON.stringify({_id: field_id}),
          {
            'Content-Type': 'application/json',
          },
        )

        const responseField = responseData[0]
        setField(responseField)
        console.log(responseField)

        const eventData = responseField.clist.map(term => {
          let max_inner_duration = 0

          let children = term.course.map(course => {
            const inner_duration = Object.keys(course.weeks)[
              Object.keys(course.weeks).length - 1
            ]

            if (inner_duration > max_inner_duration) {
              max_inner_duration = inner_duration
            }

            return {
              title: course.title,
              inner_duration: inner_duration,
              point: toPersianDigits('65'),
            }
          })

          return {
            title: `ترم ${toPersianDigits(term.term)}`,
            duration: max_inner_duration,
            children: children,
          }
        })

        setEvents(eventData)

        console.log(eventData)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchCourses()

    // context.beginPath();
    // context.arc(50, 50, 50, 0, 2 * Math.PI);
    // context.fill();
  }, [sendRequest, field_id])

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
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

        {!isLoading && field && events && (
          <section>
            <div className="container">
              <div className="field-title">
                <h2>{field.title}</h2>
                <p>{field.desc}</p>
              </div>

              <div className="field-canvas" style={{}}>
                <FieldAgenda duration={field.duration} events={events} />
              </div>

              <div className="seprator-lg"></div>
              {field.clist.map((c, idx) => {
                let courseList = c.course

                return (
                  <div className="field-courses" key={idx}>
                    <h3>ترم {toPersianDigits(c.term)}</h3>
                    <div className="row">
                      {courseList.map((course, idx2) => (
                        <div className="col-md-6" key={idx2}>
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
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </React.Fragment>
  )
}

export default FieldPage
