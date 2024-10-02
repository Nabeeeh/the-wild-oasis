import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export const useCheckingOut = function () {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationKey: ["checkout"],

    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Successfully Checked Out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("There was an error while checking Out");
    },
  });

  return { checkout, isCheckingOut };
};
