import react from "react";
import { Card, Badge, Button } from "react-bootstrap";
import Producers from "./Producers.json";
import Logo from "./assets/aaa.jpeg";

export function ProducerCard({ Producers, name }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Producers.Image} />
      <Card.Body>
        <Card.Title>{Producers.Name}</Card.Title>
        <Card.Text>{Producers.Days}</Card.Text>
        <Button variant="primary" className="button">
          Fuck Off
        </Button>
      </Card.Body>
    </Card>
  );
}
