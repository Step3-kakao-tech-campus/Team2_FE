import { CSSProperties } from 'react';
export const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%', // 원하는 너비를 설정하세요
      height: '50%', // 원하는 높이를 설정하세요
        display: 'flex',
        flexDirection: 'column' as CSSProperties['flexDirection'],
        justifyContent: 'center',
        alignItems: 'center',
    },
  };