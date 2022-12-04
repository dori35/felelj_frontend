import { TypeMultipleChoices } from "./TypeMultipleChoices";
import { TypeOneChoice } from "./TypeOneChoice";
import { TypeOrderList } from "./TypeOrderList";
import { TypeTrueFalse } from "./TypeTrueFalse";

export function ModifyCreatedChoices({ type, task, index, modifyTask }) {
  return (
    <>
      {type === "ORDER_LIST" && (
        <TypeOrderList task={task} index={index} modifyTask={modifyTask} />
      )}
      {type === "MULTIPLE_CHOICES" && (
        <TypeMultipleChoices
          task={task}
          index={index}
          modifyTask={modifyTask}
        />
      )}
      {type === "ONE_CHOICE" && (
        <TypeOneChoice task={task} index={index} modifyTask={modifyTask} />
      )}
      {type === "TRUE_FALSE" && (
        <TypeTrueFalse task={task} index={index} modifyTask={modifyTask} />
      )}
    </>
  );
}
