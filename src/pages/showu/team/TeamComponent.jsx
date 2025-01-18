import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faChevronDown, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import Paging from '../../mypage/_component/Paging';

const TeamComponent = ({ navigate, filteredProducts, page, setPage, totalPost, PAGINATION }) => {
  
  return (
      <div>
        <S.LessonWrapper>
          {filteredProducts.map((team, i) => (
            <S.LessonBox key={i}>
              <ul>
                <S.UserInfo>  
                  <img src={`http://localhost:8000${team.teamProfile}`} alt="team profile"></img>
                  <div>
                    <li className='teamName'>{team.teamName}</li>
                    <li className='category'>{team.category}</li>
                  </div>
                </S.UserInfo>

                <S.Hr />

                <S.category>
                  <li className='total'>{team.userName.role}</li>
                  <li className='category'>{team.category}</li>
                </S.category>

                <S.LessonExplantion>
                  <li className='lessonDetail'
                    onClick={() => navigate(`/showu/team/detail/${team._id}`)}
                  >{team.teamIntro}</li>
                  <S.Career>
                    <FontAwesomeIcon icon={faThumbtack} />
                    <li className='lessonName'>{team.careerHistory}</li>
                  </S.Career>
                </S.LessonExplantion>
                <S.Period>
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <li>{team.activityPeriodStart}</li>
                </S.Period>
              </ul>
            </S.LessonBox>
          ))}
        </S.LessonWrapper>

        <Paging 
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
        />
      </div>
  );
};

export default TeamComponent;