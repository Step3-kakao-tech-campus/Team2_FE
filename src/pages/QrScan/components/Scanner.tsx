import { Html5Qrcode } from 'html5-qrcode';
import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface ScannerProps {
    setScanData: Dispatch<SetStateAction<String | null>>;
}

const Scanner = ({ setScanData }: ScannerProps) => {
    const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };

    let html5QrCode: Html5Qrcode;

    useEffect(() => {
        html5QrCode = new Html5Qrcode('reader', false);
        return () => {
            handleStop();
        };
    }, []);

    const handleClickAdvanced = () => {
        const qrCodeSuccessCallback = (decodedText: String) => {
            console.log(decodedText);
            setScanData(decodedText);
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
            <div id="reader" style={{ width: '100%' }} />
            <button onClick={() => handleClickAdvanced()}>click</button>
            <button onClick={() => handleStop()}>stop pro</button>
        </div>
    );
};

export default Scanner;
