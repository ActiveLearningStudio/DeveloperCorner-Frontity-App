import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Field } from "formik";
import donateImg from "../../assets/images/donateImg.png";
import Back from "../../assets/images/Back.png";
import { styled, Global, css } from "frontity";
import externalCss from "./style.css";
const DonateNow = (props) => {
  const [donatesubmit, setdonatesubmit] = useState(false);
  return (
    <div className="modal-container">
      <Global styles={css(externalCss)} />
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="test"
      >
        {donatesubmit != true ? (
          <div className="donation-container">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Donations
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Make a donation</h4>
              <p>
                To donate by credit or debit card, please enter the amount you
                wish to contribute and then click the "Donate Now" button to
                continue to the secure payment page.
              </p>
              <h3>0.00</h3>
              <h5>USD</h5>
              <button onClick={() => setdonatesubmit(true)}>Donate now </button>
              <img src={donateImg} />
            </Modal.Body>
          </div>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Donations
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="model-body-2">
              <div className="body-donation">
                <a href="#">
                  yfyf
                  <img src={Back} onClick={() => setdonatesubmit(false)} />
                </a>
                <div className="inner-donation">
                  <div className="inner-content">
                    <h4>Make a donation</h4>
                    <p>Your donation supports our non-profit mission.</p>
                  </div>
                  <div className="inner-dollar">
                    <h3>0,00</h3>
                    <h5>USD</h5>
                  </div>
                </div>
              </div>
              <div className="form-donation">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    number: "",
                    toggle: false,
                    checked: [],
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Required";
                    }
                    if (!values.password) {
                      errors.password = "Required";
                    }
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  // onSubmit={(values, { setSubmitting }) => {
                  //  setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   setSubmitting(false);
                  //  }, 400);
                  // }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      {/* <Headings className="form-name" color="#515151" headingType="body2" text="Username" /> */}
                      <div className="left-donation">
                        <h4>Personal information</h4>
                        <p>Name</p>
                        <input
                          type="name"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />

                        {errors.name && touched.name && errors.name}
                        {/* <Headings className="form-name" color="#515151" headingType="body2" text="Password" /> */}
                        <p>Email</p>
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <p>Phone</p>
                        <input
                          type="number"
                          name="number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.number}
                        />
                        {errors.number && touched.number && errors.number}
                      </div>
                      <div className="right-donation">
                        <h4>Card details</h4>
                        <p>Card number</p>
                        <input
                          type="passwerd"
                          name="passwerd"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.passwerd}
                        />
                        {errors.passwerd && touched.passwerd && errors.passwerd}
                        <button
                          className="login-btn"
                          type="submit"
                          text="Login"
                        >
                          send donation
                        </button>
                        <img src={donateImg} />
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};
export default DonateNow;
