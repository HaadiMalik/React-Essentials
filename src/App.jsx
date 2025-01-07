import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { EXAMPLES, CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedButton, setSelectedButton] = useState("");
  let tabContent = <p> Please select a topic </p>;

  if (selectedButton) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

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
              handleClick={() => {
                handleClick("components");
              }}
            />
            <TabButton
              name="JSX"
              handleClick={() => {
                handleClick("jsx");
              }}
            />
            <TabButton
              name="Props"
              handleClick={() => {
                handleClick("props");
              }}
            />
            <TabButton
              name="State"
              handleClick={() => {
                handleClick("state");
              }}
            />
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
