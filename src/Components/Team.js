import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import user from "../images/user.png";
import Button from "./Button";
const userData = [
  {
    name: "Team member 1",
    url: user,
    alt: "slide label",
    description:
      "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    name: "Team member 2",
    url: user,
    alt: "slide label",
    description:
      "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    name: "Team member 3",
    url: user,
    alt: "slide label",
    description:
      "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    name: "Team member 4",
    url: user,
    alt: "slide label",
    description:
      "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  }
];
function Team() {
  return (
    <Container className="py-5">
      <Row>
        {userData &&
          userData.map((user, i) => {
            return (
              <Col key={i} xs={12} sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={user.url} />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.description}</Card.Text>
                    <Button className="btn btn-sm btn-primary mr-5" text="Read More" />
                    <Card.Link href={user.facebook}>
                      <i className="fa fa-facebook"></i>
                    </Card.Link>
                    <Card.Link href={user.twitter}>
                      <i className="fa fa-twitter"></i>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default Team;
