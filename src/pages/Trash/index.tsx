import { useParams } from 'react-router-dom';

import albumApi from '../../service/album';
import { useMutation, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/user';
import AlbumInfomation from './components/AlbumInfomation';
import './index.scss';
import { useState } from 'react';

interface TrashPageInfo {
    trashId: number;
    image: string;
    deleter: string;
    createAt: string;
    deleteAt: string;
}

const TrashPage = () => {
    let { albumId } = useParams();
    const userId = '1';
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['albumGroup', userId],
        queryFn: albumApi.getAlbumInfo,
    });
    const {
        isLoading: loading,
        isError: err,
        data: trashData,
        error: Error,
    } = useQuery({
        queryKey: ['albumTrash', albumId],
        queryFn: () => albumApi.getAlbumTrash(albumId),
    });

    const [selectedPages, setSelectedPages] = useState(new Set());

    const togglePageSelection = (pageId: Number) => {
        setSelectedPages(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(pageId)) {
                newSelected.delete(pageId);
            } else {
                newSelected.add(pageId);
            }
            return newSelected;
        });
    };

    const selectAllPages = () => {
        setSelectedPages(new Set(trashData?.pages.map(page => page.trashId)));
    };

    const deselectAllPages = () => {
        setSelectedPages(new Set());
    };

    const restoreMutation = useMutation(
        (trashId: Number) => albumApi.restoreTrashPage(albumId, trashId),
        {
            onSuccess: () => {
                console.log('복구 성공');
                // 필요한 경우 추가적인 상태 업데이트나 UI 반영
            },
            onError: (error: any) => {
                console.error('복구 실패', error);
            },
        },
    );

    const handleRestoreClick = () => {
        selectedPages.forEach(trashId => {
            restoreMutation.mutate(trashId as Number);
        });
    };

    return (
        <div>
            <AlbumInfomation
                albumImage={data?.image}
                albumName={data?.name}
                albumDescription={data?.description}
                albumMembers={data?.members}
            />
            <div className="trash-name">휴지통</div>
            <div>
                <div className="trash-list-header">
                    <div className="buttons-container">
                        <div className="left-buttons">
                            <button onClick={selectAllPages}>전체 선택</button>
                            <button onClick={deselectAllPages}>
                                선택 해제
                            </button>
                        </div>
                        <div className="right-buttons">
                            <button onClick={handleRestoreClick}>복구</button>
                        </div>
                    </div>
                </div>
                <div className="trash-list">
                    {trashData?.pages.map(page => (
                        <div key={page.trashId} className="trash-item">
                            <img
                                src={page.image}
                                alt={`Page ${page.trashId}`}
                            />
                            <div className="page-info">
                                <p>삭제자: {page.deleter}</p>
                                <p>생성 날짜: {page.createAt}</p>
                                <p>삭제 날짜: {page.deleteAt}</p>
                                <button
                                    onClick={() =>
                                        togglePageSelection(page.trashId)
                                    }
                                >
                                    {selectedPages.has(page.trashId)
                                        ? '선택 해제'
                                        : '선택'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrashPage;
