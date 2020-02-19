import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom'

import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../../shared/components/UIElements/ErrorModal'
import {useHttpClient} from '../../../shared/hooks/http-hook'
import {toPersianDigits} from '../../../shared/util/helpers'
import {SERVER_URL} from '../../../shared/util/vars'

const FieldsOverlay = props => {
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

  let content = (
    <div className="custom-modal yamm-content main-menu-container">
      <div className="row center">
        <LoadingSpinner />
      </div>
    </div>
  )

  if (!error) {
    if (!isLoading && fields) {
      content = (
        <div className="custom-modal yamm-content main-menu-container">
          <div className="row">
            {fields.map(
              (field, idx) =>
                idx < 6 && (
                  <div className="col-md-4" key={idx}>
                    <Link
                      className="subsection-grid-item"
                      to={`/field/${field._id}`}
                      onClick={props.onCancel}
                    >
                      <img
                        className="drop-shadow img-responsive-full visible-lg"
                        src={`${SERVER_URL}${field.img}`}
                        alt={field.title}
                      />
                      <h3>{field.title}</h3>
                      <h5> {toPersianDigits(field.duration)} هفته</h5>
                      <p>{field.desc}</p>
                    </Link>
                  </div>
                ),
            )}
          </div>

          <div className="row" style={{borderTop: '1px solid #3b3b3b'}}>
            <div className="col-md-4">
              <Link to="/fields" className="subsection-grid-item">
                <h3>لینک رشته ها</h3>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/courses" className="subsection-grid-item">
                <h3>لینک دوره ها</h3>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  } else {
    return <ErrorModal error={error} onClear={clearError} />
  }
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

export default FieldsOverlay
