import componentsImg from "./assets/components.png";
import JSXImg from "./assets/jsx-ui.png";
import propsImg from "./assets/config.png";
import stateImg from "./assets/state-mgmt.png";



function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3> {props.title} </h3>
      <p> {props.description} </p>
    </li>
  );
}

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
