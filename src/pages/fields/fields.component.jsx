import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Header from '../../components/homepage/header/header.component'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import {useHttpClient} from '../../shared/hooks/http-hook'
import {SERVER_URL} from '../../shared/util/vars'
import Image1Src from '../../assets/images/reshtehaa.jpg'

import './fields.styles.scss'

const FieldsPage = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [fields, setFields] = useState()

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const responseData = await sendRequest(
          `${SERVER_URL}field`,
          'POST',
          JSON.stringify({}),
          {
            'Content-Type': 'application/json',
          },
        )

        setFields(responseData)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchFields()
  }, [sendRequest])

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
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
  )
}

const Field = ({field}) => {
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
  )
}

export default FieldsPage
