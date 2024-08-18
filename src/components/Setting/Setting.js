import React, { useState } from 'react';
import { Form, FormLabel, FormControl, Button } from 'react-bootstrap';

function Setting() {
  const [namespace, setNamespace] = useState('');
  const [database, setDatabase] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TO DO: Implement database connection and namespace creation
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>Namespace:</FormLabel>
      <FormControl type="text" value={namespace} onChange={(event) => setNamespace(event.target.value)} />
      <FormLabel>Database:</FormLabel>
      <FormControl type="text" value={database} onChange={(event) => setDatabase(event.target.value)} />
      <Button variant="primary" type="submit">Create Namespace</Button>
    </Form>
  );
}

export default Setting;