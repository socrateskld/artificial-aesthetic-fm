import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Producers from "./Producers.json";
import { Container, Row, Col } from "react-bootstrap";
import { ProducerCard } from "./ProducerCard";

function App() {
  return (
    <Container>
      {Producers.map((Producers) => (
        <Row>
          <ProducerCard Producers={Producers} />
        </Row>
      ))}
    </Container>
  );
}

export default App;
