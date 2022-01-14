import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const validFirst = "Voldemort";
  const validLast = "Moldywart"
  const validAddress = "123 Dark Lord Lane";
  const validCity = "Little Whinging";
  const validState = "Surrey";
  const validZip = "777";
  const firstName = screen.getByLabelText(/first name:/i);
  userEvent.type(firstName, validFirst);
  const lastName = screen.getByLabelText(/last name:/i);
  userEvent.type(lastName, validLast);
  const address = screen.getByLabelText(/address:/i);
  userEvent.type(address, validAddress);
  const city = screen.getByLabelText(/city:/i);
  userEvent.type(city, validCity);
  const state = screen.getByLabelText(/state:/i);
  userEvent.type(state, validState);
  const zip = screen.getByLabelText(/zip:/i);
  userEvent.type(zip, validZip);
  const submit = screen.getByRole("button");
  userEvent.click(submit);

  const display = screen.queryByTestId(/successmessage/i);
  expect(display).toBeTruthy();
  expect(display).toBeInTheDocument();
});
