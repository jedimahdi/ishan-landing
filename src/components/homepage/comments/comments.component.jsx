import React, {useState, useEffect, useContext} from 'react'
import OwlCarousel from 'react-owl-carousel2'

// import API from '../../../utils/api'
// import {API_BASE_URL} from '../../../shared/util/vars'
import Image1Src from '../../../assets/images/other/comments.jpg'
import Image2Src from '../../../assets/images/comments/1.png'
// import { Link } from 'react-router-dom';

import {SettingsContext} from '../../../providers/settings/settings.provider'

import './comments.styles.scss'

const Comments = () => {
  const [comments, setComments] = useState(<div key={1}></div>)
  const {settingItems} = useContext(SettingsContext)

  useEffect(() => {
    // let comments = []
    let newItem = (
      <div className="row" key="1">
        <div className="col-md-7">
          <img src={Image2Src} className="img-responsive" alt="comment" />
        </div>
        <div className="col-md-5 quote">
          <div className="quotebefore">جواد مطوری</div>
          <div className="quote-name">
            " با همه این مشکلات امروز به مرحله‌ای رسیده‌ایم که به ما اعتماد
            بیشتری می‌شود. امروز پیشنهاداتی جذاب به ما ارائه می‌شود که متن‌های
            خوبی دارند. شخصاً آینده این صنعت را در ایران بسیار روشن می‌بینم.
            فراز و نشیب‌هایی وجود دارد؛ ولی مسیر ما در این صنعت رو به جلو است.
            خدا را شکر این مسیر آن قدری رو به رشد است که ما به فکر مهاجرت از
            کشور نباشیم. "
          </div>
          <div style={{textAlign: 'left', color: '#fff'}}>
            مدیر استودیو الزهرا VFX
          </div>
        </div>
      </div>
    )

    setComments([newItem])

    // let comments = []
    // settingItems['homepage_instructor_comments'].split(',').forEach(item => {
    //   API.get(`ins_comments/${item}`).then(res => {
    //     let comment = res.data

    //     let newItem = (
    //       <div className="row" key={comment._id}>
    //         <div className="col-md-7">
    //           <img
    //             src={`${API_BASE_URL}comments/${comment.image}`}
    //             className="img-responsive"
    //             alt="comment"
    //           />
    //         </div>
    //         <div className="col-md-5 quote">
    //           <div className="quotebefore">{comment.text}</div>
    //           <div className="quote-name">{comment.name}</div>
    //         </div>
    //       </div>
    //     )
    //     comments = [...comments, newItem]
    //     setComments(comments)
    //   })
    // })
  }, [])

  const options = {
    items: 1,
    rtl: true,
    loop: true,
    autoplay: true,
    animateOut: 'fadeOut',
    dots: false,
    mouseDrag: false,
  }

  console.log(settingItems['homepage_comments_bg_image'])
  if (
    settingItems['homepage_instructor_comments'] !== '' &&
    settingItems['homepage_comments_bg_image'] !== ''
  ) {
    return (
      <section
        className="juangil"
        style={{
          backgroundImage: `url(${Image1Src})`,
        }}
      >
        <div className="container">
          <OwlCarousel
            options={options}
            className="comments-carousel owl-carousel owl-theme"
          >
            {comments}
          </OwlCarousel>
        </div>
      </section>
    )
  } else {
    return null
  }
}

export default Comments
