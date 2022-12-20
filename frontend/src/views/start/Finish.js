import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIsLoggedIn, getToken, getUserId } from "../../state/auth/selectors";
import { fetchResults } from "../../state/startTest/actions";
import {
  getResults,
  getTopThree,
  gettopThree,
} from "../../state/startTest/selectors";
import "./Finish.css";

export function Finish() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userId = useSelector(getUserId);
  const results = useSelector(getResults);
  const [topThree, setTopThree] = useState(results ? results.topThree : null);
  const [processing, setProcessing] = useState(true);
  const { url } = useParams();

  useEffect(() => {
    if (url !== "" && userId) {
      const timer = setTimeout(async () => {
        await dispatch(fetchResults(url, userId));
        return () => {
          clearTimeout(timer);
        };
      }, 5000);
    }
  }, [dispatch, url]);

  useEffect(() => {
    if (!!results) {
      setTopThree(results.topThree);
      setProcessing(false);
    }
  }, [results, topThree]);

  return (
    <>
      {isLoggedIn && (
        <div className="d-flex justify-content-center align-items-center ">
          <Container className="py-5">
            <div className="d-flex justify-content-center">
              <Card className="alma">
                <Card.Body>
                  <Card.Title> Eremények</Card.Title>
                  {processing ? (
                    <Card.Text> Feldolgozás alatt</Card.Text>
                  ) : (
                    <>
                      <Card.Text className=" pt-4 pb-0 mb-0">
                        A Te pontszámod:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {results.currentPoints}
                        </span>
                      </Card.Text>
                      <Card.Text className=" pt-1 ">
                        Maximum pontszám:
                        <span style={{ fontWeight: "bold" }}>
                          {results.maxPoints}
                        </span>
                      </Card.Text>
                      <Container fluid>
                        <Row>
                          <Col className="  mxy-0 px-0 mt-3 text-center  ">
                            <span
                              style={{ fontWeight: "bold" }}
                              className=" align-items-center"
                            >
                              2.
                            </span>
                            <Col className=" mxy-0 pxy-0 pb-2  bg-warning ">
                              <DropdownButton
                                variant="warning"
                                menuVariant="dark"
                                id="second"
                                title={
                                  !!topThree[1]
                                    ? `${topThree[1].points} pont`
                                    : "- pont"
                                }
                                disabled={!topThree[1]}
                              >
                                {!!topThree[1]
                                  ? topThree[1].identifiers.map(
                                      (identifier, index) => (
                                        <Dropdown.Item key={index}>
                                          {identifier}
                                        </Dropdown.Item>
                                      )
                                    )
                                  : null}
                              </DropdownButton>
                            </Col>
                          </Col>
                          <Col className=" mxy-0 px-0 mt-2 text-center ">
                            <span
                              style={{ fontWeight: "bold" }}
                              className=" align-items-center"
                            >
                              1.
                            </span>
                            <Col className=" mxy-0 pxy-0 pb-3 bg-warning  ">
                              <DropdownButton
                                variant="warning"
                                menuVariant="dark"
                                id="first"
                                title={
                                  !!topThree[0]
                                    ? `${topThree[0].points} pont`
                                    : "- pont"
                                }
                                disabled={!topThree[0]}
                              >
                                {!!topThree[0]
                                  ? topThree[0].identifiers.map(
                                      (identifier, index) => (
                                        <Dropdown.Item key={index}>
                                          {identifier}
                                        </Dropdown.Item>
                                      )
                                    )
                                  : null}
                              </DropdownButton>
                            </Col>
                          </Col>
                          <Col className=" mxy-0 px-0 mt-4 text-center ">
                            <span
                              style={{ fontWeight: "bold" }}
                              className=" align-items-center"
                            >
                              3.
                            </span>
                            <Col className=" mxy-0 pxy-0 bg-warning ">
                              <DropdownButton
                                variant="warning"
                                menuVariant="dark"
                                id="third"
                                title={
                                  !!topThree[2]
                                    ? `${topThree[2].points} pont`
                                    : "- pont"
                                }
                                disabled={!topThree[2]}
                              >
                                {!!topThree[2]
                                  ? topThree[2].identifiers.map(
                                      (identifier, index) => (
                                        <Dropdown.Item key={index}>
                                          {identifier}
                                        </Dropdown.Item>
                                      )
                                    )
                                  : null}
                              </DropdownButton>
                            </Col>{" "}
                          </Col>
                        </Row>
                      </Container>
                    </>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
