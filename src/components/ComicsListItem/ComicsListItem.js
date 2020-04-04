import React from "react";
import { Link } from "react-router-dom";
import "./ComicsListItem.scss";

const ComicsListItem = ({ comic }) => {
  return (
    <Link to={`/comic/${comic.name}`}>
      <div className={"ComicsListItem__container"}>
        <img
          className={"ComicsListItem__image"}
          src={comic.image}
          alt={comic.name}
        />
        <div className={"ComicsListItem__name"}>{comic.name}</div>
        <div>
          <span className={"ComicsListItem__ownedBy"}>Owned By</span>
          <span className={"ComicsListItem__owner"}> {comic.owner}</span>
        </div>
      </div>
    </Link>
  );
};

export default ComicsListItem;
