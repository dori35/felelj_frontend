import { FillingOneChoice } from "./FillingOneChoice";
import { FillingOrderList } from "./FillingOrderList";
import { FillingTrueFalse } from "./FillingTrueFalse";
import { FillingMultipleChoices } from "./FilllingMultipleChoices";

export function FillingChoices({ task, addAnswer }) {
  return (
    <>
      {task.taskType === "ORDER_LIST" && (
        <FillingOrderList task={task} addAnswer={addAnswer} />
      )}
      {task.taskType === "MULTIPLE_CHOICES" && (
        <FillingMultipleChoices task={task} addAnswer={addAnswer} />
      )}
      {task.taskType === "TRUE_FALSE" && (
        <FillingTrueFalse task={task} addAnswer={addAnswer} />
      )}
      {task.taskType === "ONE_CHOICE" && (
        <FillingOneChoice task={task} addAnswer={addAnswer} />
      )}
    </>
  );
}
