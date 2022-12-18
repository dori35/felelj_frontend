import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getIsLoggedIn, getUserId } from "../../state/auth/selectors";
import { sendFillingTest } from "../../state/fillingTests/actions";
import { fetchStartTest } from "../../state/startTest/actions";
import { getStartTest } from "../../state/startTest/selectors";
import { Login } from "../auth/Login";
import { FillingTask } from "../filling/FillingTask";
import { Early } from "./Early";
import { Finish } from "./Finish";
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
  const [finish, setFinish] = useState(false);

  const [answers, setAnswers] = useState([]);
  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLoggedIn) {
        const currentDate = Date.parse(new Date());
        const startDate = Date.parse(test.startDate);
        const finishDate = Date.parse(test.startDate) + test.time;
        if (test && test.startDate && test.startDate !== undefined) {
          if (currentDate === startDate) {
            //start
            setStart(true);

            return () => clearInterval(interval);
          } else if (
            // keso
            currentDate > finishDate
          ) {
            setLate(true);
            return () => clearInterval(interval);
          } else if (currentDate < startDate) {
            //korai
            setSeconds(seconds + 1);
          } else {
            //már elindul
            setStarted(true);
            return () => clearInterval(interval);
          }
        }
      }
      console.log("alma");
    }, 1000);
    return () => clearInterval(interval);
  }, [test, seconds, isLoggedIn]);
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
          dispatch(sendFillingTest(test.id, answers, test.startDate));
          setFinish(true);
          navigate(`/start/results/${url}`);
          return () => {
            clearTimeout(timer);
          };
        } else {
          setTime(time - 1);
        }
        console.log("kenyer");
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
      {isLoggedIn && !start && late && !finish && <Late />}
      {isLoggedIn && started && !finish && <Started />}
      {isLoggedIn && !start && !late && !started && !finish && <Early />}
    </>
  );
}
