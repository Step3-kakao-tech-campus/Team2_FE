import React, { useEffect } from "react";
import { Stage, Layer, Image as KonvaImage, Star } from "react-konva";
import useImage from "use-image";
import { yArray } from "./Yjsdoc";

function ImageComponent({ url, id, x, y, onDragEnd }) {
  const [image] = useImage(url);
  return (
    <KonvaImage
      image={image}
      x={x} // x 좌표 추가
      y={y} // y 좌표 추가
      draggable
      onDragEnd={(e) => onDragEnd(e, id)}
    />
  );
}

function StarComponent({ id, x, y, onDragEnd }) {
  return (
    <Star
      x={x}
      y={y}
      numPoints={5}
      innerRadius={20}
      outerRadius={40}
      fill="#89b717"
      draggable
      onDragEnd={(e) => onDragEnd(e, id)}
    />
  );
}

function Canvas() {
  const [elements, setElements] = React.useState([]);

  useEffect(() => {
    const updateElements = () => {
      const uniqueElements = Array.from(
        new Set(yArray.toArray().map((element) => element.id))
      ).map((id) => yArray.toArray().find((element) => element.id === id));

      setElements(uniqueElements);
    };

    yArray.observe(updateElements);

    updateElements();

    return () => {
      yArray.unobserve(updateElements);
    };
  }, []);

  const handleDragEnd = (e, id) => {
    // 드래그된 요소의 현재 인덱스를 찾습니다.
    const index = yArray.toArray().findIndex((element) => element.id === id);
    console.log(yArray.toJSON());
    if (index === -1) {
      console.error("Invalid index"); // or some error handling
      return;
    }

    // 드래그된 요소의 새로운 좌표를 가져옵니다. (Konva 이벤트 객체에서)
    const x = e.target.x();
    const y = e.target.y();

    // yArray에서 해당 요소를 가져와 새로운 좌표로 업데이트합니다.
    const updatedObject = { ...yArray.toArray()[index], x, y };
    yArray.delete(index, 1);
    yArray.insert(index, [updatedObject]);
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {elements.map((element) =>
          element.type === "image" ? (
            <ImageComponent
              key={element.id}
              id={element.id}
              x={element.x} // x 속성 전달
              y={element.y} // y 속성 전달
              url={element.url}
              onDragEnd={handleDragEnd}
            />
          ) : (
            <StarComponent
              key={element.id}
              id={element.id}
              x={element.x}
              y={element.y}
              onDragEnd={handleDragEnd}
            />
          )
        )}
      </Layer>
    </Stage>
  );
}

export default Canvas;
