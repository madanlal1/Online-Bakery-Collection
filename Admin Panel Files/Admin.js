import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";

export default function Admin() {
  return (
    <>
      <Container fluid="sm" style={{ width: "30rem" }}>
        <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
        <br />
        <Button variant="primary" className="insert">
          ADD Product
        </Button>

        <div>
          <br />
        </div>

        <Button variant="primary" className="insert">
          DELETE Product
        </Button>
      </Container>
    </>
  );
}
