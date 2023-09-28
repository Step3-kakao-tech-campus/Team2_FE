import { LocalImage } from '../../common/atoms/image';
import React from 'react';
import { MainContainer, Container } from '../../common/atoms/Container';
import { AlbumCard } from './componenents/AlbumCard';
import WrapContainer from './componenents/WrapContainer';
const AlbumGroupPage = () => {
    return (
        <MainContainer>
            <LocalImage src="main_ carousel1.png" height="300px" />
            <WrapContainer>
                <AlbumCard
                    image="main_ carousel1.png"
                    groupId="1"
                    groupName="그룹이름ddd"
                    groupDescription="dffafdadfdsafdaf"
                />
                <AlbumCard
                    image="main_ carousel1.png"
                    groupId="1"
                    groupName="그룹이름ddd"
                    groupDescription="dffafdadfdsafdaf"
                />
                <AlbumCard
                    image="main_ carousel1.png"
                    groupId="1"
                    groupName="그룹이름ddd"
                    groupDescription="dffafdadfdsafdaf"
                />
                <AlbumCard
                    image="main_ carousel1.png"
                    groupId="1"
                    groupName="그룹이름ddd"
                    groupDescription="dffafdadfdsafdaf"
                />
                <AlbumCard
                    image="main_ carousel1.png"
                    groupId="1"
                    groupName="그룹이름ddd"
                    groupDescription="dffafdadfdsafdaf"
                />
            </WrapContainer>
        </MainContainer>
    );
};

export default AlbumGroupPage;
