import React, { useState } from 'react';
import { Form, FormLabel, FormControl, Button } from 'react-bootstrap';

function Upload() {
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <FormLabel>Upload TTL file:</FormLabel>
        <FormControl type="file" onChange={(event) => setFile(event.target.files[0])} />
      </Form.Group>
      <Button variant="primary" type="submit">Upload Data</Button>
    </Form>
  );
}

export default Upload;