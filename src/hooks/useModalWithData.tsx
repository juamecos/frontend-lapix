import { useState } from 'react';
import useModal from './useModal';

/**
 *
 * @param initialMode <boolean> If true, modal is vissible
 * @param initialSelected <any> Selected
 * @returns hook that gets the data from the selected item in a list or table etc
 */

const useModalWithData = (initialMode = false, initialSelected = null) => {
	const { modalOpen, setModalOpen } = useModal(initialMode);
	const [selected, setSelected] = useState(initialSelected);
	const setModalState = (state: any) => {
		setModalOpen(state);
		if (state === false) {
			setSelected(null);
		}
	};
	return { modalOpen, setModalOpen, selected, setSelected, setModalState };
};

export default useModalWithData;
