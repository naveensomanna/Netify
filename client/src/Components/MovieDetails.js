import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  let { url } = useParams();
  console.log(useParams(), "asadad");
  return (
    <div>
      <img src={url} />
    </div>
  );
};

export default MovieDetails;
