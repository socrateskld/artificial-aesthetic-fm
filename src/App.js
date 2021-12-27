import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Producers from "./Producers.json";
import { Container, Row, Col } from "react-bootstrap";
import { ProducerCard } from "./ProducerCard";
import NavBarComponent from "./NavBarComponent";

function App() {
  return (
    <>
      <NavBarComponent />
      <Container style={{ marginTop: "50px" }}>
        <Row>
          {Producers.map((Producers) => (
            <Col>
              <ProducerCard Producers={Producers} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
