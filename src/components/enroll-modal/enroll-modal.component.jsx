import React from 'react'

import Modal from '../../shared/components/UIElements/Modal'
import Button from '../../shared/components/FormElements/Button'
import {toPersianDigits} from '../../shared/util/helpers'
import './enroll-modal.styles.scss'

const EnrollModal = props => {
  return (
    <Modal
      show={props.show}
      onCancel={props.onCancel}
      header="هنرجوی گرامی"
      footer={<Button onClick={props.onCancel}>انصراف</Button>}
      contentClass="enroll-modal-content"
    >
      <div className="enroll-modal">
        <div>
          برای ثبت نام و رزرو دوره ، ابتدا به صفحه دوره و یا رشته مورد نظر رفته
          و پس از مطالعه دقیق توضیحات و رعایت هم نیاز و پیشنیاز، در صفحه مورد
          نظر فرم درخواست را پرکرده تا کارشناسان ما با شما ارتباط خواهند گرفت .
          <br />
          <div className="row social-icons">
            <div className="col-md-12">
              سوالات و راهنمایی های بیشتر از طریق واتس اپ
              <a href="https://wa.me/989032344166">
                <i className="fa fa-whatsapp"></i>
              </a>
              و تلگرام
              <a href="https://t.me/ishan_online">
                <i className="fa fa-telegram"></i>
              </a>
              به شماره {`${toPersianDigits('09032344166')}`} و یا تماس با
              {`${toPersianDigits(' 02166925724')}`}
            </div>
          </div>
          <div className="seprator"></div>
          <div className="row">
            <div className="col-md-6">
              <Button to="/courses" inverse>
                برای مشاهده لیست دوره‌ها
              </Button>
            </div>
            <div className="col-md-6">
              <Button to="/fields" inverse>
                برای مشاهده لیست رشته‌ها
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default EnrollModal
