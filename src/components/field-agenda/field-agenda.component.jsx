import React from 'react'

import {toPersianDigits} from '../../shared/util/helpers'

import './field-agenda.styles.scss'

// const events = [
//   {
//     title: `ترم ${toPersianDigits('1')}`,
//     duration: 1,
//     children: [{title: 'آشنایی با مایا', inner_duration: 1}],
//   },
//   {
//     title: `ترم ${toPersianDigits('2')}`,
//     duration: 3,
//     children: [
//       {title: 'دوره اسکریپت در مایا', inner_duration: 3},
//       {title: 'دوره اسکریپت در مایا', inner_duration: 1},
//       {title: 'دوره اسکریپت در مایا', inner_duration: 1},
//       {title: 'دوره اسکریپت در مایا', inner_duration: 1},
//       {title: 'دوره اسکریپت در مایا', inner_duration: 1},
//     ],
//   },
//   {
//     title: `ترم ${toPersianDigits('3')}`,
//     duration: 1,
//     children: [{title: 'آشنایی با مایا', inner_duration: 1}],
//   },
//   {
//     title: `ترم ${toPersianDigits('4')}`,
//     duration: 1,
//     children: [{title: 'آشنایی با مایا', inner_duration: 1}],
//   },
// ]

const FieldAgenda = props => {
  // const max_children_count = props.events.reduce((total, currentValue) => {
  //   const children_count = currentValue.children.length
  //   if (children_count > total) {
  //     return children_count
  //   } else {
  //     return total
  //   }
  // }, 0)

  const agendaRef = React.useRef(null)

  const scrollToTerm = term => {
    window.scrollTo({
      top:
        term * 415 +
        (agendaRef.current.offsetTop + agendaRef.current.offsetHeight + 25),
      behavior: 'smooth',
    })
  }

  return (
    <React.Fragment>
      <div
        className="agenda"
        ref={agendaRef}
        // style={{height: `${max_children_count * 85 + 120}px`}}
      >
        <div className="terms">
          {props.events.map((event, idx) => (
            <div
              className="term"
              style={{width: `${(100 / props.duration) * event.duration}%`}}
              key={idx}
            >
              <div className="term-line"></div>
              <div className="term-number">{event.title}</div>
              <div className="boxes">
                {event.children.map((course, idx2) => (
                  <div
                    className="box-center"
                    key={idx2}
                    onClick={() => scrollToTerm(idx)}
                  >
                    <div
                      className="box"
                      style={{
                        width: `${(100 / event.duration) *
                          course.inner_duration}%`,
                      }}
                    >
                      {course.title}
                    </div>
                    <div
                      className="box"
                      style={{
                        width: `${(100 / event.duration) *
                          course.inner_duration -
                          5}%`,
                        padding: '5px',
                        marginBottom: '5px',
                        backgroundColor: '#e5e5e4',
                        backgroundImage: 'none',
                      }}
                    >
                      حداقل امتیاز وروردی: {course.point}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="agenda-grid">
          {Array.from(Array(props.duration + 1), (e, i) => {
            return (
              <div className="grid" key={i}>
                <div className="grid__line"></div>
                <div className="grid__number">{toPersianDigits(`${i}`)}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="no-support">صفحه نمایش شما بسیار کوچک است</div>
    </React.Fragment>
  )
}

export default FieldAgenda
