import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivities() {
  const { data: activities, isLoading: isLoadingActivities } = useQuery({
    queryKey: ["activities"],
    queryFn: getStaysTodayActivity,
  });

  return { activities, isLoadingActivities };
}
