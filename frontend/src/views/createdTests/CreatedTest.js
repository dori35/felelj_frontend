import { Button } from "react-bootstrap";
import { BsFillTrashFill, BsPencilFill, BsTrophy } from "react-icons/bs";
export function CreatedTest({ createdTest }) {
  return (
    <tr>
      <td>{createdTest.title}</td>
      <td>{createdTest.subject}</td>
      <td>{createdTest.time}</td>
      <td>{createdTest.lastModifiedDate}</td>
      <td>{createdTest.point}</td>
      <td>{createdTest.taskNumber}</td>
      <td>{createdTest.random ? "igen" : "nem"}</td>
      <td>
        {" "}
        <Button className="btn-danger btn-sm">
          <BsFillTrashFill />
        </Button>
        <Button className="btn-primary btn-sm">
          <BsPencilFill />
        </Button>
        <Button className=" btn-warning btn-sm">
          <BsTrophy />
        </Button>
      </td>
    </tr>
  );
}
