import {
    useEffect,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    FC,
} from 'react';

import { LocalImage } from '../../../../common/atoms/Image';
import './AlbumContent.scss';

const STATES = {
    READ: 'read',
    START_PREV: 'start prev',
    END_PREV: 'end prev',
    START_NEXT: 'start next',
    END_NEXT: 'end next',
};

interface contentProps {
    pages: ReactNode[];
    flippedPage: number;
    setFlippedPage: Dispatch<SetStateAction<number>>;
    handleDelete: (pageIdx: number) => void;
    handleEdit: (pageIdx: number) => void;
}

const AlbumContent: FC<contentProps> = ({
    pages,
    flippedPage,
    setFlippedPage,
    handleDelete,
    handleEdit,
}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentState, setCurrentState] = useState(STATES.READ);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        const newWidth = window.innerWidth;
        setIsMobile(newWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const transitionTime = 700;
    const transitionTimeStr = (transitionTime / 1000).toString() + 's';

    const PageContent = (pageIdx: number) => (
        <>
            {pages[pageIdx] && (
                <div className="page_content">
                    {pages[pageIdx]}

                    <div className="page_menu">
                        <div className="icon">
                            <LocalImage
                                className="delete"
                                src="trash_bin.png"
                                style={{ height: '30px' }}
                                onClick={() => handleDelete(pageIdx)}
                            />
                        </div>
                        <div className="icon">
                            <LocalImage
                                className="edit"
                                src="edit.png"
                                style={{ height: '30px' }}
                                onClick={() => handleEdit(pageIdx)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );

    const LeftPage = () => {
        if (
            currentState === STATES.START_PREV ||
            currentState === STATES.END_PREV
        ) {
            return isMobile
                ? PageContent(currentPage - 1)
                : PageContent(currentPage - 2);
        }
        return PageContent(currentPage);
    };

    const RightPage = () => {
        if (
            currentState === STATES.START_NEXT ||
            currentState === STATES.END_NEXT
        ) {
            return PageContent(currentPage + 3);
        }
        return PageContent(currentPage + 1);
    };

    const LeftFlip = () => {
        if (currentState === STATES.START_PREV) {
            return PageContent(currentPage);
        }
        if (currentState === STATES.END_NEXT) {
            return isMobile
                ? PageContent(currentPage + 1)
                : PageContent(currentPage + 2);
        }
        return null;
    };

    const MobileFlip = () => {
        if (currentState === STATES.START_NEXT) {
            return PageContent(currentPage + 1);
        }
        // if (currentState === STATES.END_NEXT) {
        //     return isMobile
        //         ? PageContent(currentPage + 1)
        //         : PageContent(currentPage + 2);
        // }
        return null;
    };

    const RightFlip = () => {
        if (currentState === STATES.START_NEXT) {
            return PageContent(currentPage + 1);
        }
        if (currentState === STATES.END_PREV) {
            return PageContent(currentPage - 1);
        }
        return null;
    };

    const flipToPrevPage = () => {
        if (isMobile) {
            if (flippedPage > 0) {
                setFlippedPage(prev => prev - 1);
                setCurrentState(STATES.START_PREV);
                setTimeout(() => {
                    setCurrentState(STATES.READ);
                    setCurrentPage(prev => prev - 1);
                }, transitionTime);
            }
        } else {
            if (flippedPage > 1) {
                setFlippedPage(prev => prev - 2);
                setCurrentState(STATES.START_PREV);
                setTimeout(() => {
                    setCurrentState(STATES.END_PREV);
                }, transitionTime);
                setTimeout(() => {
                    setCurrentState(STATES.READ);
                    setCurrentPage(prev => prev - 2);
                }, transitionTime * 2);
            }
        }
    };

    const flipToNextPage = () => {
        if (isMobile) {
            if (flippedPage < pages.length - 1) {
                setFlippedPage(prev => prev + 1);
                setCurrentState(STATES.START_NEXT);
                setTimeout(() => {
                    setCurrentState(STATES.READ);
                    setCurrentPage(prevPage => prevPage + 1);
                }, transitionTime);
            }
        } else {
            if (flippedPage < pages.length - 2) {
                setFlippedPage(prev => prev + 2);
                setCurrentState(STATES.START_NEXT);
                setTimeout(() => {
                    setCurrentState(STATES.END_NEXT);
                }, transitionTime);
                setTimeout(() => {
                    setCurrentState(STATES.READ);
                    setCurrentPage(prevPage => prevPage + 2);
                }, transitionTime * 2);
            }
        }
    };

    const leftFlipStyle = () => {
        const style = { transform: 'none', transition: transitionTimeStr };
        if (
            currentState === STATES.START_NEXT ||
            currentState === STATES.START_PREV
        ) {
            style.transform = 'rotateY(90deg)';
        }
        return style;
    };

    const mobileFlipStyle = () => {
        const style = {
            transform: 'rotateY(90deg)',
            transition: transitionTimeStr,
        };
        if (
            currentState === STATES.START_NEXT ||
            currentState === STATES.START_PREV
        ) {
            style.transform = 'none';
        }
        return style;
    };

    const rightFlipStyle = () => {
        const style = { transform: 'none', transition: transitionTimeStr };
        if (
            currentState === STATES.START_NEXT ||
            currentState === STATES.START_PREV
        ) {
            style.transform = 'rotateY(-90deg)';
        }
        return style;
    };

    return (
        <div className="album_content">
            <div className="page_info">
                <LocalImage
                    className="btn_prev"
                    width="30px"
                    src="left_arrow.png"
                    alt="앨범 이전 페이지"
                    onClick={flipToPrevPage}
                />
                <LocalImage
                    className="btn_next"
                    width="30px"
                    src="right_arrow.png"
                    alt="앨범 다음 페이지"
                    onClick={flipToNextPage}
                ></LocalImage>
                <div className="page_date">2023.09.03</div>
            </div>
            <div className="book">
                <div className="left_cover" />
                <div className="left page">{LeftPage()}</div>
                <div className="left page flip" style={leftFlipStyle()}>
                    {LeftFlip()}
                </div>
                {isMobile && (
                    <div
                        className="left page flip mobile"
                        style={mobileFlipStyle()}
                    >
                        {MobileFlip()}
                    </div>
                )}

                {!isMobile && (
                    <>
                        <div className="right_cover" />
                        <div className="right page">{RightPage()}</div>
                        <div
                            className="right page flip"
                            style={rightFlipStyle()}
                        >
                            {RightFlip()}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AlbumContent;
