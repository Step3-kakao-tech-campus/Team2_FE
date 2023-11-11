import { FC, ReactNode } from 'react';
import Modal from '../../../../common/organisms/Modal';

import './DeleteAlbumModal.scss';

interface DeleteAlbumModalProps {
    albumImage: ReactNode;
    closeModal: () => void;
    deletePage: () => void;
}

const DeleteAlbumModal: FC<DeleteAlbumModalProps> = ({
    albumImage,
    closeModal,
    deletePage,
}) => {
    const modalProps = {
        title: '삭제',
        subTitle: '페이지를 휴지통으로 이동합니다.',
        confirmText: '삭제',
        onClose: closeModal,
        onConfirm: deletePage,
    };

    return (
        <Modal {...modalProps}>
            <div className="preview">{albumImage}</div>
        </Modal>
    );
};

export default DeleteAlbumModal;
