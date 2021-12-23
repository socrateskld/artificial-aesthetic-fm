import react from "react";
import { Card, Badge, Button } from "react-bootstrap";
import Producers from "./Producers.json";
import Logo from "./assets/aaa.jpeg";

export function ProducerCard({ Producers, name }) {
  return (
    <Card style={{ width: "19rem" }}>
      <Card.Img src={Producers.Image} />
      <Card.Body>
        <Card.Title>Name :{Producers.Name}</Card.Title>
        <Card.Text>Genre :{Producers.Genre}</Card.Text>
        <Card.Text>When :{Producers.Days}</Card.Text>
        <Card.Text>Time :{Producers.Time}</Card.Text>
        <Button variant="primary" className="button">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}
