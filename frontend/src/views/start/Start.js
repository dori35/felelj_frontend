import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getIsLoggedIn } from "../../state/auth/selectors";
import { sendFillingTest } from "../../state/fillingTests/actions";
import { fetchStartTest } from "../../state/startTest/actions";
import { getStartTest } from "../../state/startTest/selectors";
import { Login } from "../auth/Login";
import { FillingTask } from "../filling/FillingTask";
import { Early } from "./Early";
import { Late } from "./Late";
import { Started } from "./Started";

export function Start() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { url } = useParams();
  useEffect(() => {
    if (url !== "") {
      dispatch(fetchStartTest(url));
    }
  }, [dispatch, url]);

  const test = useSelector(getStartTest);
  const [seconds, setSeconds] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState(1);
  const [start, setStart] = useState(false);
  const [late, setLate] = useState(false);
  const [started, setStarted] = useState(false);

  const [answers, setAnswers] = useState([]);
  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = Date.parse(new Date());
      const startDate = Date.parse(test.startDate);
      const finishDate = Date.parse(test.startDate) + test.time;
      if (test && test.startDate && test.startDate !== undefined) {
        if (currentDate === startDate) {
          //start
          setStart(true);
          clearInterval(interval);
        } else if (
          // keso
          currentDate > finishDate
        ) {
          setLate(true);
          clearInterval(interval);
        } else if (currentDate < startDate) {
          //korai
          setSeconds(seconds + 1);
        } else {
          //már elindul
          setStarted(true);
          clearInterval(interval);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [test, seconds]);
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
      currentIndex < test.taskNumber &&
      start
    ) {
      const timer = setTimeout(() => {
        if (time === 0 && currentIndex < test.taskNumber - 1) {
          setTime(
            test && test.tasks ? test.tasks[currentIndex + 1].timeFrame : 1
          );
          setCurrentIndex(currentIndex + 1);
        } else if (time === 0) {
          console.log(test.id, answers);
          dispatch(sendFillingTest(test.id, answers));
          navigate("/");
        } else {
          setTime(time - 1);
        }
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [test, currentIndex, time, answers, start]);

  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && start && test && test.tasks && test.tasks.length > 0 && (
        <FillingTask
          key={test.tasks[currentIndex].id}
          task={test.tasks[currentIndex]}
          addAnswer={addAnswer}
          time={time}
        />
      )}
      {isLoggedIn && late && <Late />}
      {isLoggedIn && started && <Started />}
      {isLoggedIn && !late && !started && <Early />}
    </>
  );
}
