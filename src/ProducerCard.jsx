import { Card, Button, Row, Col } from "react-bootstrap";

export function ProducerCard({ Producers }) {
  return (
    <Card
      border="dark"
      style={{
        color: "#ECDBBA",
        background: "#1F4068",
      }}
    >
      <Card.Img className="mb-2" src={Producers.Image} />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title
              style={{
                color: "#C84B31",
              }}
            >
              <span
                style={{
                  color: "white",
                }}
              >
                {" "}
                Name:{" "}
              </span>
              {Producers.Name}
            </Card.Title>
            <Card.Text>Genre :{Producers.Genre}</Card.Text>
            <Card.Text>When :{Producers.Days}</Card.Text>
            <Card.Text>Time :{Producers.Time}</Card.Text>
            <Button
              href="https://aawebradio.com/"
              variant="btn btn-outline-danger"
              className="button"
            >
              Listen Live
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
