import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import {SettingsContext} from '../../../providers/settings/settings.provider'
import ImageUrl from '../../../assets/images/teacher.jpg'

import './teachers.styles.scss'

const Teachers = () => {
  const {settingItems} = useContext(SettingsContext)

  return (
    <section className="browse-instructors">
      <div className="seprator-lg hidden-xs hidden-sm" />

      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <div className="title">مربیان آموزشی</div>
            <p>
              استفاده از اساتید به نام و مجرب در جهت پرورش نیروهای خلاق و
              توانمند که نیاز صنعت و بازار را به خوبی می شناسند
            </p>
            <p>
              <Link to="/instructors" className="link-larger">
                جستجو اساتید <i className="fa fa-long-arrow-left" />
              </Link>
            </p>
          </div>
          <div className="col-md-8">
            <img className="img-responsive" src={ImageUrl} alt="instructors" />
          </div>
        </div>
      </div>

      <div className="seprator-lg" />
    </section>
  )
}
export default Teachers
