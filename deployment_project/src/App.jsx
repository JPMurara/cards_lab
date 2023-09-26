// terminal:
// create a project folder, cd into that
// git init, npm i express
// touch server.js
// npm i
// npm init -i or -y not sure
//  npx create-react-app deployment_project
// cd into the folder
// npm build
// npm run build

// https://gist.git.generalassemb.ly/katie/e9841eb6670f9fdbd1c9557b84832c60

import "./App.css";
import { DrawHand } from "./DrawHand";

function App() {
  return (
    <div className="App">
      <DrawHand />
    </div>
  );
}

export default App;
