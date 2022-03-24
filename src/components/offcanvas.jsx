import Offcanvas from 'react-bootstrap/Offcanvas';
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';
import { Form } from 'react-bootstrap';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-primary" onClick={handleShow} className="me-2" style={{color: '#61dafb', borderColor: '#61dafb'}}>
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Today's Workout</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Form>
  {['checkbox', 'checkbox','checkbox','checkbox','checkbox','checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />
    </div>
  ))}
</Form>

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  function Example() {
    return (
      <>
        {['Workout of the Day'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={'end'} name={placement} />
        ))}
      </>
    );
  }
  
  render(<Example />);

  export default Example;

  