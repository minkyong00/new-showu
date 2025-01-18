import React, { useEffect, useState } from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const TeamDetailContainer = () => {
  const [ teams, setTeams ] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getTeamDetails = async () => {
      try {
        await fetch(`http://localhost:8000/showu/team/detail/${id}`, {
          method : "GET",
          headers : {
            "Content-Type": "application/json",
          }
        })
          .then((res) => res.json())
          .then((res) => {
            if(!res.teamDetailSuccess){
              console.log(res.message)
            }
            setTeams(res.teamList)
            console.log(res.message)
            console.log(res.teamList)
          })
      } catch (error) {
        console.log("team detail Error", error)
      }
    }

    getTeamDetails();

  }, [])


  return (
    <div>
      { teams && teams.map((item, i) => (
        <div key={i}>
          <S.Wrapper>
            {/* 배너 */}
            <S.Banner>
              <img
                src='/images/showu/team/teamBanner.png'
                className='banner'
              ></img>
              <img
                src={item.teamProfilo}
                className='profilo'
              ></img>
            </S.Banner>
          </S.Wrapper>
          <S.SectoinWarpper>
            <S.RightSection>
            {/* 팀 매칭 제목, 찜, 지원 버튼 */}
              <S.Title>
                <p className='title'>{item.teamTitle}</p>
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
                        <span>{item.portfilo.field}</span>
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
                        <span>{item.recruit}</span>
                      </div>
                    </S.Row>
                  </div>
                </div>
              </S.JobContent>
              <S.hr />
              {/* 팀매칭 내용 */}
              <S.Content>
                <p className='content'>내용</p>
                <p className='intro'>{item.teamIntro}</p>
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
                  <p>{item.teamName}</p>
                  <p>{item.portfilo.field}</p>
                </div>
              </S.TeamIntro>
              <S.LeftContent>
                <div>
                  <p>소개</p>
                  <p>{item.teamTitle}</p>
                </div>
                <div>
                  <p>위치</p>
                  <p>서울, 중랑구</p>
                </div>
                <div>
                  <p>설립일</p>
                  <p>{item.activityPeriod.start}</p>
                </div>
              </S.LeftContent>
            </S.LeftSection>
          </S.SectoinWarpper>
        </div>
      ))
        }

    </div>
  );
};

export default TeamDetailContainer;