import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIsLoggedIn, getUserId } from "../../state/auth/selectors";
import { fetchResults } from "../../state/startTest/actions";
import { getResults } from "../../state/startTest/selectors";

export function Finish() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userId = useSelector(getUserId);
  const results = useSelector(getResults);
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
      setProcessing(false);
    }
  }, [results]);

  return (
    <>
      {isLoggedIn && (
        <div className="d-flex justify-content-center align-items-center">
          <Container className="py-5">
            <div className="d-flex justify-content-center">
              <Card>
                <Card.Body>
                  <Card.Title> Eremények</Card.Title>
                  {processing ? (
                    <Card.Title> Feldolgozás alatt</Card.Title>
                  ) : (
                    <Card.Title>
                      {results.currentPoints} / {results.maxPoints}
                    </Card.Title>
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
