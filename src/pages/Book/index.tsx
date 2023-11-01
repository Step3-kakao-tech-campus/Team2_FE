import React, { useState } from 'react';
import './index.scss';

const STATES = {
    READ: 'read',
    START_PREV: 'start prev',
    END_PREV: 'end prev',
    START_NEXT: 'start next',
    END_NEXT: 'end next',
};

const Book = ({ pages }: { pages: React.ReactNode[] }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [flippedPage, setFlippedPage] = useState(currentPage);
    const [currentState, setCurrentState] = useState(STATES.READ);

    const transitionTime = 600;
    const transitionTimeStr = (transitionTime / 1000).toString() + 's';

    const LeftPage = () => {
        if (
            currentState === STATES.START_PREV ||
            currentState === STATES.END_PREV
        ) {
            return pages[currentPage - 2];
        }
        return pages[currentPage];
    };

    const RightPage = () => {
        if (
            currentState === STATES.START_NEXT ||
            currentState === STATES.END_NEXT
        ) {
            return pages[currentPage + 3];
        }
        return pages[currentPage + 1];
    };

    const LeftFlip = () => {
        if (currentState === STATES.START_PREV) {
            return pages[currentPage];
        }
        if (currentState === STATES.END_NEXT) {
            return pages[currentPage + 2];
        }
        return null;
    };

    const RightFlip = () => {
        if (currentState === STATES.START_NEXT) {
            return pages[currentPage + 1];
        }
        if (currentState === STATES.END_PREV) {
            return pages[currentPage - 1];
        }
        return null;
    };

    const flipToPrevPage = () => {
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
    };

    const flipToNextPage = () => {
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
        <div className="container">
            <div>current page: {currentPage}</div>
            <div>flipped page: {flippedPage}</div>
            <button onClick={flipToPrevPage}>prev</button>
            <button onClick={flipToNextPage}>next</button>
            <div className="book">
                <div className="left_page">{LeftPage()}</div>
                <div className="right_page">{RightPage()}</div>
                <div
                    className="flipping left_flip left_page"
                    style={leftFlipStyle()}
                >
                    {LeftFlip()}
                </div>
                <div
                    className="flipping right_flip right_page"
                    style={rightFlipStyle()}
                >
                    {RightFlip()}
                </div>
            </div>
        </div>
    );
};

export default Book;
