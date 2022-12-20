import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export function TestResult({ result }) {
  return (
    <tr>
      <td>{result.startDate}</td>
      <td>{result.title}</td>
      <td>{result.subject}</td>
      <td>{result.random ? "igen" : "nem"}</td>
      <td>
        {Math.floor(result.timeFrame / 60) +
          ":" +
          (result.timeFrame % 60 ? result.timeFrame % 60 : "00")}
      </td>
      <td>{result.taskNumber}</td>
      <td>{result.maxPoint}</td>
      <td>{result.averagePoint}</td>
      <td>{result.bestPoint}</td>
      <td>{result.leastPoint}</td>
      <td>{result.fillersNumber}</td>
      <td>
        <Link className="btn btn-primary btn-sm">
          <BsPeopleFill />
        </Link>
      </td>
    </tr>
  );
}
