import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import WorkingWithJson from "./json/WorkingWithJson";
import TemplateLiterals from "./string/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";

function JavaScript() {
  console.log('Hello World!');
  return(
     <div>
        <h1>JavaScript</h1>
        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariables/>
        <IfElse/>
        <TernaryOperator/>
        <WorkingWithFunctions/>
        <WorkingWithArrays/>
        <WorkingWithJson/>
        <TemplateLiterals/>
     </div>
  );
}
export default JavaScript