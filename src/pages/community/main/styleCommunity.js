// Community main style

import styled  from "styled-components";
import { backgroundBlack } from "../../../global/common";

const S = {};

    S.TopTitle = styled.div` // 상단 News title
        font-size: 30px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding-top: 30px;
    `

    S.FilterButton = styled.div`
        display: flex;
        align-items: center;
        background-color: #000;
        padding: 10px 15px;
        color: #ffd400;
        cursor: pointer;
        font-size: 16px;
        border: 0.5px solid #fff;
        border-radius: 5px;
        width: 140px;

        .icon {
            margin-left: 10px;
            font-size: 16px;   
            :hover {
            color: #ffd400;
        } 
        }
        :hover {
            color: #ffd400;
        }

    `;

    S.FilterDropdown = styled.div`
        position: absolute;
        background-color: #000;
        color: #797979;
        border: 0.5px solid #fff;
        border-radius: 5px;
        width: 140px;
        padding: 10px 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        div {
            padding: 8px 15px;
            cursor: pointer;
        &:hover {
            color: #ffd400;
        }
    }
`;

    S.Wrapper = styled.div` // 전체 배경 gray
        background-color: #444444;      
    `

    S.SubWrapper = styled.div`
        ${backgroundBlack}
        margin-left: 140px;
        margin-right: 140px;
    `

    S.IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        height: 100%;
        padding-bottom: 50px;

        .icon{
            font-size: 20px;

        path {
            color : #ffd400;
        }
    }
    `

    S.Buttons = styled.div`
        padding-top: 50px;
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 40px;
        margin-bottom: 80px;

        

        button {
            border-radius: 50px;
            padding: 10px 15px;
            background-color: black;
            color: ${({ theme }) => theme.PALLETE.white};
            border: 1px solid #ffd400;
            cursor: pointer;

            &:hover { // 버튼 호버
                background-color: #ffd400;
                color: ${({ theme }) => theme.PALLETE.black};
            }
            
        }
    `;

    S.hoverButton = styled.button`
        background-color: #ffd400;
        color: #000;
    `;

    S.Info = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        justify-items: center;
        margin-top: 20px;
        padding-left: 250px;
        padding-right: 250px;
    `;

    S.Img = styled.div`
        max-width: 300px;
        width: 100%;
        height: 250px; 
        margin-bottom: 100px;
        padding: auto;
        flex-shrink: 0; 
        text-align: left;
        cursor: pointer;
        justify-content: center;
        

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

            &:hover img {
                transform: scale(1.1); 
            }

        h3 {
            margin-top: 5px;
            font-size: 20px;
            color: #fff;
        }

        p {
            font-size: 15px;
            color: #fff;
        } 
    `;



export default S;

