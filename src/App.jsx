import { useState } from "react";
import { CORE_CONCEPTS } from "./data/coreConcepts";
import { TOPIC_EXAMPLES } from "./data/topicExamples";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleClick(clickedButton) {
    setSelectedTopic(clickedButton);
    // console.log(`${clickedButton} clicked!!`);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => handleClick("components")}
              active={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => handleClick("jsx")}
              active={selectedTopic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleClick("props")}
              active={selectedTopic === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleClick("state")}
              active={selectedTopic === "state"}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{TOPIC_EXAMPLES[selectedTopic].title}</h3>
            <p>{TOPIC_EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{TOPIC_EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
