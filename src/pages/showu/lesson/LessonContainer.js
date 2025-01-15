import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

const LessonContainer = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const getLesson = async () => {
      try {
        const response = await fetch(`http://localhost:8000/showu/lesson/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await response.json();
        if (!res.mainLessonSuccess) {
          console.log(res.message);
        } else {
          setLessons(res.LessonList); 
        }
      } catch (error) {
        console.error("main getLesson error", error);
      }
    };

    getLesson();
  }, []); 

  console.log("lessons", lessons)

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true, 
    })
  }, [])

  return (
    <S.Wrapper>
      <p>레슨</p>
      <S.MoreLesson>
        <Link to={"/showu/lesson"} className='more'>더보기</Link>
        <span>&gt;</span>
      </S.MoreLesson>
      <S.LessonWrapper>
        {lessons.map((lesson, i) => (
          <S.LessonBox key={i} data-aos="fade-up">
            <ul>
              <S.category>
                {/* <li className='total'>{lesson.userInfo.total}</li> */}
                {/* <li className='category'>{lesson.category}</li> */}
              </S.category>
              <S.UserInfo>
                <img src="#"></img>
                <div>
                  {/* <li className='userName'>{lesson.userName.name}</li> */}
                  <S.Address>
                    <FontAwesomeIcon icon={faLocationDot} />
                    {/* <li className='address'>{lesson.lessonAddressDetail}</li> */}
                  </S.Address>
                </div>
              </S.UserInfo>
              <S.LessonExplantion>
                {/* <li className='lessonName'>{lesson.lessonName}</li>
                <li className='lessonDetail'>{lesson.lessonDetail}</li> */}
              </S.LessonExplantion>
            </ul>
          </S.LessonBox>
        ))}
      </S.LessonWrapper>
    </S.Wrapper>
  );
};

export default LessonContainer;
