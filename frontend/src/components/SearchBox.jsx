import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(searchTerm ? `/search/?searchTerm=${searchTerm}` : '/search');
  };

  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <InputGroup>
        <Form.Control
          type="text"
          name="q"
          id="q"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search contents..."
          aria-label="Search Contents"
          aria-describedby="button-search"
        ></Form.Control>
        <Button variant="outline-primary" type="submit" id="button-search">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
}
