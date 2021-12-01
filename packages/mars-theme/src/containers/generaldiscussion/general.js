import React from "react";
import Arrow from "../../assets/images/R-arrow.svg";
import UserIcon from "../../assets/images/User.svg";
import Table from "react-bootstrap/Table";

import { Formik, Field } from "formik";

const General = () => {
  return (
    <>
      <div className="general-section">
        <div className="nav-header">
        <a className="">Home</a>
          <img src={Arrow} alt="arrow" />
          <a className="">Forums</a>
          <img src={Arrow} alt="arrow" />
          <a className="active">Genaral Discussion</a>
        </div>
        <div className="update">
          <p>This forum has 1 topic, and was last updated</p>
          <a>2 weeks, 1 day ago</a>
          <p>by</p>
          <img src={UserIcon} alt="arrow" />
          <a>Steven</a>
        </div>
        <div className="table-blog">
          <div className="table-heading">
            <p>Viewing topic 1 (of 1 total)</p>
          </div>
          <Table className="table" size="sm">
            <thead>
              <tr>
                <th>
                  <h5>Topic</h5>
                </th>
                <th>
                  <h5>Voices</h5>
                </th>
                <th>
                  <h5>Posts</h5>
                </th>
                <th>
                  <h5>Last post</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  First topic
                  <div className="started">
                    <p style={{ marginRight: "10px" }}>Started by:</p>
                    <img src={UserIcon} alt="arrow" />

                    <a
                      href="#"
                      style={{
                        color: "#084892",
                        textDecoration: "none",
                        marginLeft: "10px",
                      }}
                    >
                      Steven
                    </a>
                  </div>
                </td>
                <td>1</td>
                <td>1</td>
                <td>
                  2 weeks, 1 day ago
                  <div className="last-post">
                    <img src={UserIcon} alt="arrow" />

                    <a
                      href="#"
                      style={{
                        color: "#084892",
                        textDecoration: "none",
                        marginLeft: "10px",
                      }}
                    >
                      Steven
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="login">
          <p>You must be logged in to create new topics.</p>
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
                  <p>Username</p>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}

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
                    <p>Keep me signed in</p>
                  </label>

                  <button type="submit" disabled={isSubmitting}>
                    Log in
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
