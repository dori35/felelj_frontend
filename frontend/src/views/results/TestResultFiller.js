import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

export function TestResultFiller({ filler, index, createdTestId }) {
  return (
    <>
      <tr>
        <td>{filler.identifier}</td>
        <td>{filler.points}</td>
        <td>
          <Link
            to={`/results/${createdTestId}/fillers/${index}/${filler.userId}`}
            className="btn btn-warning btn-sm"
          >
            <BsStarFill />
          </Link>
        </td>
      </tr>
    </>
  );
}
