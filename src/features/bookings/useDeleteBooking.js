import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBookingMutate, isLoading: isDeletingBooking } =
    useMutation({
      mutationFn: (id) => deleteBooking(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ active: true });
        toast.success("Booking Successfully Deleted");
      },
      onError: (err) => toast.error(err.message),
    });

  return { isDeletingBooking, deleteBookingMutate };
}
