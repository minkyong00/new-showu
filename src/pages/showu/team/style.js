import styled from 'styled-components';

const S = {};

  S.Hr = styled.hr`
    border: 1px solid #444444;
  `

  S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#000; 
    min-height: 100vh;

    & p{
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 50px;
      color: #ffd400;
    }
  `

  S.LessonWrapper = styled.div`
    display: flex;
    gap: 30px;
   
  `

  S.MoreLesson = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    & svg.down {
      margin-bottom: 30px;

      & path {
        color: #ffd400;
      }
    }
  `

  S.LessonBox = styled.div`
    width: 290px;
    height: 400px;
    border: 1px solid #444444;
    border-radius: 10px;
    padding: 33px 27px;

    position: relative;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 20px;
    }
  `

  S.category = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;

    & .category {
      width: 50px;
      background-color: #ffd400;
      color: #000;
      padding: 5px;
      border-radius: 20px;
      text-align: center;
    }

    & .total {
      width: 70px;
      background-color: #797979;
      color: #fff;
      padding: 5px;
      border-radius: 20px;
      text-align: center;
    }
  `

  S.UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 20px;

    & .teamName {
      font-weight: 500;
      font-size: 18px;
    }

    & .category {
      font-size: 16px;
    }
  `

  S.Address = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
  `

  S.LessonExplantion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    position: relative;

    & .lessonName {
      color: #797979;
    }

    & .lessonDetail {
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        color: #ffd400;
      }
    }
  `

  S.Period = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;

    position: absolute;
    bottom: 27px;
  `

  S.Career = styled.div`
    display : flex;
    align-items: center;
    gap: 5px;

    position: absolute;
    top: 125px;
  `

  S.TeamCreateButton = styled.div`
    & div{
      cursor: pointer;
    }
  `

export default S;