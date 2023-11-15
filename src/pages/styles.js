import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 54px;
  margin-bottom: 20px;
  color: #fef9ec;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color: #fef9ec;
  width: 100%;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #291f00;
  border-radius: 5px;
  background-color: #291f00;
  color: #fef9ec;
  outline: none;
`;

export const Button = styled.button`
  background-color: #ff8400;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  color: #291f00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;