import { Card, Form, Button, Alert} from 'react-bootstrap';

const Transaction = () => {
    return ( <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
    <div className="w-100" style={{maxWidth: "400px"}}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Movement</h2>
      
          <Form >
          <Form.Group id="texts">
              <Form.Label>Origin Account Number</Form.Label>
              <Form.Control type="text"  required/>
            </Form.Group>
            <Form.Group id="texts">
              <Form.Label>Destination Account Number</Form.Label>
              <Form.Control type="text"  required/>
            </Form.Group>
            <Form.Group id="texts">
              <Form.Label> Amount $</Form.Label>
              <Form.Control type="text" required/>
            </Form.Group>
            <Form.Group id="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control type="text" required/>
            </Form.Group>
            <Button 
             
              className="w-100 mt-3" 
              type="submit">Save Expense</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  </div>);
  }
  
  export default Transaction;