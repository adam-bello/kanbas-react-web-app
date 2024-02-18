import Destructing from "./Destructing";
import House from "./House";
import JsonStringify from "./JsonStringify";
import Spreading from "./Spreading";

function WorkingWithJson() {

  return (
    <div>
      <h2>Working With JSON</h2>
      <JsonStringify/>
      <House/>
      <Spreading/>
      <Destructing/>
    </div>
  );
}

export default WorkingWithJson;