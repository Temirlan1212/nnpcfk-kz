import React, { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ProgressBar now={(step / 3) * 100} />
      {step === 1 && (
        <Form.Group controlId="formStep1">
          <Form.Label>Name</Form.Label>
        </Form.Group>
      )}
      {step === 2 && (
        <Form.Group controlId="formStep2">
          <Form.Label>Email</Form.Label>
        </Form.Group>
      )}
      {step === 3 && (
        <Form.Group controlId="formStep3">
          <Form.Label>Message</Form.Label>
        </Form.Group>
      )}
      <div className="d-flex justify-content-between">
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {step < 3 ? (
          <Button type="button" variant="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button type="button" variant="primary">
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
};

export default MultiStepForm;
