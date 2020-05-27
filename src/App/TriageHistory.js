import React from 'react';
import { Card, CardBody, Title } from '@patternfly/react-core';

const TriageHistory = ({ redHatters, setTriagerByName }) => {
  // const baseBoxShadowStyle = "0 0.6875rem 1.5rem 1rem "
  return (
    <div>
      <Title headingLevel="h1" size="xl">
        History
      </Title>
      <ul>
        {redHatters.map((person, idx) =>
            <li key={person.name + "-history-" + idx}>
              <Card isHoverable onClick={() => setTriagerByName(person.name)}>
                <CardBody>{person.name}</CardBody>
                <hr />
              </Card>
            </li>
        )}
      </ul>
    </div>

  );
}

export default TriageHistory;
