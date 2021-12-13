import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { styled,Global,css } from "frontity";
import donateImg from "../../assets/images/donateImg.png";
import externalCss from  "./style.css";
const DonateNow = (props) => {
  const [donatesubmit, setdonatesubmit] = useState(false);
  return (
   <div className="modal-container">
     <Global styles={css(externalCss)} />
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="test"
      >
        {donatesubmit != true ? (
          <div>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Donations
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Make a donation</h4>
              <p>
                To donate by credit or debit card, please enter the amount you
                wish to contribute and then click the "Donate Now" button to
                continue to the secure payment page.
              </p>
              <h3>0.00</h3>
              <h5>USD</h5>
              <button>Donate now </button>
              <img src={donateImg} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setdonatesubmit(true)}>Donate Now</Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </div>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal Donation Submit
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>this is you modal for doantion submission</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalShow(true)}>Donate Now</Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
      </div>
  );
};
export default DonateNow;

