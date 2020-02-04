import React, { useState } from 'react';

import { toPersianDigits } from '../../shared/util/helpers';
import Header from '../../components/homepage/header/header.component';
import Image1Src from '../../assets/images/other/speak-adviser.jpg';
import ButtonIcon from '../../shared/components/FormElements/ButtonIcon';
import EnrollModal from '../../components/enroll-modal/enroll-modal.component';
import './speak_to_adviser.styles.scss';

const SpeakAdviser = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <EnrollModal show={showModal} onCancel={() => setShowModal(false)} />

      <Header media={Image1Src} small breadcrump="مشاور" />
      <section id="internship" className="text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_group">
                <h2> وقت مشاوره و صحبت کردن با منتور</h2>
              </div>

              <div className="row">
                <div className="col-md-7">
                  <p>
                    ما در آیشن متعهد هستیم به شما در یافتن بهترین مسیر آموزشی و
                    رسیدن به اهدافتان کمک کنیم . مشاوران ما افرادی هستند که نیاز
                    های صنعت را به خوبی می شناسند و بهترین برنامه عملی را بر
                    اساس وضعیت فردی شما پیشنهاد می کنند. مشاوران را می توانید پس
                    از پر کردن فرم درخواست به صورت تلفنی ، حضوری ، از طریق رسانه
                    ای اجتماعی و به صورت مستقیم صحبت کنید و به آنچه که در نظرتان
                    و استعدادتان می باشد برسید.
                  </p>
                </div>

                <div className="col-md-5">
                  <div className="call-icon">
                    <i className="fa fa-phone"></i>{' '}
                    <span>{toPersianDigits('02166925724')}</span>
                  </div>
                  <div className="call-icon">
                    <i className="fa fa-phone"></i>{' '}
                    <span>{toPersianDigits('09032344166')}</span>
                  </div>
                  <div>
                    <ButtonIcon onClick={() => setShowModal(true)}>
                      درخواست مشاوره
                    </ButtonIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seprator-lg"></div>
      </section>
    </React.Fragment>
  );
};

export default SpeakAdviser;
