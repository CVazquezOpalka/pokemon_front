import React from "react";
import styled from "styled-components";

import { BotonRedondo } from "../assets/styles/style";

export const FilterBar = ({ openDrawwer, drawwer }) => {
  return (
    <Container>
      <div className="btn_filter">
        <BotonRedondo onClick={() => openDrawwer(!drawwer)}>
          {"🌀"}
        </BotonRedondo>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn_filter {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid #111;
      background: none;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
        background-color: #333;
        color: #fff;
      }
    }
  }
`;
