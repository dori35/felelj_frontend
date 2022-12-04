import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchFillingTest,
  sendFillingTest,
} from "../../state/fillingTests/actions";
import { getFillingTest } from "../../state/fillingTests/selectors";
import { FillingTask } from "./FillingTask";

export function FillingTest() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createdTestId } = useParams();

  useEffect(() => {
    dispatch(fetchFillingTest(createdTestId));
  }, [dispatch, createdTestId]);

  const test = useSelector(getFillingTest);
  const [currentIndex, setCurrentIndex] = useState(0);

  /*useEffect(() => {
    const timer = setInterval(() => {
      currentIndex = currentIndex - 1;
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
*/
  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const handleMClick = () => {
    setCurrentIndex(currentIndex - 1);
  };
  const [answers, setAnswers] = useState([]);

  const handleFillingTestSubmit = (e) => {
    e.preventDefault();
    console.log(test.id, answers);
    dispatch(sendFillingTest(test.id, answers));
    navigate("/");
  };

  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  return (
    <>
      {test && test.tasks && (
        <FillingTask
          key={test.tasks[currentIndex].id}
          task={test.tasks[currentIndex]}
          addAnswer={addAnswer}
        />
      )}

      <Button onClick={handleMClick}>Előző</Button>
      <Button onClick={handleClick}>Kövi</Button>
      <Button onClick={handleFillingTestSubmit}>Vége</Button>
    </>
  );
}
