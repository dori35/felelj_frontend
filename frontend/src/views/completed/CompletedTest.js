import { Button } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";

export function CompletedTest({ completedTest }) {
  console.log(completedTest);
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
        <Button className="btn-warning btn-sm">
          <BsStarFill />
        </Button>
      </td>
    </tr>
  );
}
