import { useEffect, useRef, ReactNode, FC } from 'react';
import './Modal.scss';
interface ModalProps {
    setModalOpen: (isOpen: boolean) => void;
    className: string;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ setModalOpen, className, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
        const handler = (event: MouseEvent | TouchEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [setModalOpen]);

    return (
        <div className="modal_background">
            <div ref={modalRef} className={`modal_dialog ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
