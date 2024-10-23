import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";

import Stat from "./Stat";

// eslint-disable-next-line react/prop-types
const Stats = ({ recentBookings, confirmedStays, numDays, cabinsNum }) => {
  // eslint-disable-next-line react/prop-types
  const recentBookingsNum = recentBookings?.length;

  // eslint-disable-next-line react/prop-types
  const totalSales = recentBookings?.reduce(
    (acc, cur) => cur.totalPrice + acc,
    0
  );

  // eslint-disable-next-line react/prop-types
  const checkInsNum = confirmedStays?.length;

  const occupancyPercentage =
    // eslint-disable-next-line react/prop-types
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
