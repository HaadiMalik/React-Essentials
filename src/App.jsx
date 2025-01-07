import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";

function App() {

  const [ selectedButton , setSelectedButton ] = useState("Please select a tab");
  
  function handleClick(selectedTab) {
    setSelectedButton(selectedTab);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts </h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
            <TabButton
              name="Components"
              handleClick={() => {handleClick("Components")}}
            />
            <TabButton
              name="JSX"
              handleClick={() => {handleClick("JSX")}}
            />
            <TabButton
              name="Props"
              handleClick={() => {handleClick("Props")}}
            />
            <TabButton
              name="State"
              handleClick={() => {handleClick("State")}}
            />
          </menu>
          {selectedButton}
        </section>
      </main>
    </div>
  );
}

export default App;
