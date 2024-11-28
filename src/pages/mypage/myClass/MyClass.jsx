import React from 'react';
import Lesson from './Lesson';
import S from './style';

const MyClass = () => {
  return (
    <S.Container className='container'>
      <S.Wapper className='wapper'>
        <S.Title className='title'>
          <p>MY CLASS</p>
          <S.SubTitle className='subTitle'>
            <ul>
              <li>수강중인 레슨</li>
              <li>개설한 레슨</li>
              <li>상담 신청 내역</li>
            </ul>
          </S.SubTitle>
        </S.Title>
        <Lesson />
      </S.Wapper>
    </S.Container>
  );
};

export default MyClass;