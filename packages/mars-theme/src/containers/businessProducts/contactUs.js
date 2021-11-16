import React from "react";
import { styled } from "frontity";
import { Formik, Field } from "formik";
import { Container } from "react-bootstrap";
import ContactImage from "../../assets/images/Hero-background.png";
const ContactUs = () => {
  return (
    <Section>
      <Container>
        <InnerDiv>
          <h2>Contact Us</h2>
          <Paradiv>
            <p>
              Is your business interested in using CurrikiStudio technology? Get
              in touch with us and we can setup a demo and discussion of how we
              can help?
            </p>
          </Paradiv>
          <FormDiv>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
                toggle: false,
                checked: [],
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                }
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
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
                  {/* <Headings
                    className="form-name"
                    color="#515151"
                    headingType="body2"
                    text="Username"
                  /> */}
                  <p>Name</p>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  {/* <Headings
                    className="form-name"
                    color="#515151"
                    headingType="body2"
                    text="email"
                  /> */}
                  <p>Email</p>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <p>Message</p>
                  <input
                    type="text"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {/* <button type="submit">Login</button> */}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </FormDiv>
        </InnerDiv>
      </Container>
      <img src={ContactImage} atl="" />
    </Section>
  );
};

export default ContactUs;
const Section = styled.div`
  position: relative;
  img {
    width: 100%;
    position: absolute;
    top: -160px;
    z-index: -1;
  }
`;
const Paradiv = styled.div`
  width: 650px;
`;
const InnerDiv = styled.div`
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    color: #084892;
    margin-bottom: 10px;
  }
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #515151;
  }
`;
const FormDiv = styled.div`
  form {
    display: flex;
    flex-direction: column;
    p {
      color: #084862;
    }
    input {
      border-radius: 20px;
      width: 50%;
      border: 1px solid #084862;
      height: 25px;
      padding: 20px;
      margin-bottom: 10px;
    }
    input[type="text"] {
      height: 200px;
    }
    button {
      margin-top: 20px;
      width: 150px;
      background: #084892;
      border: 1px solid #084892;
      color: #fff;
      font-family: rubic;
      box-shadow: 0px 10px 20px -5px rgba (8, 72, 146, 0.35);
      border-radius: 25px;
      margin-bottom: 4rem;
    }
  }
`;
