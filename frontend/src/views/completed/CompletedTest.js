import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export function CompletedTest({ completedTest, index }) {
  return (
    <tr>
      <td>{completedTest.title}</td>
      <td>{completedTest.subject}</td>
      <td>{completedTest.fillDate}</td>
      <td>
        {Math.floor(completedTest.timeFrame / 60) +
          ":" +
          (completedTest.timeFrame % 60 ? completedTest.timeFrame % 60 : "00")}
      </td>
      <td>{`${completedTest.currentPoint}/${completedTest.maxPoint}`}</td>
      <td>{completedTest.taskNumber}</td>
      <td>
        <Link
          className="btn btn-warning btn-sm"
          to={`/completedtests/${completedTest.id}/${index}`}
        >
          <BsStarFill />
        </Link>
      </td>
    </tr>
  );
}
