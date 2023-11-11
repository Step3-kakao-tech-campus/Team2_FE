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
import { PageDetail } from '../../../../service/album';
import Button from '../../../../common/atoms/Button';

const STATES = {
    READ: 'read',
    START_PREV: 'start prev',
    END_PREV: 'end prev',
    START_NEXT: 'start next',
    END_NEXT: 'end next',
};

interface contentProps {
    // pages: ReactNode[];
    pages?: PageDetail[];
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
    const [flipCount, setFlipCount] = useState(isMobile ? 1 : 2);

    const handleResize = () => {
        const newWidth = window.innerWidth;
        setIsMobile(newWidth <= 768);
        setFlipCount(newWidth <= 768 ? 1 : 2);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [pages]);

    const transitionTime = 700;
    const transitionTimeStr = (transitionTime / 1000).toString() + 's';

    const PageContent = (pageIdx: number) => (
        <>
            {pages && pages[pageIdx] && (
                <div className="page_content">
                    {<LocalImage src={pages[pageIdx].image} />}

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
            return PageContent(currentPage - flipCount);
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
            return PageContent(currentPage + flipCount);
        }
        return null;
    };

    const MobileFlip = () => {
        if (currentState === STATES.START_NEXT) {
            return PageContent(currentPage + 1);
        }
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

    const flipPage = async (
        newFlippedPage: number,
        startState: string,
        endState: string,
    ) => {
        setFlippedPage(newFlippedPage);
        setCurrentState(startState);
        await new Promise(resolve => setTimeout(resolve, transitionTime));
        if (!isMobile) {
            setCurrentState(endState);
            await new Promise(resolve => setTimeout(resolve, transitionTime));
        }
        setCurrentState(STATES.READ);
        setCurrentPage(newFlippedPage);
    };

    const flipToPrevPage = () => {
        if (flippedPage >= flipCount) {
            flipPage(
                flippedPage - flipCount,
                STATES.START_PREV,
                STATES.END_PREV,
            );
        }
    };

    const flipToNextPage = () => {
        if (pages && flippedPage < pages.length - flipCount) {
            flipPage(
                flippedPage + flipCount,
                STATES.START_NEXT,
                STATES.END_NEXT,
            );
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

    const addPage = () => {
        const newPage: PageDetail = {
            pageId: -1,
            image: '',
            createAt: '2023-11-11',
        };
        pages?.push(newPage);
    };

    return (
        <div className="album_content">
            <div className="album_menu">
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
                <Button className="add_page" onClick={addPage}>
                    페이지 추가
                </Button>
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
