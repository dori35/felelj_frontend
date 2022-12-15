import { useEffect, useState } from "react";
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
  const [time, setTime] = useState(1);

  const [answers, setAnswers] = useState([]);
  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  useEffect(() => {
    if (test && test.tasks && test.tasks.length <= 0) {
      navigate("/");
    }
  }, [test]);

  useEffect(() => {
    setTime(
      test && test.tasks && test.tasks.length > 0
        ? test.tasks[currentIndex].timeFrame
        : 1
    );
  }, [test, currentIndex]);

  useEffect(() => {
    if (
      test &&
      test.tasks &&
      test.tasks.length > 0 &&
      currentIndex < test.taskNumber
    ) {
      const timer = setTimeout(() => {
        //console.log(time);
        if (time === 0 && currentIndex < test.taskNumber - 1) {
          setTime(
            test && test.tasks ? test.tasks[currentIndex + 1].timeFrame : 1
          );
          setCurrentIndex(currentIndex + 1);
        } else if (time === 0) {
          console.log(test.id, answers);
          dispatch(sendFillingTest(test.id, answers, test.startDate));
          navigate("/");
        } else {
          setTime(time - 1);
        }
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [test, currentIndex, time, answers]);

  return (
    <>
      {test && test.tasks && test.tasks.length > 0 && (
        <FillingTask
          key={test.tasks[currentIndex].id}
          task={test.tasks[currentIndex]}
          addAnswer={addAnswer}
          time={time}
        />
      )}
    </>
  );
}
