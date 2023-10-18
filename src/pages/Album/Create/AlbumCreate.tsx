// src/AlbumCreationPage.tsx

import React, { useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
import "./AlbumCreate.scss";
import { customStyles } from './modalStyle';

const AlbumCreationPage: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [groupName, setGroupName] = useState<string>('');
  const [groupDescription, setGroupDescription] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState<string>('');
  
  const themeOptions = [
    { value: '연인', label: '연인' },
    { value: '가족', label: '가족' },
    { value: '친구', label: '친구' },
  ];

  const handleThemeChange = (selectedOption: any) => {
    setSelectedTheme(selectedOption);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedPhoto(reader.result as string);
        closeModal(); // 모달 닫기
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCreateGroup = () => {
    // Add logic to handle group creation (e.g., send data to server)
    if (selectedTheme === null)
      alert('그룹 주제 선택 필수');
    else if (groupName === '')
      alert('그룹 이름 선택 필수');
    else if (groupDescription === '')
      alert('그룹 설명 선택 필수');
    else if (uploadedPhoto === '')
      alert('대표 사진 선택 필수');
    else if (uploadedPhoto.length > 2000000)
      alert('사진은 2mb 미만으로 선택해주세요.');
    console.log('Creating group with data:', { selectedTheme, groupName, groupDescription, uploadedPhoto });
  };

  React.useEffect(() => {
    Modal.setAppElement('#root'); // 접근성 문제  해결
  }, []);

  return (
    <div className="group">
      <h1 className="group_title">포토 앨범 생성</h1>
      <div className="group_theme">
        <div className='group_theme_title'>
          그룹 주제
        </div>
      <Select className="group_theme_select" 
        options={themeOptions}
        value={selectedTheme}
        placeholder="연인"
        onChange={handleThemeChange}/>
      </div>
      
      <div className="group_name">
        <div className="group_name_title">
          그룹 이름
        </div>
        <input
          className="group_name_input"
          type="text"
          placeholder=" 그룹 이름을 입력하세요."
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>

      <div className="group_description">
        <div className="group_description_title">
          그룹 설명
        </div>
        <textarea
          className="group_description_input"
          placeholder="그룹 설명을 입력하세요."
          value={groupDescription}
          onChange={(e) => setGroupDescription(e.target.value)}
        />
      </div>
      <div className="group_photo">
      <div className="group_photo_title">
        대표 사진
      </div>
      <div className="group_photo_input">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Uploaded Thumbnail" />
        ) : (
          <button className="group_photo_button" 
            onClick={openModal}>+ <br/>사진 업로드</button>
        )}
        {uploadedPhoto && (
          <div>
          <button className="group_photo_button_change" onClick={openModal}>
            사진 변경
          </button>
          <button className='group_photo_button_remove' onClick={()=>{setUploadedPhoto('');}}>
            삭제
            </button>
            </div>
        )}
      </div>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Photo Upload Modal"
      style={customStyles}
    >
      <div className="group_photo_modal_title">대표 사진 등록</div>
      <div className="group_photo_modal_description">그룹만의 대표 사진을 설정<br/>할 수 있어요 !</div>
      <label htmlFor="fileInput" >
        <img className="group_photo_modal_image" src="/image_icon.png" alt="Upload" />
      </label>
      <input type="file" accept="image/*" 
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handlePhotoUpload}/>
      <button className="group_photo_modal_button" onClick={closeModal}>업로드</button>
     </Modal>
      </div>

      <div className="group_invitees">
        <div className="group_invitees_title">그룹원<br/>초대</div>
        <button className="group_invitees_button" 
          >링크 복사</button>
      </div>
      <button  className="group_button" onClick={handleCreateGroup}>그룹 생성</button>
    </div>
  );
};

export default AlbumCreationPage;
