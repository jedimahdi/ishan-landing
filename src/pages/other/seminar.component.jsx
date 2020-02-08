import React from 'react'

import Header from '../../components/homepage/header/header.component'
import Input from '../../shared/components/FormElements/Input'
import Select from '../../shared/components/FormElements/Select'
import Button from '../../shared/components/FormElements/Button'
import {useForm} from '../../shared/hooks/form-hook'
import {VALIDATOR_REQUIRE, VALIDATOR_EMAIL} from '../../shared/util/validators'
import Image1Src from '../../assets/images/other/SEMINAR.jpg'
import './internship.styles.scss'
import './seminar.styles.scss'

const SeminarPage = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
    },
    false,
  )

  const contactUsSubmitHandler = event => {
    event.preventDefault()
  }
  return (
    <React.Fragment>
      <Header media={Image1Src} small breadcrump="همایش‌ها" />
      <section id="internship" className="text-white">
        <div className="seprator"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_group">
                <h3>
                  برگزاری سمینار در دانشگاه و مدارس و بازدید از استودیو و شرکت
                  های فعال
                </h3>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <p>
                    یک فرصت عالی جهت مشاوره و بازدید و دیدن پایپ لاین کاری در
                    بخش های مختلف برای شما وجود دارد و می توانید با اشخاصی که در
                    صنعت فعالیت میکنند بنشینید و مشاوره بگیرید
                  </p>
                  <ul className="left-side" style={{marginBottom: '20px'}}>
                    <li>
                      مشاوره در حوزه های هنرهای دیجیتالی-برنامه نویسی-بازیسازی
                    </li>
                    <li>
                      مدیریت و مشاوره در ضمینه پایپ لاین تولید و استفاده از
                      متدهای روز دنیا
                    </li>
                    <li>خدمات مشاوره بازار</li>
                    <li>
                      ارایه خدمات حقوقی جهت مشاوره در قرارداد های داخلی و بین
                      المللی
                    </li>
                  </ul>
                  <p>
                    امکان مشاوره از ساعت 10:30 الی 16 با هماهنگی قبلی وجود دارد
                    و افراد می توانند جهت مشاوره حضوری با توجه به زمینه فعالیت
                    به استودیو ها و شرکت های همکار معرفی شوند
                  </p>
                  <p>
                    شما می توانید درخواست برگزاری سمینار های تخصصی و مسابقات را
                    در دانشگاه و شهر خود از طریق ایمیل با موضوع درخواستی بفرستید
                    و با بررسی های مورد نظر حتما هر چه زودتر در شهر و دانشگاه
                    شما خواهیم بود
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <Input
                id="fname"
                element="input"
                type="text"
                label="نام و نام خانوادگی"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="فیلد نام الزامی است."
                onInput={inputHandler}
              />
            </div>
            <div className="col-md-4">
              <Input
                id="fname"
                element="input"
                type="text"
                label="سمت درخواست کننده"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="فیلد نام الزامی است."
                onInput={inputHandler}
                placeholder="عادی - دانشجو - عضو انجمن و ..."
              />
            </div>
            <div className="col-md-4">
              <Input
                id="fname"
                element="input"
                type="text"
                label="شهر"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="فیلد نام الزامی است."
                onInput={inputHandler}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <Select label="موضوع پیشنهادی" id="requested_title">
                <option value=""></option>
                <option value="">هنرهای دیجیتالی</option>
                <option value="">بازیسازی</option>
                <option value="">برنامه نویسی</option>
              </Select>
            </div>
            <div className="col-md-4">
              <Select label="نوع درخواست" id="request_type">
                <option value=""></option>
                <option value="">بازدید</option>
                <option value="">برگزاری سمینار</option>
              </Select>
            </div>
            <div className="col-md-4">
              <Input
                id="fname"
                element="input"
                type="text"
                label="محل پیشنهادی برگزاری سمینار"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="فیلد نام الزامی است."
                onInput={inputHandler}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <Input
                id="fname"
                element="input"
                type="text"
                label="شماره تماس یا ایمیل"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="فیلد نام الزامی است."
                onInput={inputHandler}
              />
              <div className="seminar-submit-button">
                <Button>ارسال فرم درخواست</Button>
              </div>
            </div>
            <div className="col-md-8">
              <Input
                id="fname"
                element="textarea"
                label="توضیحات"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="فیلد نام الزامی است."
                onInput={inputHandler}
                placeholder="بازدید یا برگزاری سمینار"
                rows={4}
              />
            </div>
          </div>
        </div>
        <div className="seprator-lg"></div>
      </section>
    </React.Fragment>
  )
}

export default SeminarPage
