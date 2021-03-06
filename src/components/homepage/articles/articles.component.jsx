import React, {useState, useEffect, useContext} from 'react'
import API from '../../../utils/api'
import OwlCarousel from 'react-owl-carousel2'
import {Link} from 'react-router-dom'

import {SettingsContext} from '../../../providers/settings/settings.provider'
import {API_BASE_URL} from '../../../shared/util/vars'

import './articles.styles.scss'

const Articles = () => {
  const [articles, setArticles] = useState([<div key={1}></div>])
  const {settingItems} = useContext(SettingsContext)

  useEffect(() => {
    // let articles = []
    let newItem = (
      <div className="item slide row" key="1">
        <div className="col-md-7 slider-image">
          <span className="crop">
            <img
              className="img-responsive"
              src="https://media.blendernation.com/wp-content/uploads/2020/02/EQlsEQ1WoAE17qi-728x336.jpg"
              alt="slider"
            />
          </span>
        </div>
        <div className="col-md-5">
          <div className="slide-content">
            <div className="seprator" />
            <div className="slide-title">قابلیت های جدید و جذاب بلندر 2.82</div>
            <p>
              7 ماه پیش، یک تحول بزرگ با بلندر 2.80 اتفاق افتاد. تحولی که نگاه
              های صنعت گرافیک کامپیوتری را به سمت این نرم افزار رایگان متن باز،
              چرخاند و این نرم افزار را به عنوان یک ابزار و رقیب قدرتمند، با
              قابلیت های بسیار بالا به همگان معرفی کرد.
            </p>
            <p>
              <Link className="link-larger" to="/">
                خواندن مقاله کامل <i className="fa fa-long-arrow-left" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    )

    setArticles([newItem])

    // settingItems['homepage_articles'].split(',').forEach(item => {
    //   API.get(`articles/${item}`).then(res2 => {
    //     let article = res2.data

    //     let newItem = (
    //       <div className="item slide row" key={article._id}>
    //         <div className="col-md-7 slider-image">
    //           <span className="crop">
    //             <img
    //               className="img-responsive"
    //               src={`${API_BASE_URL}articles/${article.image}`}
    //               alt="slider"
    //             />
    //           </span>
    //         </div>
    //         <div className="col-md-5">
    //           <div className="slide-content">
    //             <div className="seprator" />
    //             <div className="slide-title">{article.title}</div>
    //             <p>{article.text}</p>
    //             <p>
    //               <Link className="link-larger" to="/">
    //                 خواندن مقاله کامل <i className="fa fa-long-arrow-left" />
    //               </Link>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     )
    //     articles = [...articles, newItem]
    //     setArticles(articles)
    //   })
    // })
  }, [settingItems])

  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    rtl: true,
  }

  if (settingItems['homepage_articles'] !== '') {
    return (
      <section className="slider">
        <div className="seprator-lg" />

        <div className="container">
          <OwlCarousel
            className="slides mid-slides owl-carousel owl-theme"
            options={options}
          >
            {articles}
          </OwlCarousel>
        </div>

        <div className="seprator-lg" />
      </section>
    )
  } else {
    return null
  }
}

export default Articles
