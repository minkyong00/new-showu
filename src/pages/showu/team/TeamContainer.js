import React, { useEffect, useState } from 'react';

const TeamContainer = () => {
  const [ teams, setTeams ] = useState([]);

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

  console.log("teams", teams)

  return (
    <div>
      {
        teams.map((item, i) => (
          <div key={i}>
            <ul>
              <li>{item.teamName}</li>
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default TeamContainer;