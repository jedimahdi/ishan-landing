import React from 'react';

import './course_schedule.styles.scss';
import Accordian from '../../accordian/accordian.component';

const CourseSchedule = props => {
  return <Accordian items={props.weeks} />;
};

export default CourseSchedule;
