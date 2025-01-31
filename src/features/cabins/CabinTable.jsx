import { useSearchParams } from "react-router-dom";

import { useCabins } from "./useCabins";

import Spinner from "./../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

const CabinTable = () => {
  const { cabins, isLoading } = useCabins();
 

  const [searchParams] = useSearchParams();

  // 1.) Filter
  const filterValue = searchParams.get("discount") || "all";

  if (isLoading) return <Spinner />;

  if (!cabins?.length) return <Empty resourceName="Cabins" />;

  let filteredCabins;

  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
  // console.log(filterValue, filteredCabins);

  // 2.) Sort
  const sortByValue = searchParams.get("sortBy") || "name-asc";

  const [field, direction] = sortByValue.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = filteredCabins?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
