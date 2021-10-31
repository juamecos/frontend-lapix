import React, { useState } from 'react';

/**
 * Hook that contains the logic to manage modal
 * @param {boolean} [initialMode=false] if true, modal is open. Defailt is false, closed.
 * @return {*}
 */
const useModal = (initialMode = false) => {
	const [modalOpen, setModalOpen] = useState(initialMode);
	const toggleModal = () => setModalOpen(!modalOpen);
	return { modalOpen, setModalOpen, toggleModal };
};

export default useModal;
