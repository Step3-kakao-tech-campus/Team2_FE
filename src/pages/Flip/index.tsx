import { useState } from 'react';
import './index.scss';

const pages = Array.from({ length: 9 }, (_, i) => (
    <div className="page-content" key={i}>
        {`Page ${i} Content`}
    </div>
));

const Flip = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [flippedPage, setFlippedPage] = useState(currentPage);
    const [currentState, setCurrentState] = useState('read');

    const transitionTime = 600;
    const transitionTimeStr = (transitionTime / 1000).toString() + 's';

    const LeftPage = () => {
        if (currentState === 'start prev' || currentState === 'end prev') {
            return pages[currentPage - 2];
        }
        return pages[currentPage];
    };

    const RightPage = () => {
        if (currentState === 'start next' || currentState === 'end next') {
            return pages[currentPage + 3];
        }
        return pages[currentPage + 1];
    };

    const LeftFlip = () => {
        if (currentState === 'start prev') {
            return pages[currentPage];
        }
        if (currentState === 'end next') {
            return pages[currentPage + 2];
        }
        return null;
    };

    const RightFlip = () => {
        if (currentState === 'start next') {
            return pages[currentPage + 1];
        }
        if (currentState === 'end prev') {
            return pages[currentPage - 1];
        }
        return null;
    };

    const flipToPrevPage = () => {
        if (flippedPage > 1) {
            setFlippedPage(prev => prev - 2);
            setCurrentState('start prev');
            setTimeout(() => {
                setCurrentState('end prev');
            }, transitionTime);
            setTimeout(() => {
                setCurrentState('read');
                setCurrentPage(prev => prev - 2);
            }, transitionTime * 2);
        }
    };

    const flipToNextPage = () => {
        if (flippedPage < pages.length - 2) {
            setFlippedPage(prev => prev + 2);
            setCurrentState('start next');
            setTimeout(() => {
                setCurrentState('end next');
            }, transitionTime);
            setTimeout(() => {
                setCurrentState('read');
                setCurrentPage(prevPage => prevPage + 2);
            }, transitionTime * 2);
        }
    };

    const leftFlipStyle = () => {
        const style = { transform: 'none', transition: transitionTimeStr };
        if (currentState === 'start next' || currentState === 'start prev') {
            style.transform = 'rotateY(90deg)';
        }
        return style;
    };

    const rightFlipStyle = () => {
        const style = { transform: 'none', transition: transitionTimeStr };
        if (currentState === 'start next' || currentState === 'start prev') {
            style.transform = 'rotateY(-90deg)';
        }
        return style;
    };

    return (
        <div className="container">
            <div>current page: {currentPage}</div>
            <div>flipped page: {flippedPage}</div>
            <div>
                state: {currentState}, bool: {currentState === 'read'}
            </div>
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

export default Flip;
