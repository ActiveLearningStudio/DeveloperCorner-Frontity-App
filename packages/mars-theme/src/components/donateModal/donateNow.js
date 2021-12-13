import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
function DonateNow(props) {
  const [donatesubmit, setdonatesubmit] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {donatesubmit != true ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal Donate Now
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setdonatesubmit(true)}>Donate Now</Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal Donation Submit
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
             this is you modal for doantion submission
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(true)}>Donate Now</Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}
export default DonateNow;
