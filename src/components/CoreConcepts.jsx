import { CORE_CONCEPTS } from "../data/coreConcepts";
import CoreConcept from "./CoreConcept";
import Section from "./UI/Section";

function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
