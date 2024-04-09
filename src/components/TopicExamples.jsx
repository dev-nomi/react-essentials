import { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import Section from "./UI/Section";
import Tabs from "./UI/Tabs";

function TopicExamples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  let tabContent = "Please select topic!!";

  if (selectedTopic) {
    tabContent = <TabContent selectedTopic={selectedTopic} />;
  }

  function handleClick(clickedButton) {
    setSelectedTopic(clickedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default TopicExamples;
