import { Html5Qrcode } from 'html5-qrcode';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface ScannerProps {
    setScanData: Dispatch<SetStateAction<string | null>>;
}

const Scanner = ({ setScanData }: ScannerProps) => {
    const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };
    const [error, setError] = useState(null);
    let firstTime = true;

    let html5QrCode: Html5Qrcode;

    useEffect(() => {
        if (firstTime) {
            firstTime = false;
            html5QrCode = new Html5Qrcode('reader', false);
            handleClickAdvanced();
        }
        return () => {
            handleStop();
        };
    }, []);

    const handleClickAdvanced = () => {
        const qrCodeSuccessCallback = (decodedText: string) => {
            console.log(decodedText);
            setScanData(
                'https://pbs.twimg.com/media/FM99gV8VEAAblLM?format=jpg&name=large',
            );
            handleStop();
        };
        html5QrCode.start(
            { facingMode: 'environment' },
            qrConfig,
            qrCodeSuccessCallback,
            undefined,
        );
    };

    const handleStop = () => {
        try {
            html5QrCode
                .stop()
                .then(() => {
                    html5QrCode.clear();
                })
                .catch(err => {
                    console.log(err.message);
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    position: 'absolute',
                    top: '70px',
                    left: '160px',
                    zIndex: 100,
                }}
            >
                loading
            </div>
            <div id="reader" style={{ width: '100%', zIndex: 200 }} />
            {error && <div> {error} </div>}
        </div>
    );
};

export default Scanner;
//
