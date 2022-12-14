import { Button } from "react-bootstrap";
import { BsFillTrashFill, BsPencilFill, BsTrophy } from "react-icons/bs";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./CreatedTest.css";

//overlay toltip fölé
export function CreatedTest({ createdTest, onDeleteTestClick }) {
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
      <td>{createdTest.random ? "igen" : "nem"}</td>
      <td>
        {" "}
        <Button className="btn-danger btn-sm" onClick={onDeleteTestClick}>
          <BsFillTrashFill />
        </Button>
        <Link
          to={`/createdtests/${createdTest.id}`}
          className="btn btn-primary btn-sm"
        >
          <BsPencilFill />
        </Link>
        <Link
          to={`/results/${createdTest.id}`}
          className="btn btn-warning btn-sm"
        >
          <BsTrophy />
        </Link>
        <Link
          to={`/startTest/${createdTest.id}`}
          className={classnames("btn btn-success btn-sm", {
            disabledLink: createdTest.taskNumber <= 0,
          })}
        >
          <IoMdArrowDroprightCircle />
        </Link>
        <Link
          to={`/s/${createdTest.id}`}
          className={classnames("btn btn-success btn-sm", {
            disabledLink: createdTest.taskNumber <= 0,
          })}
        >
          HEy
        </Link>
      </td>
    </tr>
  );
}
