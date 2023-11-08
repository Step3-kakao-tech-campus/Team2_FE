import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import albumApi, { CanvasResponse } from '../../service/album';
// import { useQuery } from 'react-query';
import StatusLayOut from '../../common/templates/StatusLayOut';
import CanvasEditContainer from './editContainer';
import ErrorPage from '../Common/Error';
import album from '../../service/album';
import { useQuery } from 'react-query';
import { canvasExample2 } from '../../mocks/data/album';
import { TDAsset, TDBinding, TDShape } from '@tldraw/tldraw';
import { useRecoilState } from 'recoil';

type HttpStatus = 'loading' | 'error' | 'success';
const CanvasEditPage = () => {
    const { pageId, albumId } = useParams();
    const { shapes, bindings, assets } = canvasExample2;

    const data = {
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

    // const { isLoading, isError, data, error } = useQuery({
    //     queryKey: ['albumPage', pageId, albumId],
    //     queryFn: () => albumApi.getAlbumPageById({ pageId, albumId }),
    // });

    return (
        <CanvasEditContainer
            pageId={pageId as string}
            albumId={albumId as string}
            data={data as CanvasResponse}
        />
        // <StatusLayOut isLoading={isLoading} isError={isError} error={error}>
        //
        // </StatusLayOut>
    );
};

export default CanvasEditPage;
