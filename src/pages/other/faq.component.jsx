import React from 'react'

import Header from '../../components/homepage/header/header.component'
import Image1Src from '../../assets/images/other/faqq.jpg'
import FAQ_DATA from './faq.json'
import './enroll.styles.scss'
import './faq.styles.scss'

const FaqPage = () => {
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="سوالات متداول" />
      <section className="steps-section text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="title_group">
            <small>ورود به دروازه هنرهای دیجیتالی ،برنامه نویس،بازیسازی</small>
            <h2>سوالات متداول</h2>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <div className="step-section">
                {FAQ_DATA.map((faq, idx) => (
                  <div className="question" key={idx}>
                    <h5>{faq.question}</h5>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="seprator"></div>
      </section>
    </React.Fragment>
  )
}

export default FaqPage
