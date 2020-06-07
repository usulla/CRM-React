import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";

export const Typography = () => {
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Dashboard"
              category="Created using Roboto Font Family"
              content={
                <div>
                  <div className="typo-line">
                    <h1>
                      <p className="category">Header 1</p>Dashboard
                        Table Heading
                    </h1>
                  </div>

                  <div className="typo-line">
                    <h2>
                      <p className="category">Header 2</p>Dashboard
                        Table Heading
                      </h2>
                  </div>
                  <div className="typo-line">
                    <h3>
                      <p className="category">Header 3</p>Dashboard
                        Table Heading
                      </h3>
                  </div>
                  <div className="typo-line">
                    <h4>
                      <p className="category">Header 4</p>Dashboard
                        Table Heading
                      </h4>
                  </div>
                  <div className="typo-line">
                    <h5>
                      <p className="category">Header 5</p>Dashboard
                        Table Heading
                      </h5>
                  </div>
                  <div className="typo-line">
                    <h6>
                      <p className="category">Header 6</p>Dashboard
                        Table Heading
                      </h6>
                  </div>
                  <div className="typo-line">
                    <p>
                      <span className="category">Paragraph</span>Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim veniam.
                      </p>
                  </div>
                  <div className="typo-line">
                    <p className="category">Quote</p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam.
                        </p>
                      <small>Steve Jobs, CEO Apple</small>
                    </blockquote>
                  </div>

                  <div className="typo-line">
                    <p className="category">Muted Text</p>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing
                      elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet.
                      </p>
                  </div>
                  <div className="typo-line">
                    {/* <!--
                                             there are also "text-info", "text-success", "text-warning", "text-danger" clases for the text
                                             --> */}
                    <p className="category">Coloured Text</p>
                    <p className="text-primary">
                      Text Primary - Dashboard Table Heading and complex
                      bootstrap dashboard you've ever seen on the internet.
                      </p>
                    <p className="text-info">
                      Text Info - Dashboard Table Heading and complex
                      bootstrap dashboard you've ever seen on the internet.
                      </p>
                    <p className="text-success">
                      Text Success - Dashboard Table Heading and complex
                      bootstrap dashboard you've ever seen on the internet.
                      </p>
                    <p className="text-warning">
                      Text Warning - Dashboard Table Heading and complex
                      bootstrap dashboard you've ever seen on the internet.
                      </p>
                    <p className="text-danger">
                      Text Danger - Dashboard Table Heading and complex
                      bootstrap dashboard you've ever seen on the internet.
                      </p>
                  </div>

                  <div className="typo-line">
                    <h2>
                      <p className="category">Small Tag</p>Header with small
                        subtitle <br />
                      <small>".small" is a tag for the headers</small>{" "}
                    </h2>
                  </div>
                </div>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}