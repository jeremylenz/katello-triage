import React from 'react';
import { Card, CardBody, Title, Button } from '@patternfly/react-core';

const Hotseat = ({ redHatter, advanceRotation }) => {
  return (
    <div>
      <Title headingLevel="h1" size="xl">
        Up Next
      </Title>
      <Card>
        <CardBody>{redHatter.name}</CardBody>
        <hr />
        <Button onClick={() => advanceRotation()}>Complete Triage</Button>
      </Card>
    </div>

  );
}

export default Hotseat;
