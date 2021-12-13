import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { styled } from "frontity";
import donateImg from "../../assets/images/donateImg.png";
import "./style.css";
const DonateNow = (props) => {
  const [donatesubmit, setdonatesubmit] = useState(false);
  return (
    <Container>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
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
    </Container>
  );
};
export default DonateNow;
const Container = styled.div`
  .modal-dialog {
    .modal-content {
      padding: 0px 146px;
      div {
        .modal-header {
          background: linear-gradient(90deg, #084892 30.14%, #285aa5 94.74%);
          background: red !important;
          border-radius: 25px;
          color: #084892;
          .modal-body {
            .modal.show .modal-dialog {
              text-align: center;
              h4 {
                font-family: Rubik;
                font-style: normal;
                font-weight: 500;
                font-size: 36px;
                line-height: 43px;
                color: #084892;
              }
              h3 {
                width: 201px;
                height: 116px;
                font-family: Rubik;
                font-style: normal;
                font-weight: 300;
                font-size: 98px;
                line-height: 116px;
                text-align: center;
                color: #084892;
              }
            }
          }
        }
      }
    }
  }
`;
