import React, { useState, useEffect } from 'react';
import './titlehold.scss';
import Select from 'react-select';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/user';
import { titleSearchApi, useChangeTitle } from '../../../service/titles';
import { useQuery } from 'react-query';

interface TitleHoldCardProps {
    image1: string;
    image2: string | undefined;
    title: string | undefined;
    description: string | undefined;
    titleName: string | undefined;
}

interface Option {
    value: string | undefined;
    label: string | undefined;
    id: Number;
}

const options = [
    //이 부분을 나중에 api 요청으로 대체
    { value: '불멸의 철갑궁', label: '불멸의 철갑궁' },
    { value: '신성한 파괴자', label: '신성한 파괴자' },
];

export const getImage = (image: string | undefined) => {
    if (image === 'LEVEL_BRONZE') return '/assets/badge_bronze.png';
    if (image === 'LEVEL_SILVER') return '/assets/badge_silver.png';
    if (image === 'LEVEL_GOLD') return '/assets/badge_gold.png';
    return '/assets/badge_star.png';
};

const TitleHoldCard: React.FC<TitleHoldCardProps> = ({
    image1,
    image2,
    title,
    description,
    titleName,
}) => {
    const [user, setUser] = useRecoilState(userState);
    const [options, setOptions] = useState<Option[]>([]);

    const userId = user?.id ? Number(user?.id) : 0;
    const { mutate: changeTitle } = useChangeTitle();

    const { isLoading, isError, data, error } = useQuery(
        ['userTitles', userId],
        titleSearchApi.getUserTitles,
    );

    const handleTitleChange = (selectedOption: any) => {
        changeTitle({ userId, titleId: selectedOption.id });
        alert('변경이 완료되었습니다.');
    };

    useEffect(() => {
        if (data?.titles) {
            const newOptions = data.titles.map(title => ({
                value: title.titleName,
                label: title.titleName,
                id: title.titleId,
            }));
            setOptions(newOptions);
        }
    }, [data]);

    return (
        <div className="titlehold_card">
            <img className="titlehold_card_image" src={image1} alt="이미지 1" />
            <div className="titlehold_card_title">
                <div className="titlehold_card_title_line">
                    <h3>{title}</h3>
                    <Select
                        options={options}
                        isSearchable={false}
                        placeholder="칭호 목록"
                        className="titlehold_card_title_select"
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="titlehold_card_description">
                    <img
                        className="titlehold_card_image2"
                        src={image2}
                        alt="이미지 2"
                    />
                    <h4>{titleName}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TitleHoldCard;
