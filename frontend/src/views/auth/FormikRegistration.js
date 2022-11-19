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
import { object, string, ref, boolean, number, date, InferType } from "yup";

export function FormikRegistration() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("TEACHER");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDanger, setShowDanger] = useState(false);
  const dispatch = useDispatch();

  let schema = object({
    name: string().required(),
    identifier: string()
      .required()
      .min(6, "Pontosan 6 karakterből kell állnia")
      .max(6, "Pontosan 6 karakterből kell állnia"),
    email: string().email(),
    password: string()
      .required()
      .min(4, "Min. 4 karakterből kell állnia")
      .test("Biztonságos jelszó", "Túl egyszerű jelszó", (value) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        let validNum = 0;
        const conditions = [hasLowerCase, hasUpperCase, hasNumber];
        conditions.forEach((condition) => (condition ? validNum++ : null));
        return validNum === 3;
      }),

    /*password2: string().required.oneOf(
      [ref("password"), null],
      "Nem egyezik a jelszó"
    ),*/
    /* role: string()
      .required()
      .oneOf(["student", "teacher"], "Kötelező szerepkört választani"),*/
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await dispatch(
        signup(e.name, e.password, e.identifier, e.email, role)
      );
      if (response.text === "success registration") {
        setShowSuccess(true);
        setShowDanger(false);
      } else if (response.error) {
        setShowDanger(true);
      }
    } catch (error) {}
  };

  const handleChangeRole = (e) => {
    if (e.target.value === "teacher") {
      setRole("TEACHER");
    } else {
      setRole("STUDENT");
    }
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
                  <Card.Title className="fw-bold text-uppercase">
                    Regisztráció
                  </Card.Title>
                  <Formik
                    validationSchema={schema}
                    initialValues={{
                      name: "",
                      identifier: "",
                      email: "",
                      role: "",
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
                        <Row className="mb-3">
                          <Form.Group as={Col} md="4" controlId="name">
                            <Form.Label>Teljes név</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={values.name}
                              isValid={touched.name && !errors.name}
                            />
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
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="email">
                            <Form.Label>E-mail cím</Form.Label>
                            <Form.Control
                              required
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={values.email}
                              isValid={touched.email && !errors.email}
                            />
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} md="4" controlId="role">
                            <Form.Label>Ki Ön?</Form.Label>{" "}
                            <Form.Check
                              required
                              defaultChecked
                              label="Oktató"
                              name="role"
                              type="radio"
                              id="teacher"
                              onChange={(e) => handleChangeRole(e)}
                              value="teacher"
                            />
                            <Form.Check
                              label="Diák"
                              name="role"
                              type="radio"
                              id="student"
                              onChange={(e) => handleChangeRole(e)}
                              value="student"
                            />
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
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="passworld2">
                            <Form.Label>Jelszó újra</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="password2"
                              onChange={handleChange}
                              /*
                              value={ values.password2}
                              isValid={touched.password2 && !errors.password2}*/
                            />
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
