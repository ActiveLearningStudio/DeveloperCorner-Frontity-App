import React from "react";
import { styled } from "frontity";
import { Formik, Field } from "formik";
import ContactImage from "../../assets/images/Hero-background.png";
import formimage from "../../assets/images/formimage.png";
const ContactUs = () => {
  return (
    <Section>
      <Container>
        <InnerDiv>
          <h2>Contact us</h2>
          <Paradiv>
            <p>
              Is your business interested in using CurrikiStudio technology? Get
              in touch with us and we can setup a demo and discussion of how we
              can help!
            </p>
          </Paradiv>
          <FormContent>
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
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
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
                    <p>Name</p>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
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
                    <button type="submit" disabled={isSubmitting}>
                      Send message
                    </button>
                  </form>
                )}
              </Formik>
            </FormDiv>
            <ImgContact>
              <img src={formimage} alt="Image" />
            </ImgContact>
          </FormContent>
        </InnerDiv>
      </Container>
      <img src={ContactImage} atl="" />
    </Section>
  );
};

export default ContactUs;
const Section = styled.div`
  position: relative;
  margin-top: 110px;
  img {
    width: 100%;
    position: absolute;
    top: -160px;
    z-index: -1;
  }
`;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  margin: auto;
  @media screen and (max-width: 1200px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 40px;
  }
`;
const Paradiv = styled.div`
  max-width: 650px;
`;
const FormContent = styled.div`
  position: relative;
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
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
    input[type="text"] {
      height: 200px;
    }
    button {
      margin-top: 20px;
      height: 40px;
      width: 170px;
      background: #084892;
      border: 1px solid #084892;
      color: #fff;
      font-family: "Rubik";
      box-shadow: 0px 10px 20px -5px rgba (8, 72, 146, 0.35);
      border-radius: 25px;
      margin-bottom: 4rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;
const ImgContact = styled.div`
  img {
    position: absolute;
    z-index: 1;
    right: -30px;
    top: 0px;
    max-width: 525px;
    height: 431;
    @media screen and (max-width: 1200px) {
      right: -96px;
    }
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
