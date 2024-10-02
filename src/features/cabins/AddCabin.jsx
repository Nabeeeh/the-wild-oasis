import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open
          opens="cabin-form"
          render={(open) => <Button onClick={open}>Add New Cabin</Button>}
        />
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setIsOpenModal((isOpen) => !isOpen)}>
//         Add New Cabin
//       </Button>

//       {isOpenModal &&
//         createPortal(
//           <Modal onCloseModal={setIsOpenModal}>
//             <CreateCabinForm onCloseModal={setIsOpenModal} />
//           </Modal>,
//           document.getElementById("modal")
//         )}
//     </>
//   );
// };

export default AddCabin;
