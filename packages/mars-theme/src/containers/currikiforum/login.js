import React from "react";
// import Headings from 'curriki-design-system/dist/utils/Headings/headings';
// import Buttons from 'curriki-design-system/dist/utils/Buttons/buttons';
import { Formik, Field } from "formik";
const Login = () => {
  return (
    <>
      <div className="login-section">
        <div className="login-buttons">
          <button className="yellow-btn"> Login</button>
          <button className="white-btn" disabled>
            Register
          </button>
        </div>
        <div className="login-forum">
          <Formik
            initialValues={{
              email: "",
              password: "",
              toggle: false,
              checked: [],
            }}
            validate={(values) => {
              const errors = {};
              if (!values.password) {
                errors.password = "Required";
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
                {/* <Headings className="form-name" color="#515151" headingType="body2" text="Username" /> */}
                <p>Username</p>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                {/* <Headings className="form-name" color="#515151" headingType="body2" text="Password" /> */}
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <label>
                  <Field
                    type="checkbox"
                    className="checked"
                    name="checked"
                    value="Keep me signed in"
                  />
                  {/* <Headings className="" color="#515151" headingType="body2" text="Keep me signed in" /> */}
                  <p>Keep me signed in</p>
                </label>
                <button type="submit" text="Login">
                  Login
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
