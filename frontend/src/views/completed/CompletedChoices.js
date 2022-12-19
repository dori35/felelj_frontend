import { CompletedMultipleChoices } from "./CompletedMultipleChoices";
import { CompletedOneChoice } from "./CompletedOneChoice";
import { CompletedOrderList } from "./CompletedOrderList";
import { CompletedTrueFalse } from "./CompletedTrueFalse";

export function CompletedChoices({ task }) {
  return (
    <>
      {task.taskType === "ORDER_LIST" && <CompletedOrderList task={task} />}
      {task.taskType === "MULTIPLE_CHOICES" && (
        <CompletedMultipleChoices task={task} />
      )}
      {task.taskType === "TRUE_FALSE" && <CompletedTrueFalse task={task} />}
      {task.taskType === "ONE_CHOICE" && <CompletedOneChoice task={task} />}
    </>
  );
}
