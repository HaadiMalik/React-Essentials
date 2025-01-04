import componentsImg from "./assets/components.png";
import JSXImg from "./assets/jsx-ui.png";
import propsImg from "./assets/config.png";
import stateImg from "./assets/state-mgmt.png";

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts </h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building blocks"
              image={componentsImg}
            />
            <CoreConcept
              title="JSX"
              description="HTML(ish) code in JS"
              image={JSXImg}
            />
            <CoreConcept
              title="Props"
              description="Configurable components"
              image={propsImg}
            />
            <CoreConcept
              title="State"
              description="React managed data"
              image={stateImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
