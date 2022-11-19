import { Button } from "react-bootstrap";
import { BsFillTrashFill, BsPencilFill, BsTrophy } from "react-icons/bs";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function CreatedTest({ createdTest }) {
  return (
    <tr>
      <td>{createdTest.title}</td>
      <td>{createdTest.subject}</td>
      <td>
        {Math.floor(createdTest.time / 60) +
          ":" +
          (createdTest.time % 60 ? createdTest.time % 60 : "00")}
      </td>
      <td>{createdTest.createdDate}</td>
      <td>{createdTest.point}</td>
      <td>{createdTest.taskNumber}</td>
      <td>{createdTest.random ? "nem" : "igen"}</td>
      <td>
        {" "}
        <Button className="btn-danger btn-sm">
          <BsFillTrashFill />
        </Button>
        <Link
          to={`/createdtests/${createdTest.id}`}
          className="btn btn-primary btn-sm"
        >
          <BsPencilFill />
        </Link>
        <Button className=" btn-warning btn-sm">
          <BsTrophy />
        </Button>
        <Button className=" btn-success btn-sm">
          <IoMdArrowDroprightCircle />
        </Button>
      </td>
    </tr>
  );
}
