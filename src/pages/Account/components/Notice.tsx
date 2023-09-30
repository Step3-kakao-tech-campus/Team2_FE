import React from 'react';

interface NoticeProps {
    onNoticeClick: () => void;
    onInfoClick: () => void;
}

const Notice: React.FC<NoticeProps> = ({ onNoticeClick, onInfoClick }) => {
    return (
        <div>
            <h3>공지사항</h3>
            <h3>고객센터</h3>
        </div>
    );
};

export default Notice;
