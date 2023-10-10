import { useState } from 'react';
import Scanner from './components/Scanner';

const ScannerPage = () => {
    const [scanData, setScanData] = useState<String | null>(null);
    return (
        <div>
            <div style={{ width: '300px', margin: '0 auto' }}>
                <Scanner setScanData={setScanData} />
            </div>
            {scanData && (
                <div style={{ display: 'inline-block', margin: '0 auto' }}>
                    {scanData}
                </div>
            )}
        </div>
    );
};
export default ScannerPage;
