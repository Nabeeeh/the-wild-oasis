import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";

import Stat from "./Stat";

const Stats = ({ recentBookings, confirmedStays, numDays, cabinsNum }) => {
  const recentBookingsNum = recentBookings?.length;

  const totalSales = recentBookings?.reduce(
    (acc, cur) => cur.totalPrice + acc,
    0
  );

  const checkInsNum = confirmedStays?.length;

  const occupancyPercentage =
    confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsNum);

  return (
    <>
      <Stat
        title="Bookings"
        value={recentBookingsNum}
        color="blue"
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        value={formatCurrency(totalSales)}
        color="green"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check ins"
        value={checkInsNum}
        color="indigo"
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Occupancy rate"
        value={Math.round(occupancyPercentage * 100) + "%"}
        color="yellow"
        icon={<HiOutlineChartBar />}
      />
    </>
  );
};

export default Stats;
