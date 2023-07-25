import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Expenses() {
  const [expense, setExpense] = useState({
    amount: "",
    reason: "",
  });

  const handleChange = (event) => {
    setExpense({
      ...expense,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Expense for ${expense.reason}: ${expense.amount}`);
    setExpense({ amount: "", reason: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="reason">
        <Form.Label>Reason</Form.Label>
        <Form.Control
          type="text"
          name="reason"
          value={expense.reason}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          name="amount"
          value={expense.amount}
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

export default Expenses;
