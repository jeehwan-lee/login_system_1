import Axios from 'axios';
import React, { useState } from 'react'
import RoomList from './RoomList'

function Main() {

  const [roomName, setRoomName] = useState("");

  const createRoom = () => {

      if(roomName == "") {
        alert("Please Input the room name");

      } else {
          Axios.post('http://localhost:3001/createRoom', {
            roomname : roomName,
          }).then(response => {
            console.log(response);
          });
      }
  }

  return (
    <div>
      <RoomList/>
      <div className='roomOpen'>
        <input type="text" className='roomName' placeholder='Create Room' onChange={(e) => {setRoomName(e.target.value)}}/>
        <button onClick={createRoom}>Create</button>
      </div>
      
    </div>
  )
}

export default Main