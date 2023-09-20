import { useState } from 'react';
import { useEffect } from 'react';
import { LocalImage } from '../atoms/image';

interface CarouselProps {
    width?: string;
    height?: string;
    imgList?: string[];
    intervalTime?: number;
}

function Carousel({
    width = '100%',
    height = '400px',
    imgList = [],
    intervalTime = 6000,
}: CarouselProps) {
    const [curImageIndex, setCurImageIndex] = useState(0);
    const transform = `translate(-${curImageIndex * 100}%)`;

    useEffect(() => {
        const interval = setInterval(() => {
            moveRight();
        }, intervalTime);
        return () => clearInterval(interval);
    }, []);

    const moveLeft = () => {
        setCurImageIndex(value => {
            let index = (value - 1) % imgList.length;
            if (value < 0) {
                index = index + imgList.length;
            }
            return index;
        });
    };

    const moveRight = () => {
        setCurImageIndex(value => {
            let index = (value + 1) % imgList.length;
            if (value >= imgList.length) {
                index = index - imgList.length;
            }
            return index;
        });
    };

    return (
        <div
            style={{
                width: width,
                height: height,
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <button className="handleBtn left" onClick={moveLeft}>
                ◀
            </button>
            <button className="handleBtn right" onClick={moveRight}>
                ▶
            </button>
            <div
                className="carousel"
                style={{
                    transform: transform,
                }}
            >
                {imgList.map((url, index) => {
                    return (
                        <LocalImage
                            height={'100%'}
                            src={url}
                            key={index}
                        ></LocalImage>
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;
