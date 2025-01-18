import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faChevronDown, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import S from './style';

const TeamContainer = () => {
  const [ teams, setTeams ] = useState([]);
  const [filter, setFilter] = useState("전체");


  useEffect(() => {
    const getTeamList = async () => {
      try {
        const response = await fetch(`http://localhost:8000/showu/team/`, {
          method : "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const res = await response.json();
        if (!res.mainTeamSuccess) {
          console.log(res.message);
        } else {
          setTeams(res.teamList); 
        }
      } catch (error) {
        console.error("main getTeamList error", error);
      }
    }

    getTeamList();

  }, [])

  //category 필터링
  const filterTeams = Array.isArray(teams)
    ? filter === "전체"
      ? teams
      : teams.filter((team) => team.portfilo.field === filter)
    : [];

  const navigate = useNavigate();

  // console.log("teams", teams)

  return (
    <div>
      <S.Wrapper>
        <p>팀 매칭</p>
          <S.MoreLesson>
            <FontAwesomeIcon icon={faChevronDown} className="down" />
          </S.MoreLesson>
          {/* 팀 개설 버튼 */}
          <S.TeamCreateButton>
            <div onClick={() => navigate("/showu/team/create")}>팀 개설하기</div>
          </S.TeamCreateButton>
            <S.LessonWrapper>
              {teams.map((team, i) => (
                <S.LessonBox key={i}>
                  <ul>
                    <S.UserInfo>
                      <img src={team.teamProfilo}></img>
                      <div>
                        <li className='teamName'>{team.teamName}</li>
                        <li className='category'>{team.portfilo.field}</li>
                      </div>
                    </S.UserInfo>
                    <S.Hr />
                    <S.category>
                      <li className='total'>{team.userName.role}</li>
                      <li className='category'>{team.portfilo.field}</li>
                    </S.category>
                    <S.LessonExplantion>
                      <li className='lessonDetail'
                        onClick={() => navigate(`/showu/team/detail/${team._id}`)}
                      >{team.teamIntro}</li>
                      <S.Career>
                        <FontAwesomeIcon icon={faThumbtack} />
                        <li className='lessonName'>{team.portfilo.total}</li>
                      </S.Career>
                    </S.LessonExplantion>
                    <S.Period>
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <li>{team.activityPeriod.start} - {team.activityPeriod.end}</li>
                    </S.Period>
                  </ul>
                </S.LessonBox>
              ))}
            </S.LessonWrapper>
      </S.Wrapper>
    </div>
  );
};

export default TeamContainer;