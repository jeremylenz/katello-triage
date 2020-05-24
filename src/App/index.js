import React, { useState } from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import './app.css';

const App = () => {
  const [isShowing, setShowing] = useState(true);
  const dismissNotification = () => setShowing(false);

  return (
    <div className="app-container">
      {isShowing && (
        <div className="notification-container">
          <Alert
            variant="success"
            title="Setup Complete"
            action={<AlertActionCloseButton onClose={dismissNotification} />}
          >
            You have successfully launched your patternfly starter project.
          </Alert>
        </div>
      )}
    </div>
  );
}

export default App;
