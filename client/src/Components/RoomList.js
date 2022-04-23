import Axios from 'axios'
import React, { useEffect, useState } from 'react'

function RoomList() {

  const [roomList, setRoomList] = useState([]);
  let cl;

  useEffect(() => {
      Axios.post('http://localhost:3001/roomList', {

      }).then(respsonse => {
        console.log(respsonse.data);
        cl = respsonse.data.map((item, index) => (<p>{item.roomname}</p>));
      });
  });

  const EnterRoom = () => {
    console.log("good");
  }

  return (
    <div>
      {cl}
    </div>
  )
}

export default RoomList