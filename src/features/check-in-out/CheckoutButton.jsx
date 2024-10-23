import { useCheckingOut } from "./useCheckingOut";

import Button from "../../ui/Button";

// eslint-disable-next-line react/prop-types
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckingOut();

  return (
    <Button
      variation="primary"
      size="small"
      disabled={isCheckingOut}
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
