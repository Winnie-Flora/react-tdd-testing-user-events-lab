
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />);

  expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />);

  expect(screen.getByRole("checkbox", { name: /add programming/i })).toBeInTheDocument;
  expect(screen.getByRole("checkbox", { name: /add autocad/i })).toBeInTheDocument;
  expect(screen.getByRole("checkbox", { name: /add matlab/i })).toBeInTheDocument;
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App />)

  const addProgramming = screen.getByRole("checkbox", { name: /add programming/i });
  expect(addProgramming).not.toBeChecked();

  const addAutocad = screen.getByRole("checkbox", { name: /add autocad/i });
  expect(addAutocad).not.toBeChecked();

  const addMatlab = screen.getByRole("checkbox", { name: /add matlab/i });
  expect(addMatlab).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App />);

  const email = screen.getByLabelText(/enter your email address/i);

  userEvent.type(email, "wahu@email.com");

  expect(email).toHaveValue("wahu@email.com");

  const name = screen.getByLabelText(/enter your name/i);

  userEvent.type(name, "wahu");

  expect(name).toHaveValue("wahu");
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App />);

  const addProgramming = screen.getByRole("checkbox", { name: /add programming/i });
  const addAutocad = screen.getByRole("checkbox", { name: /add autocad/i })
  const addMatlab = screen.getByRole("checkbox", { name: /add matlab/i })

  userEvent.click(addProgramming);
  expect(addProgramming).toBeChecked();
  userEvent.click(addProgramming);
  expect(addProgramming).not.toBeChecked();

  userEvent.click(addAutocad);
  expect(addAutocad).toBeChecked();
  userEvent.click(addAutocad);
  expect(addAutocad).not.toBeChecked();

  userEvent.click(addMatlab);
  expect(addMatlab).toBeChecked();
  userEvent.click(addMatlab);
  expect(addMatlab).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App />);

  expect(screen.getByRole("button", { name: /submit form/i })).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: /submit form/i }));

  expect(screen.getByText(/Form was submitted successfully/i)).toBeInTheDocument();
});
