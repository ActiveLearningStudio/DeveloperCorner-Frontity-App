import React from "react";
import { styled } from "frontity";
import { Formik, Field } from "formik";
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
    color: #084892;
    margin-bottom: 10px;
  }
  p {
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
      background: #082862;
      border-radius: 50px;
      color: #fff;
      border: none;
      margin-bottom: 4rem;
    }
  }
`;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 20px 110px;
`;
