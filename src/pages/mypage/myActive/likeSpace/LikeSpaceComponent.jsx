import React from 'react';
import S from './LikeSpaceStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Paging from '../../_component/Paging';

const LikeSpaceComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  return (
    <div>
      <S.Container className='container'>
      { currentList && currentList.map((item, i) => (
        <S.Warpper key={i} className='warpper'>
          <S.Image className='image'>
            <img src={item.img} alt="공간대여" />
          </S.Image>
          <S.Content className='content'>
            <S.Title className='title'>
              <p className='spaceName'>{item.name}</p>
              <div className='heartBox'>
                <FontAwesomeIcon icon={faHeart} className='heart'/>
              </div>
            </S.Title>
            <p className='type'>{item.type}</p>
            <p className='area'>{item.location}</p>
            <p className='price'>{item.price}</p>
          </S.Content>
        </S.Warpper>
      ))}
      <Paging 
        page={page}
        setPage={setPage}
        totalPost={totalPost}
        btnRange={PAGINATION.btnRange}
        pageRange={PAGINATION.pageRange}
      />
    </S.Container>
    </div>
  );
};

export default LikeSpaceComponent;