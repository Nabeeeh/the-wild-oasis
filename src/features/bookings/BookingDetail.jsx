import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";

import { useBooking } from "./useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckingOut } from "../check-in-out/useCheckingOut";
import { useDeleteBooking } from "./useDeleteBooking";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckingOut();
  const { deleteBookingMutate, isDeletingBooking } = useDeleteBooking();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status?.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check In
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Checkout
          </Button>
        )}

        <Modal>
          <Modal.Open
            opens="deleteBooking"
            render={(deleteBooking) => (
              <Button
                variation="danger"
                icon={<HiTrash />}
                onClick={deleteBooking}
              >
                Delete Booking
              </Button>
            )}
          />

          <Modal.Window name="deleteBooking">
            <ConfirmDelete
              resourceName="Booking"
              onConfirm={() =>
                deleteBookingMutate(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
              disabled={isDeletingBooking}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
