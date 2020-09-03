import React from "react";
import { ShowGithub } from "./component/ShowGithub";
import data from "./data";

function App() {
  return <ShowGithub items={data.items} />;
}

export default App;
