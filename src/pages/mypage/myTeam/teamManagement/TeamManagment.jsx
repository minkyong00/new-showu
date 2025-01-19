import React, { useEffect, useState } from 'react';
import S from './styleTeamManagment';
import { useNavigate } from 'react-router-dom';
import ManagmentModal from './_component/ManagmentModal';

const TeamManagment = () => {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwtToken");
  const [ managment, setManagment ] = useState([]);
  const [selectedTeamManagment, setSelectedTeamManagment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getTeamManagment = async () => {
      try {
        await fetch(`http://localhost:8000/my/showu/managment`, {
          method : "GET",
          headers : {
            Authorization: `Bearer ${jwtToken}`
          }
        })
          .then((res) => res.json())
          .then((res) => {
            if(!res.teamManagmentSuccess){
              console.log(res.message)
            }
            console.log(res.message)
            setManagment(res.managmentList)
            console.log(res.managmentList)
          })
      } catch (error) {
        console.error("팀원 관리 내역 불러오는 중 오류 발생", error)
      }
    }

    getTeamManagment();

  }, [jwtToken])

  const closeModal = () => {
    setShowModal(false);
    setSelectedTeamManagment(null);
  }

  const handleRowClick = async (applyId, e) => {
    if(e.target.tegName !== 'BUTTON'){
      try {
        const response = await fetch(`http://localhost:8000/my/showu/managment/${applyId}`, {
          method : 'GET',
          headers : {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json();
        setSelectedTeamManagment(data);
        setShowModal(true)
      } catch (error) {
        console.error("에러 발생: ", error)
      }
    }
  }

  console.log("selectedTeamManagment", selectedTeamManagment)

  return (
    <div>
      <S.Container>
          <S.Table>
            <S.Thead>
              <S.Tr>
                <th scope="col">전문가 성함</th>
                {/* <th scope="col">전문분야</th> */}
                <th scope="col">경력사항</th>
                {/* <th scope="col">회원 등급</th> */}
                {/* <th scope="col">등급 상태</th> */}
                <th scope="col">관리</th>
              </S.Tr>
            </S.Thead>
            <S.Tbody>
              {managment.map((item) => (
                <S.RowTr
                  key={item._id}
                  onClick={(e) => handleRowClick(item._id, e)}  // 행 클릭 시 모달 열기
                >
                  <th scope="row" className="num">{item.teamName}</th>
                  {/* <td>{item.field}</td> */}
                  <td>{item.career}</td>
                  {/* <td>{item.exportName.role}</td>
                  <td>{item.exportName.upgradeRequestStatus}</td> */}
                  <td>
                    <S.RoleChangeButtonWrapper>
                      <button
                        className='exportButton'
                        onClick={(e) => {
                          e.stopPropagation(); // 클릭 이벤트가 부모 요소로 전달되지 않도록 함
                          // handleUserRoleChange(item.exportName._id, '승인');
                        }}
                      >
                        승인
                      </button>
                      <button
                        className='rejectButton'
                        onClick={(e) => {
                          e.stopPropagation();
                          // handleUserRoleChange(item.exportName._id, '거절');
                        }}
                      >
                        거절
                      </button>
                    </S.RoleChangeButtonWrapper>
                  </td>
                </S.RowTr>
              ))}
            </S.Tbody>
          </S.Table>
        </S.Container>

        {/* 모달창 */}
        <ManagmentModal 
          showModal={showModal}
          selectedTeamManagment={selectedTeamManagment}
          closeModal={closeModal}
        />
    </div>
  );
};

export default TeamManagment;