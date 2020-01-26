import React, { useState } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './request_form.styles.scss';

const RequestFormModal = props => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      phone: {
        value: '',
        isValid: false
      },
      city: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: true
      },
      sex: {
        value: '',
        isValid: false
      },
      home_phone: {
        value: '',
        isValid: false
      }
    },
    false
  );
  const [secondStep, setSecondStep] = useState(false);

  return (
    <React.Fragment>
      <Modal
        show={props.show}
        onCancel={props.onCancel}
        header="فرم درخواست مشاوره ( مشخصات فردی )"
        footer={
          <div>
            <Button
              // disabled={!formState.isValid}
              onClick={() => {
                props.onCancel();
                setSecondStep(true);
              }}
            >
              مرحله بعد
            </Button>
            /<Button onClick={props.onCancel}>انصراف</Button>/
          </div>
        }
      >
        <div className="container">
          <div className="custom-alarm">
            <h6>** توجه:</h6>
            <p>تکمیل این فرم هیچگونه هزینه ای در بر ندارد.</p>
            <p>
              خواهشمند است در درج اطلاعات این فرم نهایت دقت را مبذول فرمایید.
            </p>
            <p>
              ارسال این فرم تنها جهت مشاوره پیش از دوره بوده و به منزله ثبت نام
              در دوره نمی باشد.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Input
                id="name"
                element="input"
                type="text"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="وارد کردن این فیلد الزامی است"
                label="نام و نام خانوادگی"
              />
              <Input
                id="phone"
                element="input"
                type="text"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="وارد کردن این فیلد الزامی است"
                label="شماره تلفن همراه"
              />
              <Input
                id="city"
                element="input"
                type="text"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="وارد کردن این فیلد الزامی است"
                label="شهر محل سکونت"
              />
              <Input
                id="address"
                element="input"
                type="text"
                onInput={inputHandler}
                validators={[]}
                errorText="وارد کردن این فیلد الزامی است"
                label="آدرس"
              />
            </div>
            <div className="col-md-6">
              <Input
                id="sex"
                element="input"
                type="text"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="وارد کردن این فیلد الزامی است"
                label="جنسیت"
              />
              <Input
                id="home_phone"
                element="input"
                type="text"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="وارد کردن این فیلد الزامی است"
                label="شماره تلفن همراه"
              />
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        show={secondStep}
        onCancel={() => setSecondStep(false)}
        header="فرم درخواست مشاوره ( توضیحات تکمیلی )"
        footer={
          <div>
            <Button
              onClick={() => {
                setSecondStep(false);
              }}
            >
              ثبت
            </Button>
            /<Button onClick={() => setSecondStep(false)}>انصراف</Button>/
          </div>
        }
      >
        <Input
          id="skills"
          element="input"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="وارد کردن این فیلد الزامی است"
          label="مهارت های نرم افزاری خود را به صورن مختصر شرح دهید."
        />
        <Input
          id="other_skills"
          element="textarea"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="وارد کردن این فیلد الزامی است"
          label="سایر مهارت ها"
        />
        {/* <div className="custom-file">
          <label htmlFor="file"></label>
          <input type="file" className="" id="file" />
        </div> */}
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="customFileLangHTML"
          />
          <label
            class="custom-file-label"
            for="customFileLangHTML"
            data-browse="ارسال فایل"
          >
            نمونه کار های خود را ارسال کنید.
          </label>
        </div>
        <div className="seprator-lg"></div>
      </Modal>
    </React.Fragment>
  );
};

export default RequestFormModal;
