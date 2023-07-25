import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Income() {
  const [income, setIncome] = useState({
    amount: "",
    source: "",
  });

  const handleChange = (event) => {
    setIncome({
      ...income,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Income from ${income.source}: ${income.amount}`);
    setIncome({ amount: "", source: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="source">
        <Form.Label>Source</Form.Label>
        <Form.Control
          type="text"
          name="source"
          value={income.source}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          name="amount"
          value={income.amount}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Income;
