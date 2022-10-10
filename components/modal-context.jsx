import { createContext, useState } from 'react';



const ModalContext = createContext({
    modalOpenState: false,
    openModal : () => {},
    closeModal: () => {}
})


export function ModalContextProvider(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openTheModal = () => setIsModalOpen(true);
    const closeTheModal = () => setIsModalOpen(false);


    const context = {
    modalOpenState: isModalOpen,
    openModal : openTheModal,
    closeModal: closeTheModal,
    }

    return (
        <ModalContext.Provider value={context}>
          {props.children}
        </ModalContext.Provider>
      );
    }

    export default ModalContext