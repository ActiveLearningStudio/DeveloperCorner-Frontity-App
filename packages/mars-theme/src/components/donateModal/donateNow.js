import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { styled } from "frontity";
import { Formik, Field } from "formik";
import donateImg from "../../assets/images/donateImg.png";
import heart from "../../assets/images/heart.png";
import "./style.css";
const DonateNow = (props) => {
  const [donatesubmit, setdonatesubmit] = useState(false);
  return (
    <Container>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
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
              <button>Donate now </button>
              <img src={donateImg} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setdonatesubmit(true)}>Donate Now</Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </div>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Donations
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="body-donation">
                <img src={heart} />
                <a href="#">Back</a>
                <div className="inner-donation">
                  <div className="inner-content">
                    <h4>Make a donation</h4>
                    <p>Your donation supports our non-profit mission.</p>
                  </div>
                  <p>
                    0,00 <span>USD</span>
                  </p>
                </div>
              </div>
              <div className="form-donation">
                <div className="left-donation">
                  <h4>Personal information</h4>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      password: "",
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
                      </form>
                    )}
                  </Formik>
                </div>
                <div className="right-donation">
                  <h4>Card details</h4>
                  <Formik
                    initialValues={{
                      passwerd: "",
                      toggle: false,
                      checked: [],
                    }}
                    validate={(values) => {}}
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
                        {/* <Headings className="form-name" color="#515151" headingType="body2" text="Password" /> */}
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
                      </form>
                    )}
                  </Formik>
                  <img src={donateImg} />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalShow(true)}>Donate Now</Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};
export default DonateNow;
const Container = styled.div`
  .donation-container {
    .modal-header {
      background: red;
    }
  }
  .modal-dialog {
    .modal-content {
      padding: 0px 146px;
      div {
        .modal-header {
          background: linear-gradient(90deg, #084892 30.14%, #285aa5 94.74%);
          background: red !important;
          border-radius: 25px;
          color: #084892;
          .modal-body {
            .modal.show .modal-dialog {
              text-align: center;
              h4 {
                font-family: Rubik;
                font-style: normal;
                font-weight: 500;
                font-size: 36px;
                line-height: 43px;
                color: #084892;
              }
              h3 {
                width: 201px;
                height: 116px;
                font-family: Rubik;
                font-style: normal;
                font-weight: 300;
                font-size: 98px;
                line-height: 116px;
                text-align: center;
                color: #084892;
              }
            }
          }
        }
      }
    }
  }
`;
