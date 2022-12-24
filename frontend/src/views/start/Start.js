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
  const [error, setError] = useState(false);
  useEffect(() => {
    if (url !== "") {
      try {
        dispatch(fetchStartTest(url));
      } catch (error) {
        setError(true);
        console.log(error.message);
        navigate("/");
      }
    }
  }, [dispatch, url]);
  const test = useSelector(getStartTest);
  const startDate = test ? Date.parse(test.startDate) : null;
  const finishDate = test ? startDate + test.time * 1000 : null;
  const [seconds, setSeconds] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState(1);
  const [start, setStart] = useState(false);
  const [late, setLate] = useState(false);
  const [started, setStarted] = useState(false);
  const [finish, setFinish] = useState(false);
  const [early, setEarly] = useState(false);

  const [answers, setAnswers] = useState([]);
  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (isLoggedIn) {
        let currentDate = Date.parse(new Date());
        if (test && startDate && finishDate) {
          if (currentDate === startDate) {
            //start
            setStart(true);
            console.log("start");
            return () => clearTimeout(interval);
          } else if (currentDate > finishDate) {
            // keso
            setLate(true);
            console.log("keso");
            return () => clearTimeout(interval);
          } else if (currentDate < startDate) {
            //korai
            setEarly(true);
            console.log("korai");
            setSeconds(seconds + 1);
          } else {
            //már elindul
            setStarted(true);
            console.log("mar elindult");
            return () => clearTimeout(interval);
          }
        }
      }
    }, 1000);
    return () => clearTimeout(interval);
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
      {isLoggedIn && !start && !late && !started && !finish && early && (
        <Early />
      )}
      {isLoggedIn && started && !late && !finish && <Started />}
      {isLoggedIn && !start && late && !finish && <Late />}
    </>
  );
}
