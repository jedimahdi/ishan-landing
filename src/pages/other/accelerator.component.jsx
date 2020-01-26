import React from 'react';

import Header from '../../components/homepage/header/header.component';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from '../../shared/util/validators';
import './accelerator.styles.scss';

const AcceleratorPage = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const contactUsSubmitHandler = event => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Header
        media="https://www.gnomon.edu/assets/static/bg-mailing-list-e1ab6419889d926a49278fc6d0bd4a6734a364847bf096861f791512428dbafa.jpg"
        small
        breadcrump="شتابدهنده"
      />
      <section id="contact" className="text-white">
        <div className="seprator"></div>
        <div className="container">
          <h2>شتابدهنده </h2>
          <div className="row">
            <div className="col-md-7 contact-info">
              <p>
                شتابدهنده رایمون به صاحبان ایده ها کمک می کند تا بتوانند تعریفی
                صحیح و نمونه اولیه مناسبی از کالا و یا خدماتی که قصد نوآوری در
                آن صنعت را دارند ارائه دهند.
              </p>
              <p>
                ما در رایمون با برگزاری دوره های فشـرده حمـایتی قصـد تسـریع
                موفقیـت و پیشرفت شرکتهای نوپا را داریم. بسیاری از شرکت های تازه
                تاسیس، در مراحل اولیه رشد، به مشاوره مدیریتی، بازاریابی، مالی و
                فناورانه نیازمند هستند و هدف از برگزاری این دوره ها کمک همه
                جانبه به آنها است.
              </p>
              <p>
                ما در شتابدهنده رایمون از تیم های استارت‌آپی که ایده‌ های مورد
                تأیید ما را دارند حمایت می‌کنیم، درواقع ایده‌های استارت‌آپ‌های
                مختلف را گلچین می‌کنیم و بهترین آن‌ها که در کمترین زمان به
                بیشترین پیشرفت برسد را انتخاب می‌کنیم.
              </p>
              <p>
                دنیای امروزه پر شده از استارتاپ هایی است که ممکن است موفق شده و
                به یک شرکت غول پیکر و جهانی تبدیل شوند و یا در همان نطقه اولیه
                خفه شده و از بین بروند. شتاب دهنده یا همان Accelerator شرکت های
                مبتنی بر رشد می باشند که استارتاپ ها را از طریق آموزش، تأمین
                سرمایه شروع به کار، تأمین فضا و محلی برای انجام امور و…از همان
                مراحل ابتدای راه (مرحله ایده) حمایت میکنند. درواقع شتابدهنده
                ها،شرکتهایی متخصص وباتجربه کاری بسیاربالامیباشندکه به عنوان یک
                کاتالیزور عمل می کنندوبرای مدت زمان مشخصی (کوتاه مدت یا بلند
                مدت) وارد فعالیت یک یا چند استارتاپ (به صورت موازی) می شوند و
                اعضا و افراد را آموزش همه جانبه داده و با حمایت های مختلف مادی و
                معنوی آنان را تا پایان مسیر هدایت می نمایند.
              </p>

              <p>
                مهم ترین تأثیر حضور یک شتاب دهنده برای یک استارتاپ سرعت بخشیدن
                به کلیه فرآیندها جهت راه اندازی و سرپا شدن می باشد تا کارآفرینان
                بتوانند هرچه سریع تر چرخه زندگی این استارتاپ را به یک کسب و کار
                از گل درآمده تبدیل نمایند.
              </p>
            </div>

            <div className="col-md-5">
              <form onSubmit={contactUsSubmitHandler}>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      id="fname"
                      element="input"
                      type="text"
                      label="نام"
                      validators={[VALIDATOR_REQUIRE()]}
                      errorText="فیلد نام الزامی است."
                      onInput={inputHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      id="lname"
                      element="input"
                      type="text"
                      label="نام خانوادگی"
                      validators={[VALIDATOR_REQUIRE()]}
                      errorText="فیلد نام خانوادگی الزامی است."
                      onInput={inputHandler}
                    />
                  </div>
                </div>
                <Input
                  id="email"
                  element="input"
                  type="email"
                  label="آدرس ایمیل"
                  validators={[VALIDATOR_EMAIL()]}
                  errorText="ایمیل وارد شده معتبر نمی باشد."
                  onInput={inputHandler}
                />

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-input select-input-control">
                      <label htmlFor="">چگونه با آیشن آشنا شده اید</label>
                      <select
                        name=""
                        id=""
                        className="form-control select-input"
                      >
                        <option value=""></option>
                        <option value="">دوستان</option>
                        <option value="">شبکه اجتماعی</option>
                        <option value="">سایت</option>
                        <option value="">دیگر</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <Input
                      id="lname"
                      element="input"
                      type="text"
                      label="اگر 'دیگر' ذکر کنید"
                      validators={[VALIDATOR_REQUIRE()]}
                      errorText="فیلد نام خانوادگی الزامی است."
                      onInput={inputHandler}
                    />
                  </div>
                </div>

                <Button type="submit" disabled={!formState.isValid}>
                  <span>ارسال</span>
                  <i className="fa fa-long-arrow-left pull-left"></i>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="seprator-lg"></div>
      </section>
    </React.Fragment>
  );
};

export default AcceleratorPage;
