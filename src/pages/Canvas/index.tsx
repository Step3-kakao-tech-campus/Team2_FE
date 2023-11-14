import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import albumApi, { CanvasResponse } from '../../service/album';
import StatusLayOut from '../../common/templates/StatusLayOut';
import CanvasEditContainer from './editContainer';
import ErrorPage from '../Common/Error';
import album from '../../service/album';
import { useQuery } from 'react-query';
import { canvasExample3 } from '../../mocks/data/album';
import { TDAsset, TDBinding, TDShape } from '@tldraw/tldraw';
import { useRecoilState } from 'recoil';
import Album from '../../service/album';
import { userApi } from '../../service/user';

type HttpStatus = 'loading' | 'error' | 'success';
const CanvasEditPage = () => {
    const { pageId, albumId } = useParams();
    // const { isLoading, isError, data, error } = useQuery({
    //     queryKey: ['albumCanvasPage', pageId],
    //     queryFn: () => albumApi.getAlbumCanvasById(albumId!, pageId!),
    //     enabled: !!pageId && !!albumId,
    // });
    const { shapes, bindings, assets } = canvasExample3;

    const myData = {
        shapes: shapes as Record<string, TDShape | undefined>,
        bindings: bindings as Record<string, TDBinding | undefined>,
        assets: assets as Record<string, TDAsset | undefined>,
    };
    // const navigate = useNavigate();
    //
    if (pageId === undefined || albumId === undefined) {
        return <ErrorPage />;
    }
    //

    return (
        <CanvasEditContainer
            pageId={pageId as string}
            albumId={albumId as string}
            data={myData as CanvasResponse}
        />
        // <StatusLayOut isLoading={isLoading} isError={isError} error={error}>
        //
        // </StatusLayOut>
    );
};

export default CanvasEditPage;
