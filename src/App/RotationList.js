import React from 'react';
import { Card, CardBody, Title } from '@patternfly/react-core';

const RotationList = ({ redHatters, isTestProp = false, ...props }) => {
  return (
    <div>
      <Title headingLevel="h1" size="xl">
        Rotation
      </Title>
      <ul>
        {redHatters.map((person) =>
            <li key={person.name}>
              <Card>
                <CardBody>{person.name}</CardBody>
                <hr />
              </Card>
            </li>
        )}
      </ul>
    </div>

  );
}



export default RotationList;
