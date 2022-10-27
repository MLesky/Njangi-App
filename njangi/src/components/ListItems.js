import React, { useState } from "react"

export default function Grouplistitem() {
  const [groupData, setGroupData] = useState({
    "name": "Mbessi Njangi",
    "unread_messages" : 5,
    "profile_pic": "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t4j3cmdcyln-I156%3A2340%3B156%3A2335?alt=media&token=2f0602bf-a561-4ec6-ad41-9e0454f5d001"
  })
  return (
    <div className="grouplistitem">
    <div className="menus flex-col-hstart-vstart">
          <button className="groups flex-row-vcenter">
            <img
              src={groupData.profile_pic}
              alt="Not Found"
              className="icon"
            />
            <p>{groupData.name}</p>   
          </button>
      </div>
    </div>
  )
}
