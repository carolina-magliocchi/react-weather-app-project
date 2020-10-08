import React from "react";
import "./NavigationBar.css";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <Navbar className="nav" bg="light" variant="light">
        <Form inline>
          <FormControl
            type="search"
            placeholder="Enter a city"
            className="mr-sm-2 form-control"
            aria-label="Enter a city"
          />
          <Button variant="outline-primary" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}
