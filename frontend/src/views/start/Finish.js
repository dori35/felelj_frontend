import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIsLoggedIn, getUserId } from "../../state/auth/selectors";
import { fetchResults } from "../../state/startTest/actions";

export function Finish() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userId = useSelector(getUserId);
  const [processing, setProcessing] = useState(true);
  const { url } = useParams();

  useEffect(() => {
    if (url !== "" && isLoggedIn && processing) {
      const timer = setTimeout(async () => {
        await dispatch(fetchResults(url, userId));
        setProcessing(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, url, processing]);

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
                    <Card.Title>jelenlegi / max pont</Card.Title>
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
