import React from "react";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";
import "../styles/about.css";
import Team from "../components/Team/Team";
import { useEffect } from "react";

const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* About the company and team section start */}
      <section className="AboutUs">
        <Container>
          <Row>
            <Col lg="12">
              <div className="content">
                <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus beatae tempore voluptatibus iusto blanditiis,
                  repudiandae voluptates earum consequuntur ex, autem recusandae
                  distinctio consectetur aspernatur id enim nesciunt molestias
                  temporibus provident. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quia provident accusantium saepe quaerat aut
                  aliquam, ab corrupti! Rerum impedit nisi pariatur aspernatur.
                  Molestias architecto temporibus minus pariatur molestiae
                  suscipit distinctio.
                </p>
              </div>
              <div className="slider">
                <h2>Our team</h2>
                <Team />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* About the company and team section end */}

      {/* Contact us section start */}
      <section className="ContactUs">
        <Container>
          <Row>
            <h1>
              <i className="ri-edit-2-fill"></i>Let's start a conversation
            </h1>
            <Col lg="6">
              <div className="ContactUs_content">
                <h2>Ask how we can help you ...</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
                  commodi voluptatem autem magnam blanditiis tempora!
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
                  commodi voluptatem autem magnam blanditiis tempora!
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <h2>Offline location</h2>
                <p>
                  Position 1 <br />
                  dolor sit amet,
                  <br /> consectetur adipiscing elit,
                  <br /> sed do ei usmod tempor
                  <br /> incididunt ut labore
                </p>

                <h2>Contact Information</h2>
                <p>Email: email@gmail.com</p>
                <p>Phone: +91 9999999999</p>

                <h2>Privacy Information</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, iste ab! Consectetur fugit possimus, dolorem facere
                  et laboriosam molestiae ut aliquam corporis animi quasi
                  asperiores architecto doloremque ipsa, consequatur quas.
                </p>
              </div>
            </Col>
            {/* Contact us section end */}

            {/* Contact form start */}
            <Col lg="6">
              <div className="ContactUs_form">
                <form className="ContactUs_Info" action="https://formspree.io/your_fromspree_link" method="post" id="sendemail">
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Fist Name"
                      id="firstName"
                      autoComplete='off'
                      name="firstName"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      name="lastName"
                      autoComplete='off'
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      autoComplete='off'
                      required
                    />
                  </FormGroup>
                  <FormGroup className="message">
                    <input
                      type="message"
                      placeholder="Any question?"
                      autoComplete='off'
                      id="message"
                      name="message"
                      required 
                    />
                  </FormGroup>
                  <Button type="submit" value="send"  className="btn primary__btn w-100 mb-1 mt-4" >Send</Button>
                </form>
              </div>
            </Col>

            {/* Contact form end */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
