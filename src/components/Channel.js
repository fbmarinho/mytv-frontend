import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  IoMdTv,
  IoMdThumbsUp,
  IoMdThumbsDown,
  IoIosSettings,
  IoMdTrash
} from "react-icons/io";
import ReactCountryFlag from "react-country-flag";

const Channel = ({ data, ...props }) => {
  if (data) {
    return (
      <div>
        <div>
          <img src={data.image} />
        </div>
        <div>
          {data.name} - Integrity: <IoMdThumbsDown />
          {data.integrity} <IoMdThumbsUp />
          <ReactCountryFlag
            styleProps={{
              width: "18px",
              height: "15px"
            }}
            code={data.language}
            svg
          />
          <Link to={data.url}>
            <IoMdTv />
          </Link>
          <IoIosSettings />
          <IoMdTrash />
        </div>
      </div>
    );
  } else {
    return <div>Componente inválido</div>;
  }
};

export default Channel;
