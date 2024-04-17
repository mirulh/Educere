import Alert from 'react-bootstrap/Alert';
import React from 'react';

export default function MessageBox(prop) {
  return <Alert variant={prop.variant || 'info'}>{prop.children}</Alert>;
}
