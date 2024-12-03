import styled from 'styled-components';

const S = {};

S.LessonDetailsWrapper = styled.div`
    margin: 0 auto;
    background-color: #000;

`
S.LessonDetailContentsWrapper = styled.div`
    width: 1200px;
    position: relative;
    margin:  0 auto;
    padding-left: 20px;
`


S.LessonDetailsTopBg = styled.div`
    background-color: #ccc;
    width: 100%;
    height: 150px;
`
S.LessonDetailsThunbnail = styled.img`
    display:block;
    position: absolute;
    top: -100px;
    background-color: #fff;
    border-radius: 20px;
    width: 150px;
    height: 150px;
`
S.LessonName = styled.h2`
    display: block;
    padding-top: 100px;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
`

S.LessonDetailsSummary = styled.div`
    margin-bottom: 100px;
`

S.LessonClassAndLocation = styled.p`
    display: flex;
    gap: 25px;
    font-size: 18px;
    font-weight:500;
    margin-bottom: 30px;
`
S.LessonSummary = styled.p`
    font-size: 18px;
    font-weight: 300;
`

S.LessonDetailsLink = styled.div`
    width:385px ;
    display: flex;
    gap: 20px;
    margin-bottom: 70px;
    a:hover  span{
        font-size: 18px;
        font-weight: 400;
        display: block;
        color: #ffd400;
        border-bottom: 1px solid #ffd400;
    }

`
S.Title = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
`

S.Infomation = styled.div`
    margin-bottom: 50px;

    p{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 15px;
        display: flex;
        gap: 10px;
    }

`



S.ServiceDetails =styled.div`
    position: relative;
    width: 640px;
    height: 215px;
    margin-bottom: 70px;

`

S.Details =styled.div`
   

    p{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 20px;
    }
`
S.MoreDetails = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    gap: 10px;
`
S.PersonalHistory = styled.div`
    width: 620px;
    height: 420px;
    position: relative;
    margin-bottom: 70px;

`
S.DayOfExperience = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #ffd400;
    margin-bottom: 20px;
`

S.PersonalHistoryTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 25px;
`
S.PersonalHistoryTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
`
S.PersonalHistoryPeriod = styled.div`
    display: flex;
    gap: 10px;
    font-size: 12px;
    font-weight: 400;
`

S.PersonalHistorySummary = styled.p`
    font-size: 14px;
    color: #5a5a5a;
`

S.Education = styled.div`
    margin-bottom: 120px;
`
S.EducationsDetailBox =styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
S.EducationDetailSpace = styled.p`
    font-size: 16px;
    font-weight: 400;
`
S.EducationDetailPeriod = styled.p`
    font-size: 12px;
    font-weight: 400;
`
S.EducationDetailSubjects = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #5a5a5a;
`
S.PortfolioWrapper =styled.div`
    width: 890px;
    display: flex;
    gap: 30px;
    margin-bottom: 120px;
`
S.Portfolio = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background-color: #333;
    padding-left: 15px;
    padding-top: 134px;
`

S.PortfolioTitle =styled.p`
    bottom: 50px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
`
S.LessonType = styled.span`
    font-size: 12px;
    font-weight: 400;
`

S.MediaWrapper = styled.div`
    width: 870px;
    height: 330px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 120px;
`
S.Media = styled.div`
    width: 150px;
    height: 150px;
    background-color: #333;
    text-align: center; 
    border-radius: 10px;
`

S.StudentReview = styled.div`
    width: 675px;
    position: relative;
    margin-bottom: 120px;
`
S.ReviewButton = styled.div`
    width: 80px;
    height: 30px;
    padding: 6px 14px;
    background-color: #ffd400;
    color: #000;
    font-size: 14px;
    font-weight: 700;
    border-radius: 50px;
    position: absolute;
    top: 30px;
    right: 0;
`

S.ReviewScoreWrapper = styled.div`
    width: 170px;
    height: 50px;
    display: flex;
    gap: 15px;
`
S.ReviewScore = styled.div`
    font-size: 40px;
    line-height: 40px;
    font-weight: 400;
`
S.ReviewScoreIconWrapper =styled.div`
`

S.ReviewScoreIcon = styled.p`
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
    .reviewStarIcon {
        font-size: 15px;
        path {
            color: #ffd400;
        }
    }

`
S.ReviewCount = styled.p`
    font-size: 13px;
    font-weight: 300;
    color: #5a5a5a;
`
S.ReviewWrapper = styled.div`
    margin-top: 50px;
    width: 100%;

`
S.ReviewerName = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
`
S.LessonTypeAndScore = styled.p`
    display: flex;
    gap: 10px;
    position: relative;
    width: 100%;
    height: 17px;
    margin-bottom: 15px;
`
S.LessonType = styled.span`
    font-size: 14px;
    font-weight: 500;

`
S.LessonScoreWrapper = styled.span`
    display: flex;
    gap: 5px;
    .reviewStarIcon {
        font-size: 15px;
        path {
            color: #ffd400;
        }
    }
`
S.LessonScore = styled.span`
    font-size: 14px;
    font-weight: 300;
`
S.UpdateAndDeleteButtonWrapper = styled.div`
    display: flex;
    width: 65px;
    height: 17px;
    position: absolute;
    right: 0;  
`
S.UpdateButton = styled.button`
    border: none;
    background-color: transparent;
    span {
        font-size: 12px;
        font-weight: 300;
        color: #5a5a5a;
    }
`

S.DeleteButton = styled.button`
    border: none;
    background-color: transparent;
    span {
        font-size: 12px;
        font-weight: 300;
        color: #5a5a5a;
    }
`

S.LessonReviewWrapper = styled.div`
    width: 100%;
    position: relative;
`
S.LessonReview = styled.div`
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
    margin-bottom: 30px;
`
S.MoreReview = styled.span`
    position: absolute;
    right: 7px;
    bottom: 0;
    font-size: 14px;
    font-weight: 300;
    display: none;
    &.active {
        display: block;
        color: #ffd400;
    }
`

S.ReviewWriteDate =styled.p`
    font-size: 14px;
    font-weight: 300;
    color: #5a5a5a;
    margin-bottom: 50px;
`
S.LessonQNA = styled.div`
    width: 670px;
    height: 120px;
    position: relative;
    margin-bottom: 65px;
    overflow: hidden;
    .active{
        height: 210px;
    }

`
S.LessonQuestion = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
`
S.LessonAnswer = styled.div`
    width: 625px;
    font-size: 16px;
    font-weight: 300;
    span {
        font-size: 14px;
        position: absolute;
        bottom: 0px;
        right: 0px;
    }
`




export default S; 