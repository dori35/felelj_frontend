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
        <button type="button" className="btn btn-danger btn-sm">
          <BsFillTrashFill />
        </button>
        <button type="button" className="btn btn-primary btn-sm">
          <BsPencilFill />
        </button>
        <button type="button" className="btn btn-warning btn-sm">
          <BsTrophy />
        </button>
      </td>
    </tr>
  );
}
