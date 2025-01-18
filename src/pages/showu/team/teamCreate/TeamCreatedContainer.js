import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TeamCreatedContainer = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <p className='newTeam'>새 팀 개설</p>
      <S.MoreLesson>
          <FontAwesomeIcon icon={faChevronDown} className="down" />
      </S.MoreLesson>

      <S.FormContainer>
        <S.Fieldset>
          <S.Form>

            <div>
              <S.Label htmlFor='teamName'>
                <p>팀 이름</p>
                <input 
                  type='text'
                  name='teamName'
                  id='teamName'
                  placeholder='팀 이름을 입력하세요'
                />
              </S.Label>
            </div>

            <div>
              <S.Label htmlFor='startDate'>
                <p>팀 활동 시작일</p>
                <input 
                  type='date'
                  name='startDate'
                  id='startDate'
                 />
              </S.Label>
            </div>

            <div>
              <S.Label htmlFor='endDate'>
                <p>팀 공고 마감일</p>
                <input 
                  type='date'
                  name='endDate'  
                  id='endDate'  
                />
              </S.Label>
            </div>

            <div>
              <S.Label htmlFor='title'>
                <p>한줄 소개</p>
                <input 
                  type='text'
                  name='title'
                  id='title'
                  placeholder='한줄 소개를 입력해주세요'
                />
              </S.Label>
            </div>

            <div>
              <S.LabelTextAarea htmlFor='intro'>
                <p>상세 소개</p>
                <textarea  
                  name='intro'
                  id='intro'
                  placeholder='상세 소개를 입력해주세요'
                />
              </S.LabelTextAarea>
            </div>

            <div>
              <S.Label htmlFor='area'>
                <p>지역</p>
                <input 
                  type='text'
                  name='area'
                  id='area'
                  placeholder='ex)서울시, 중랑구'
                />
              </S.Label>
            </div>

            <div>
              <S.Label htmlFor='category'>
                <p>분야</p>
                <input 
                  type='text'
                  name='category'  
                  id='category'
                  placeholder='연기, 음악, 마술 중 선택하여 작성해주세요' 
                />
              </S.Label>
            </div>

            <div>
              <S.Label htmlFor='recruit'>
                <p>모집 인원</p>
                <input 
                  type='text'
                  name='recruit'
                  id='recruit'
                  placeholder='모집 인원수를 입력해주세요 ex)1'
                />
              </S.Label>
            </div>

            <div>
              <S.Label htmlFor='careerHistory'>
                <p>경력</p>
                <input 
                  type='text'
                  name='careerHistory'  
                  id='careerHistory'
                  placeholder='경력무관, 신입, 경력 중 선택하여 작성해주세요'
                />
              </S.Label>
            </div>

            <S.Portfolio>
              <S.Label htmlFor='portfilo'>
                <p>포트폴리오</p>
                <input 
                  type='file'
                  name='portfilo'
                  id='portfilo'
                />
              </S.Label>
            </S.Portfolio>

            <S.Button
              className='submit'
            >
              작성 완료
            </S.Button>

          </S.Form>

          <S.Button 
            onClick={() => navigate(-1)}
            className='back'
          >이전으로</S.Button>

        </S.Fieldset>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default TeamCreatedContainer;