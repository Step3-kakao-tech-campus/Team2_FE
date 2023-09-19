import React, { useEffect } from "react";
import { Stage, Layer, Star, Text, Image } from "react-konva";
import { yArray } from "./Yjsdoc";
import useImage from "use-image";

function Canvas() {
  const [stars, setStars] = React.useState([]);

  useEffect(() => {
    const updateStars = () => {
      const uniqueStars = Array.from(
        new Set(yArray.toArray().map((star) => star.id))
      ).map((id) => yArray.toArray().find((star) => star.id === id));
      setStars(uniqueStars);
    };

    yArray.observe(updateStars);

    updateStars(); // 초기 렌더링을 위해 한번 호출
    return () => {
      yArray.unobserve(updateStars);
    };
  }, []);

  const findIndex = (arr, predicate) => {
    for (let i = 0; i < arr.length; i++) {
      if (predicate(arr.get(i), i)) {
        return i;
      }
    }
    return -1;
  };

  const handleDragStart = (e, id) => {
    setStars((prevStars) => {
      return prevStars.map((star) => {
        return star.id === id ? { ...star, isDragging: true } : star;
      });
    });
  };

  const handleDragEnd = (e, id) => {
    // 여기에서 yArray를 업데이트해야 합니다.
    const index = findIndex(yArray, (star) => star.id === id); // findIndex 메서드를 사용하세요.
    if (index !== -1) {
      const updatedStar = {
        ...yArray.get(index),
        x: e.target.x(),
        y: e.target.y(),
      };
      yArray.delete(index, 1);
      yArray.insert(index, [updatedStar]);
    }
    setStars((prevStars) => {
      return prevStars.map((star) => {
        return star.id === id
          ? { ...star, isDragging: false, x: e.target.x(), y: e.target.y() }
          : star;
      });
    });
  };
  const [image] = useImage(
    "data:image/jpeg;base64,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"
  );
  const [position, setPosition] = React.useState({ x: 50, y: 50 });

  const handleDragEnds = (e) => {
    setPosition({ x: e.target.x(), y: e.target.y() });
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="별을 옮겨보세요" />
        {stars.map((star) => (
          <Star
            key={star.id}
            id={star.id}
            {...star}
            draggable
            onDragStart={(e) => handleDragStart(e, star.id)}
            onDragEnd={(e) => handleDragEnd(e, star.id)}
          />
        ))}
        {image && (
          <Image
            image={image}
            x={position.x}
            y={position.y}
            draggable
            onDragEnd={handleDragEnds}
          />
        )}
      </Layer>
    </Stage>
  );
}

export default Canvas;
