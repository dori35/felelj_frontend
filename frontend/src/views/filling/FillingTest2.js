import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFillingTest } from "../../state/fillingTests/actions";
import { getFillingTest } from "../../state/fillingTests/selectors";
import { FillingTask } from "./FillingTask";

export function FillingTest2() {
  const dispatch = useDispatch();
  const { createdTestId } = useParams();
  useEffect(() => {
    dispatch(fetchFillingTest(createdTestId));
  }, [dispatch, createdTestId]);

  const test = useSelector(getFillingTest);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("hello!");
    }, 1000);
  }, []);

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <>
      {test.tasks && (
        <FillingTask
          key={test.tasks[currentIndex].id}
          task={test.tasks[currentIndex]}
        />
      )}
      <Button onClick={handleClick}>Next</Button>
    </>
  );
}
