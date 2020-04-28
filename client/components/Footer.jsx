import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light" data-test="component-footer">
      <Container>
        <Row>
          <Col className="text-center py-4">
            <h3
              style={{
                display: "inline-block",
                borderBottom: "5px blue solid",
              }}
            >
              TruNews
            </h3>
            <p>Copyright &copy; 2020</p>
            <p>By Manuel Duran</p>
            <a href="mailto: mduran85@gmail.com" target="_blank">
              <Button data-test="button" variant="primary">
                Contact Me
              </Button>
            </a>{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
