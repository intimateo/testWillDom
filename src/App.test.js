import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('render input', () => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  expect(inputEl).toBeInTheDocument();
})

test('Input should allow only numbers',() => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  userEvent.type(inputEl, "agdf21a");
  expect(screen.getByTestId("number-input")).toHaveValue("21");
})

test('Results div not be in the document',() => {
  render(<App />);
  expect(screen.queryByTestId("results")).not.toBeInTheDocument();
})

test('Click button and show results',() => {
  render(<App />);
  const buttonEl = screen.getByTestId("go-button");
  userEvent.click(buttonEl);
  expect(screen.queryByTestId("results")).toBeInTheDocument();
})

test('3rd position should be changed as Fizz',() => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  userEvent.type(inputEl, "24");
  const buttonEl = screen.getByTestId("go-button");
  userEvent.click(buttonEl);
  const itemEl = screen.getByTestId("item-3");
  expect(itemEl.textContent).toEqual('Fizz');
})

test('5rd position should be changed as Buzz',() => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  userEvent.type(inputEl, "24");
  const buttonEl = screen.getByTestId("go-button");
  userEvent.click(buttonEl);
  const itemEl = screen.getByTestId("item-5");
  expect(itemEl.textContent).toEqual('Buzz');
})

test('7th position should be changed as Jazz',() => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  userEvent.type(inputEl, "24");
  const buttonEl = screen.getByTestId("go-button");
  userEvent.click(buttonEl);
  const itemEl = screen.getByTestId("item-7");
  expect(itemEl.textContent).toEqual('Jazz');
})

test('15th position should be changed as FizzBuzz',() => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  userEvent.type(inputEl, "24");
  const buttonEl = screen.getByTestId("go-button");
  userEvent.click(buttonEl);
  const itemEl = screen.getByTestId("item-15");
  expect(itemEl.textContent).toEqual('FizzBuzz');
})

test('21st position should be changed as FizzJazz',() => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  userEvent.type(inputEl, "24");
  const buttonEl = screen.getByTestId("go-button");
  userEvent.click(buttonEl);
  const itemEl = screen.getByTestId("item-21");
  expect(itemEl.textContent).toEqual('FizzJazz');
})

test('105th position should be changed as FizzBuzzJazz',() => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  userEvent.type(inputEl, "105");
  const buttonEl = screen.getByTestId("go-button");
  userEvent.click(buttonEl);
  const itemEl = screen.getByTestId("item-105");
  expect(itemEl.textContent).toEqual('FizzBuzzJazz');
})

test('15th position should be changed as FizzBuzz and changed color',() => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  userEvent.type(inputEl, "24");
  const buttonEl = screen.getByTestId("go-button");
  userEvent.click(buttonEl);
  const itemEl = screen.getByTestId("item-15");
  expect(itemEl.textContent).toEqual('FizzBuzz');
  expect(itemEl).toHaveStyle('color:blue');
})

test('13th position shouldnt changed and the color is black',() => {
  render(<App />);
  const inputEl = screen.getByTestId("number-input");
  userEvent.type(inputEl, "24");
  const buttonEl = screen.getByTestId("go-button");
  userEvent.click(buttonEl);
  const itemEl = screen.getByTestId("item-13");
  expect(itemEl.textContent).toEqual('13');
  expect(itemEl).toHaveStyle('color:black');
})
