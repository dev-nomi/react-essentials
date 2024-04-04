import { TOPIC_EXAMPLES } from "../data/topicExamples";

function TabContent({ selectedTopic }) {
  return (
    <div id="tab-content">
      <h3>{TOPIC_EXAMPLES[selectedTopic].title}</h3>
      <p>{TOPIC_EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{TOPIC_EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}

export default TabContent;
