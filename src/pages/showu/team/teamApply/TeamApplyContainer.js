import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TeamApplyContainer = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <p className='newTeam'>팀 지원하기</p>
      <S.MoreLesson>
          <FontAwesomeIcon icon={faChevronDown} className="down" />
      </S.MoreLesson>

      <S.FormContainer>
        <S.Fieldset>
          <S.Form>

            <div>
              <S.Label htmlFor='teamName'>
                <p>팀 이름</p>
                <span
                  id='teamName'
                >
                  팀이름
                </span>
              </S.Label>
            </div>

            <div>
              <S.LabelTextAarea htmlFor='intro'>
                <p>자기 소개</p>
                <textarea  
                  name='intro'
                  id='intro'
                  placeholder='상세 소개를 입력해주세요'
                />
              </S.LabelTextAarea>
            </div>

            <div>
              <S.Label htmlFor='career'>
                <p>경력</p>
                <span
                  id='career'
                >신입</span>
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

export default TeamApplyContainer;