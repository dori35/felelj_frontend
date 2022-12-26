import { Button } from "react-bootstrap";
import { BsFillTrashFill, BsPencilFill, BsTrophy } from "react-icons/bs";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "../css/created/CreatedTest.css";

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
          to={`/modifytest/${createdTest.id}`}
          className="btn btn-primary btn-sm"
        >
          <BsPencilFill />
        </Link>
        <Link
          to={`/results/${createdTest.id}`}
          className={classnames("btn btn-warning btn-sm", {
            disabledLink: createdTest.taskNumber <= 0,
            disabled: createdTest.taskNumber <= 0,
            "d-none": createdTest.taskNumber <= 0,
          })}
        >
          <BsTrophy />
        </Link>
        <Link
          to={`/trytest/${createdTest.id}`}
          style={{ backgroundColor: "BurlyWood" }}
          className={classnames("btn btn-sm", {
            disabledLink: createdTest.taskNumber <= 0,
            disabled: createdTest.taskNumber <= 0,
            "d-none": createdTest.taskNumber <= 0,
          })}
        >
          <AiFillEye />
        </Link>
        <Link
          to={`/settingstart/${createdTest.id}`}
          className={classnames("btn btn-success btn-sm", {
            disabledLink: createdTest.taskNumber <= 0,
            disabled: createdTest.taskNumber <= 0,
            "d-none": createdTest.taskNumber <= 0,
          })}
        >
          <IoMdArrowDroprightCircle />
        </Link>
      </td>
    </tr>
  );
}
