import "./App.css";
import Marks from "./components/Marks";

function App() {
  let calculateTenthSummary = (
    engMarks,
    telMarks,
    hinMarks,
    matMarks,
    sciMarks,
    socMarks
  ) => {
    let totalMarks =
      engMarks + telMarks + hinMarks + matMarks + sciMarks + socMarks;
    let perc = (totalMarks / 600) * 100;

    let passMarks = 35;
    let result;
    if (
      engMarks >= passMarks &&
      telMarks >= passMarks &&
      hinMarks >= passMarks &&
      matMarks >= passMarks &&
      sciMarks >= passMarks &&
      socMarks >= passMarks
    ) {
      result = "Pass";
    } else {
      result = "Fail";
    }
    let summary = {
      total: telMarks,
      percentage: perc.toFixed(2),
      result: result,
    };
    return summary;
  };
  console.log(calculateTenthSummary(34, 56, 67, 78, 89, 65));
  return (
    <div className="App">
      <Marks></Marks>
    </div>
  );
}

export default App;
