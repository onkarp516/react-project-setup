import React, { useEffect } from "react";
import { withNavigate } from "@/routes";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Spinner } from "react-bootstrap";

import { authenticationService } from "@/services/api_functions";

const Login = (props) => {
  return (
    <div>
      Login
      <div className="p-5 text-center">
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().trim().required("Username is required"),
            password: Yup.string().trim().required("Password is required"),
          })}
          onSubmit={(value, { setSubmitting, resetForm }) => {
            // console.log("value", value);
            authenticationService.login(value).then(
              (response) => {
                // console.log("response", response);
                setSubmitting(false);
                if (response["responseStatus"] === 200) {
                  props.navigate("/");
                } else if (response.status == "ERROR") {
                  console.log("response ERROR", response);
                  // toast.error("✘ " + response.error_code.trim());
                }
              },
              (error) => {
                setSubmitting(false);
                console.log("error", error);
              }
            );
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
            resetForm,
          }) => (
            <Form onSubmit={handleSubmit} noValidate autoComplete={"off"}>
              <Form.Group>
                <Form.Control
                  autoFocus
                  className="mb-3"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  onChange={handleChange}
                  value={values.username}
                  isValid={touched.username && !errors.username}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className="mb-3"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                  placeholder="Password"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default withNavigate(Login);
