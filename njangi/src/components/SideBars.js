import React from "react"
import Grouplistitem from "./ListItems"
import Groups from "./assets/images/Groups.svg"

export function Sidebar() {
  return (
    <div className="sidebar flex-col-hstart-vstart">
        <div className="menus flex-col-hstart-vstart">
          <button className="listitem flex-row">
            <img
              src={Groups}
              alt="Not Found"
              className="icon"
            />
            <p>Groups</p>
          </button>
          <button className="listitem flex-row-vcenter">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2262?alt=media&token=f1decd0b-991a-4e9c-bb01-77ef268e8e34"
              alt="Not Found"
              className="icon"
            />
            <p>Chats</p>
          </button>
          <button className="listitem flex-row-vcenter">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2268?alt=media&token=e1ac58d1-5340-46b6-8a29-b500129ed81e"
              alt="Not Found"
              className="icon"
            />
            <p>Schedules</p>
          </button>
          <button className="listitem flex-row-vcenter">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2273?alt=media&token=fe45b3e5-6e0b-48a1-8ae2-dc20d4239c86"
              alt="Not Found"
              className="icon"
            />
            <p>Transactions</p>
          </button>
          <div className="buttons">
          <button>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2250?alt=media&token=a9d54af8-bd96-413f-a8b1-1fb7f06b0287"
              alt="Not Found"
              className="settings"
            />
          </button>
          <button>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2247?alt=media&token=a7df6e55-4e8a-428f-9769-7e69e02f3821"
              alt="Not F
              ound"
              className="logout"
            />
            </button>
        </div>
      </div>
    </div>
  )
}

export function GroupSidebar() {
  return (
    <div className="group-side-bar flex-col-hstart-vstart">
      <Grouplistitem />
    </div>
  )
}

export function MiniSidebar() {
  return (
    <div className="mini-sidebar sidebar flex-col-hstart-vstart">
        <div className="menus flex-col-hstart-vstart">
          <button className="listitem flex-row">
            <img
              src={Groups}
              alt="Not Found"
              className="icon"
            />
          </button>
          <button className="listitem flex-row-vcenter">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2262?alt=media&token=f1decd0b-991a-4e9c-bb01-77ef268e8e34"
              alt="Not Found"
              className="icon"
            />
          </button>
          <button className="listitem flex-row-vcenter">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2268?alt=media&token=e1ac58d1-5340-46b6-8a29-b500129ed81e"
              alt="Not Found"
              className="icon"
            />
          </button>
          <button className="listitem flex-row-vcenter">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2273?alt=media&token=fe45b3e5-6e0b-48a1-8ae2-dc20d4239c86"
              alt="Not Found"
              className="icon"
            />
          </button>
          <div className="buttons">
            <button className="listitem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2250?alt=media&token=a9d54af8-bd96-413f-a8b1-1fb7f06b0287"
                alt="Not Found"
                className="settings"
              />
            </button>
            <button className="listitem"> 
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4qtl03lzyc5-I156%3A2289%3B156%3A2247?alt=media&token=a7df6e55-4e8a-428f-9769-7e69e02f3821"
              alt="Not F
              ound"
              className="logout"
            />
          </button>
        </div>
      </div>
    </div>
  )
}