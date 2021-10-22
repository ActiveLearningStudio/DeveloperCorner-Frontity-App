import React from "react";
// import Headings from "curriki-design-system/dist/utils/Headings/headings";
// import { Button } from "react-bootstrap";
import Arrow from "../../assets/images/R-arrow.svg";
import UserIcon from "../../assets/images/User.svg";
import Table from "react-bootstrap/Table";
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field } from "formik";

const General = () => {
  return (
    <>
      <div className="general-section">
        <div className="nav-header">
          {/* <Headings className=" cursor" color="#515151" headingType="body3" text="Home" />
     <img src={Arrow} alt="arrow" />
     <Headings className=" cursor" color="#515151" headingType="body3" text="Forums" />
     <img src={Arrow} alt="arrow" />
     <Headings className=" cursor" color="#515151" headingType="body3" text="General Discussion" />
     <p className="cursor">Home</p> */}
          <img src={Arrow} alt="arrow" />
          <a className="cursor">Forums</a>
          <img src={Arrow} alt="arrow" />
          <a className="cursor">Genaral Discussion</a>
        </div>
        <div className="update">
          {/* <Headings
      className=""
      color="#515151"
      headingType="body2"
      text="This forum has 1 topic, and was last updated"
     />
     <Headings headingType="body2" color="#084892" text="2 weeks, 1 day ago" />
     <Headings className="" color="#515151" headingType="body2" text="by" />
     <img src={UserIcon} alt="arrow" />
     <Headings headingType="body2" color="#084892" text="Steven" /> */}
          <p>This forum has 1 topic, and was last updated</p>
          <a>2 weeks, 1 day ago</a>
          <p>by</p>
          <img src={UserIcon} alt="arrow" />
          <a>Steven</a>
        </div>
        <div className="table-blog">
          <div className="table-heading">
            {/* <Headings
              className=""
              color="#515151"
              headingType="body3"
              text="Viewing topic 1 (of 1 total)"
            /> */}
            <p>Viewing topic 1 (of 1 total)</p>
          </div>
          <Table className="table" size="sm">
            <thead>
              <tr>
                <th>
                  {/* <Headings headingType="h5" color="#515151" text="Topic" /> */}
                  <h5>Topic</h5>
                </th>
                <th>
                  {/* <Headings headingType="h5" color="#515151" text="Voices" /> */}
                  <h5>Voices</h5>
                </th>
                <th>
                  {/* <Headings headingType="h5" color="#515151" text="Posts" /> */}
                  <h5>Posts</h5>
                </th>
                <th>
                  {/* <Headings headingType="h5" color="#515151" text="Last post" /> */}
                  <h5>Last post</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {/* <Headings
                    headingType="body2"
                    color="#084892"
                    text="First topic"
                  /> */}
                  First topic
                  <div className="started">
                    {/* <Headings
                      headingType="body2"
                      color="#515151"
                      text="Started by:"
                    /> */}
                    <p style={{ marginRight: "10px" }}>Started by:</p>
                    <img src={UserIcon} alt="arrow" />
                    {/* <Headings
                      headingType="body2"
                      color="#084892"
                      text="Steven"
                    /> */}
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
                <td>
                  {/* <Headings headingType="body2" color="#084892" text="1" /> */}
                  1
                </td>
                <td>
                  {/* <Headings headingType="body2" color="#084892" text="1" /> */}
                  1
                </td>
                <td>
                  {/* <Headings
                    headingType="body2"
                    color="#084892"
                    text="2 weeks, 1 day ago"
                  /> */}
                  2 weeks, 1 day ago
                  <div className="last-post">
                    <img src={UserIcon} alt="arrow" />
                    {/* <Headings
                      headingType="body2"
                      color="#084892"
                      text="Steven"
                    /> */}
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
          {/* <Headings
            className=""
            color="#515151"
            headingType="body3"
            text="You must be logged in to create new topics."
          /> */}
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
                  <p>Username</p>
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
                    text="Password"
                  /> */}
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
                    {/* <Headings
                      className=""
                      color="#515151"
                      headingType="body2"
                      text="Keep me signed in"
                    /> */}
                    <p>Keep me signed in</p>
                  </label>
                  {/* <button type="submit">Login</button> */}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
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
