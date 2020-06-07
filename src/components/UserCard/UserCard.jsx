import React from "react";

export const UserCard = (props) => {
  return (
    <div className="card card-user">
      <div className="image">
        <img src={props.bgImage} alt="..." />
      </div>
      <div className="content">
        <div className="author">
          <a href="#pablo">
            <img
              className="avatar border-gray"
              src={props.avatar}
              alt="..."
            />
            <h4 className="title">
              {props.name}
              <br />
              <small>{props.userName}</small>
            </h4>
          </a>
        </div>
        <p className="description text-center">{props.description}</p>
      </div>
      <hr />
      <div className="text-center">{props.socials}</div>
    </div>
  );
}
