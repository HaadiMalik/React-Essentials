import reactAtom from "../assets/react-core-concepts.png";

let concepts = ["Fundamental", "Core", "Advanced", "Important"];

function concept(max) {
  const num = Math.floor(Math.random() * (max + 1));
  return concepts[num];
}

export function Header() {
  return (
    <header>
      <img src={reactAtom} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {concept(3)} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}