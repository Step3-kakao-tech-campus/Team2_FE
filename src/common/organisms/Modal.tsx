import { useEffect, useRef, ReactNode, FC } from 'react';
import Button from '../atoms/Button';
import './Modal.scss';

interface ModalProps {
    className?: string;
    contentOnly?: boolean;
    title?: string;
    subTitle?: string;
    children?: ReactNode;
    cancelText?: string;
    confirmText?: string;
    onClose?: () => void;
    onConfirm?: () => void;
}

const Modal: FC<ModalProps> = ({
    className = '',
    contentOnly = false,
    title,
    subTitle,
    children,
    cancelText,
    confirmText,
    onClose,
    onConfirm,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (
                onClose &&
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [onClose]);

    return (
        <>
            <div className="modal_background">
                <div ref={modalRef} className={`modal_dialog ${className}`}>
                    {!contentOnly && (
                        <div className="modal_header">
                            <div className="modal_title">{title}</div>
                            <div className="modal_sub_title">{subTitle}</div>
                        </div>
                    )}
                    <div className="modal_body">{children}</div>

                    {!contentOnly && (
                        <div className="modal_footer">
                            <Button className="cancel" onClick={onClose}>
                                {cancelText ?? '취소'}
                            </Button>
                            <Button className="confirm" onClick={onConfirm}>
                                {confirmText ?? '확인'}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Modal;
