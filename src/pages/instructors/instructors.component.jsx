import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Header from '../../components/homepage/header/header.component'
import Image1Src from '../../assets/images/teachers/techerssssss.jpg'
import {SERVER_URL} from '../../shared/util/vars'
import {useHttpClient} from '../../shared/hooks/http-hook'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import './instructors.styles.scss'

const InstructorsPage = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [teachers, setTeachers] = useState()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseData = await sendRequest(
          `${SERVER_URL}teacher`,
          'POST',
          JSON.stringify({}),
          {
            'Content-Type': 'application/json',
          },
        )
        console.log(responseData)
        setTeachers(responseData)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchCourses()
  }, [sendRequest])

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Header media={Image1Src} small breadcrump="اساتید" />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <section id="about" className=" text-white">
        <div className="seprator"></div>
        <div className="container">
          <h2>مربیان </h2>
          <div className="row">
            <div className="col-md-12 ">
              <p>
                مجموعه ای بسیار ارزشمند از مربیان با سابقه و با تجربه در عرصه
                هنرهای دیجیتالی-بازیسازی - برنامه نویسی وکارآفرینی دور هم جمع
                شده اند تا بهترین و با کیفیت ترین آموزش را در اختیار فراگیران
                قرار بدهند و با پشتیبانی در حین دوره ها و نقد و بررسی بر روی
                تمارین و رصد پیشرفت و افت فراگیران در طی دوره و با برگزاری
                ورکشاپ های تخصصی این امکان را فراهم کنند تا تمامی کشور و حتی
                فراگیران خارج از کشور بتوانند استعداد و علاقه خود را کشف کنند و
                مهارت خود را در زمینه های مختلف افزایش دهند تا جهت ورود به بازار
                کار و یا شروع یک استارت آپ و خلق ایده در کنار شما عزیزان باشند .
                این مربیان آمده اند تا شما را در طراز بازار کار تربیت کنند تا
                باعث افزایش کیفیت بازار کار شوید.
              </p>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>

      {!isLoading && teachers && (
        <section className="community-events text-right">
          <div className="seprator-lg" />

          <div className="container">
            <div className="row">
              {teachers.map(teacher => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={teacher._id}>
                  <Link
                    to={`/instructors/${teacher._id}`}
                    className="content-block transparent"
                  >
                    <div className="thumbnails">
                      <div className="overlay" />
                      <img
                        className="img-responsive-full teacher-bg-image"
                        src={`${SERVER_URL}${teacher.bg_image}`}
                        alt="bg_teacher"
                      />
                      <img
                        className="teacher-image img-responsive"
                        src={`${SERVER_URL}${teacher.fg_image}`}
                        alt="teacher"
                      />
                    </div>
                    <div className="description">
                      <h4>{teacher.name}</h4>
                      {teacher.subtitle}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="seprator" />
        </section>
      )}
    </React.Fragment>
  )
}

export default InstructorsPage
