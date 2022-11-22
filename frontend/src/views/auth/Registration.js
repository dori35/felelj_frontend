import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signup } from "../../state/auth/actions";
import { Formik } from "formik";
import { object, string, ref } from "yup";

export function Registration() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDanger, setShowDanger] = useState(false);
  const dispatch = useDispatch();

  let schema = object({
    name: string().required("Kötelező kitölteni"),
    identifier: string()
      .required("Kötelező kitölteni")
      .min(6, "Pontosan 6 karakterből kell állnia")
      .max(6, "Pontosan 6 karakterből kell állnia"),
    email: string().required("Kötelező kitölteni").email(),
    password: string()
      .required("Kötelező kitölteni")
      .min(4, "Min. 4 karakterből kell állnia")
      .test(
        "Biztonságos jelszó",
        "A jelszó tartalmazzon kis- és nagybetűket, valamint számot",
        (value) => {
          const hasUpperCase = /[A-Z]/.test(value);
          const hasLowerCase = /[a-z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          let validNum = 0;
          const conditions = [hasLowerCase, hasUpperCase, hasNumber];
          conditions.forEach((condition) => (condition ? validNum++ : null));
          return validNum === 3;
        }
      ),

    password2: string()
      .required("Kötelező kitölteni")
      .oneOf([ref("password"), null], "Nem egyezik a jelszó"),
    role: string()
      .required("Kötelező választani")
      .oneOf(["STUDENT", "TEACHER"], "Kötelező szerepkört választani"),
  });

  const handleSubmit = async (e) => {
    try {
      const response = await dispatch(
        signup(e.name, e.password, e.identifier, e.email, e.role)
      );
      if (response.text === "success registration") {
        setShowSuccess(true);
        setShowDanger(false);
      } else if (response.error) {
        setShowDanger(true);
      }
    } catch (error) {}
  };

  return (
    <div>
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)}>
          <Alert.Heading>Sikeres regisztráció!</Alert.Heading>
          <p>Már be tudsz jelentkezni.</p>
        </Alert>
      )}
      {showDanger && (
        <Alert variant="danger" onClose={() => setShowDanger(false)}>
          <Alert.Heading>Jaj, valami hiba történt!</Alert.Heading>
          <p>
            Nem sikerült a regisztráció. Lehetséges, hogy a neptun-kódhoz már
            tartozik profil.
          </p>
        </Alert>
      )}

      {!showSuccess && (
        <Container className="py-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <Card
                className="bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <Card.Body className="p-5 text-center">
                  {" "}
                  <Card.Title className="mb-5 fw-bold text-uppercase">
                    Regisztráció
                  </Card.Title>
                  <Formik
                    validationSchema={schema}
                    initialValues={{
                      name: "",
                      identifier: "",
                      email: "",
                      role: "TEACHER",
                      password: "",
                      password2: "",
                    }}
                    onSubmit={handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      isValid,
                    }) => (
                      <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3 ">
                          <Form.Group as={Col} md="8" controlId="name">
                            <Form.Label>Teljes név</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={values.name}
                              isValid={touched.name && !errors.name}
                            />{" "}
                            <p className="text-danger">
                              {" "}
                              {errors.name && touched.name && errors.name}
                            </p>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md="4"
                            controlId="identifierUserName"
                          >
                            <Form.Label>Neptun-kód</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              name="identifier"
                              onChange={handleChange}
                              value={values.identifier}
                              isValid={touched.identifier && !errors.identifier}
                            />{" "}
                            <p className="text-danger">
                              {" "}
                              {errors.identifier &&
                                touched.identifier &&
                                errors.identifier}{" "}
                            </p>
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} md="12" controlId="email">
                            <Form.Label>E-mail cím</Form.Label>
                            <Form.Control
                              required
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={values.email}
                              isValid={touched.email && !errors.email}
                            />
                            <p className="text-danger">
                              {" "}
                              {errors.email && touched.email && errors.email}
                            </p>
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} md="4" controlId="role">
                            <Form.Label>Ki Ön?</Form.Label>{" "}
                            <Form.Check
                              defaultChecked
                              label="Oktató"
                              name="role"
                              type="radio"
                              id="teacher"
                              onChange={handleChange}
                              value="TEACHER"
                            />
                            <Form.Check
                              label="Diák"
                              name="role"
                              type="radio"
                              id="student"
                              onChange={handleChange}
                              value="STUDENT"
                            />{" "}
                            <p className="text-danger">
                              {" "}
                              {errors.role && touched.role && errors.role}{" "}
                            </p>
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="passworld1">
                            <Form.Label>Jelszó</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="password"
                              onChange={handleChange}
                              value={values.password}
                              isValid={touched.password && !errors.password}
                            />
                            <p className="text-danger">
                              {" "}
                              {errors.password &&
                                touched.password &&
                                errors.password}{" "}
                            </p>
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="passworld2">
                            <Form.Label>Jelszó újra</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="password2"
                              onChange={handleChange}
                              value={values.password2}
                              isValid={touched.password2 && !errors.password2}
                            />
                            <p className="text-danger">
                              {" "}
                              {errors.password2 &&
                                touched.password2 &&
                                errors.password2}{" "}
                            </p>
                          </Form.Group>
                        </Row>

                        <Button type="submit">Regisztrálok</Button>
                      </Form>
                    )}
                  </Formik>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}
