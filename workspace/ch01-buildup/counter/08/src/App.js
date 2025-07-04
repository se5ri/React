import Counter from "./compoenets/Counter.js";
import Header from "./compoenets/Header.js";
import Reaction from "./reaction.js";

// App 컴포넌트(어플리케이션의 시작점)
function App() {
  console.log("\t APP 호출됨");
  return Reaction.createElement("div", { id: "app" }, Header, Counter);
}

export default App;