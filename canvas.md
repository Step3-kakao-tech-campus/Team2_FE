## tldraw데이터 설명
> 기본적으론 TDShape type을 이용   
> 
> 이미지가 처음올라갈때 TDAsset을 이용
### TDShape 형식
```
{
    "id": "76e5b053-a67c-4698-2442-aa6811707bdd",
    "type": "text",
    "name": "Text",
    "parentId": "page",
    "childIndex": 1,
    "point": [
        248.09,
        261.19
    ],
    "rotation": 0,
    "text": "햐하하ㅏㅎ\n ",
    "style": {
        "color": "black",
        "size": "small",
        "isFilled": false,
        "dash": "draw",
        "scale": 1,
        "font": "script",
        "textAlign": "middle"
    }
}
```
- type으로 이 데이터가 어떤 종류인지 구분
- type에는 text, image, rectangle 등등이 있음.


### TDAsset 형식
```
{
    "id": "d201084f-7b23-45c5-200f-cfc640909b43",
    "type": "image",
    "name": "스크린샷 2023-09-23 오후 3.44.46.png",
    "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAACuCAYAAABuksFvAAAMP2lDQ1BJQ0MgUHDWT1XxREiABEiABEiABEiABEiABEiAGjymx688CcO5ClHiFNzzdJXQL1bqh+YtbwKkzynO8lOvcVIPt37zZz7rzd7Fy7JvITOhh64YdNzxNPKrilFSClOGB1w5y7bjc7Vq0qCEOfQKEz9qrJqVeDaGWFDkeO9X4gBQqQwLvIMwu+ggggAACCCCAAAIIxCrw/+8V0GWklT0TAAAAAElFTkSuQmCC",
    "size": [
        500,
        54.375
    ]
}
```