export function CompletedTest({ completedTest }) {
  return (
    <tr>
      <td>{completedTest.title}</td>
      <td>{completedTest.subject}</td>
      <td>{completedTest.fillDate}</td>
      <td>
        {Math.floor(completedTest.timeFrame / 60) +
          ":" +
          (completedTest.timeFrame % 60 ? completedTest.timeFrame % 60 : "00")}
      </td>
      <td>{`${completedTest.currentPoint}/${completedTest.maxPoint}`}</td>
      <td>{completedTest.taskNumber}</td>
    </tr>
  );
}
