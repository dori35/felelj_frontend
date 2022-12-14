import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTestResults } from "../../state/testResults/actions";

export function TestResults() {
  const dispatch = useDispatch();
  const { createdTestId } = useParams();
  useEffect(() => {
    dispatch(fetchTestResults(createdTestId));
  }, [dispatch, createdTestId]);

  /*const results = useSelector(getTestResults);
  {results.map((result, index) => (
    <p>{result.fillDate}</p>
  ))}*/
  return <></>;
}
