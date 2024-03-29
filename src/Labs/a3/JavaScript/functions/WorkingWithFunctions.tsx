import ArrowFunctions from "./ArrowFunctions";
import ES5Functions from "./ES5Functions";
import FunctionDestructing from "./FunctionDestructing";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {

  return (
    <div>
      <h2>Working With Functions</h2>
      <ES5Functions/>
      <ArrowFunctions/>
      <ImpliedReturn/>
      <FunctionParenthesisAndParameters/>
      <FunctionDestructing/>
    </div>
  );
}

export default WorkingWithFunctions;