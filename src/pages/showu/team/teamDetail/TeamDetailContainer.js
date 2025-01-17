import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHeart } from '@fortawesome/free-solid-svg-icons';

const TeamDetailContainer = () => {
  return (
    <div>
      <S.Wrapper>
        {/* 배너 */}
        <S.Banner>
          <img
            src='/images/showu/team/teamBanner.png'
            className='banner'
          ></img>
          <img
            src='/images/showu/team/teamProfilo.png'
            className='profilo'
          ></img>
        </S.Banner>
      </S.Wrapper>

        <S.SectoinWarpper>
          <S.RightSection>
          {/* 팀 매칭 제목, 찜, 지원 버튼 */}
            <S.Title>
              <p className='title'>team title!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
              <S.AllButton>
                <S.FileDown>
                <FontAwesomeIcon icon={faDownload} className='download'/>
                </S.FileDown>
                <S.Heart>
                  <FontAwesomeIcon icon={faHeart} className='heart' />
                </S.Heart>
                <S.Apply>
                  <p>지원</p>
                </S.Apply>
              </S.AllButton>
            </S.Title>

            <S.hr />

            {/* 모집 유형 */}
            <S.JobContent>
              <p>모집 유형</p>
              <div>
                <div>
                  <S.Row className='row'>
                    <span>분야</span>
                    <div className='col'>
                      <span>음악</span>
                    </div>
                  </S.Row>
                  <S.Row className='row'>
                    <span>경력</span>
                    <div className='col'>
                      <span>경력무관</span>
                    </div>
                  </S.Row>
                  <S.Row className='row'>
                    <span>모집인원</span>
                    <div className='col'>
                      <span>1</span>
                    </div>
                  </S.Row>
                </div>
              </div>
            </S.JobContent>

            <S.hr />

            {/* 팀매칭 내용 */}
            <S.Content>
              <p className='content'>내용</p>
              <p className='intro'>teamIntro</p>
            </S.Content>
            <S.hr />
          </S.RightSection>

          {/* 팀 소개 */}
          <S.LeftSection>
            <p>팀 소개</p>
            <S.TeamIntro>
              <img 
                src='/images/showu/team/teamProfilo.png'
                className='profilo'
              >
              </img>
              <div>
                <p>team name</p>
                <p>음악</p>
              </div>
            </S.TeamIntro>
            <S.LeftContent>
              <div>
                <p>소개</p>
                <p>team title</p>
              </div>
              <div>
                <p>위치</p>
                <p>서울, 중랑구</p>
              </div>
              <div>
                <p>설립일</p>
                <p>2025-01-15</p>
              </div>
            </S.LeftContent>
          </S.LeftSection>

        </S.SectoinWarpper>

    </div>
  );
};

export default TeamDetailContainer;