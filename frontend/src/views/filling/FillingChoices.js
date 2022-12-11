import { FillingOneChoice } from "./FillingOneChoice";
import { FillingOrderList } from "./FillingOrderList";
import { FillingTrueFalse } from "./FillingTrueFalse";
import { FillingMultipleChoices } from "./FilllingMultipleChoices";

export function FillingChoices({ task, addAnswer, time }) {
  return (
    <>
      {task.taskType === "ORDER_LIST" && (
        <FillingOrderList task={task} addAnswer={addAnswer} time={time} />
      )}
      {task.taskType === "MULTIPLE_CHOICES" && (
        <FillingMultipleChoices task={task} addAnswer={addAnswer} time={time} />
      )}
      {task.taskType === "TRUE_FALSE" && (
        <FillingTrueFalse task={task} addAnswer={addAnswer} time={time} />
      )}
      {task.taskType === "ONE_CHOICE" && (
        <FillingOneChoice task={task} addAnswer={addAnswer} time={time} />
      )}
    </>
  );
}
