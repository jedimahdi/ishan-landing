import React from 'react';

import Header from '../../components/homepage/header/header.component';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from '../../shared/util/validators';
import './contact.styles.scss';

const ContactPage = () => {
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
        breadcrump="تماس با ما"
      />
      <section id="contact" className="text-right text-white">
        <div className="seprator"></div>
        <div className="container">
          <h2>تماس با ما</h2>
          <div className="row">
            <div className="col-md-5 contact-info">
              <p>
                تهران - ستارخان - نرسیده به توحید - کوچه لادن - پلاک 20 واحد 1
              </p>
              <p>
                کد پستی: 1441683154 | شماره تماس : 02166925724 - 09032344166
              </p>
              <p>
                ساعت کاری واحد اداری و پشتیبانی : 9 صبح تا 5 بعد از ظهر ( شنبه
                تا پنجشنبه )
              </p>
            </div>

            <div className="col-md-7">
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
                  label="ایمیل"
                  validators={[VALIDATOR_EMAIL()]}
                  errorText="ایمیل وارد شده معتبر نمی باشد."
                  onInput={inputHandler}
                />
                <Input
                  id="mobile"
                  element="input"
                  type="text"
                  label="شماره همراه"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="شماره وارد شده معتبر نیست"
                  onInput={inputHandler}
                />
                <Input
                  id="text"
                  element="textarea"
                  label="توضیحات"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="فیلد توضیحات الزامی است."
                  onInput={inputHandler}
                />

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

export default ContactPage;
