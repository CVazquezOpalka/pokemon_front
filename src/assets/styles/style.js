import styled from "styled-components";


export const BotonRedondo = styled.button`
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
`;

export const BTNGoBack = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.border ? "#fff" : "#111")};
  background: none;
  font-size: 1.1rem;
  transition: 0.3s ease;
  color: ${(props) => (props.color ? "#fff" : "#111")};
  &:hover {
    transform: scale(1.1);
  }
`;

export const BotonRectangulo = styled.button`
width: 300px;
height: 90px;
border-radius: 40px;
border: 1px solid #111;
background: #111;
color: #fff;
font-size: 18px;
cursor: pointer;
transition: 0.3s ease;
&:hover{
  transform: scale(1.2)
}
`;

export const BotonNavBar = styled.button`
width: 200px;
height: 40px;
border-radius: 10px;
border: 1px solid #111;
background: none;
color: #111;
font-size: 18px;
font-weight:500;
cursor: pointer;
transition: 0.5s ease;
&:hover{
  background: #333;
  color: #fff;
  transform: scale(1.2)
}
`
