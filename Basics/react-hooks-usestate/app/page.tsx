"use client";

import { useState, type ChangeEvent } from "react";
import styled from "styled-components";

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 20px;
  background: #f4f4f5;
  color: #18181b;
  font-family: var(--font-geist-sans), sans-serif;
`;

const Card = styled.div`
  width: 320px;
  padding: 24px;
  background: white;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const Form = styled.form`
  display: grid;
  gap: 10px;
`;

const Input = styled.input`
  display: block;
  margin-top: 5px;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Output = styled.p`
  margin: 18px 0 0;
  padding: 12px;
  border-radius: 6px;
  background: #eff6ff;
  border-left: 4px solid #2563eb;
  font-size: 15px;

  strong {
    display: block;
    margin-top: 4px;
    font-size: 17px;
  }
`;

const ButtonCard = styled.div`
  width: 320px;
  padding: 24px;
  background: white;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const Counter = styled.p`
  margin: 0 0 14px;
  padding: 12px;
  border-radius: 6px;
  background: #eff6ff;
  border-left: 4px solid #2a8d76;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 9px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const IncreaseButton = styled(Button)`
  background: #2a8d76;

  &:hover {
    background: #24705e;
  }
`;

const ResetButton = styled(Button)`
  background: #64748b;

  &:hover {
    background: #475569;
  }
`;

const App = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [displayNum, setDisplayNum] = useState<number>(0);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value;

    if (field === "firstName") {
      setFirstName(value);
    } else if (field === "lastName") {
      setLastName(value);
    }
  }

  function handleClick() {
    setDisplayNum((prevCount) => prevCount + 1);
  }

  function handleReset() {
    setDisplayNum(0);
  }

  return (
    <Page>
      <Card>
        <Form onSubmit={(e) => e.preventDefault()}>
          <label>
            First Name:
            <Input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </label>

          <label>
            Last Name:
            <Input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </label>
        </Form>

        <Output>
          Hello:
          <strong>
            {firstName || ""}
            {lastName ? " " + lastName : ""}
          </strong>
        </Output>
      </Card>

      <ButtonCard>
        <Counter>{displayNum}</Counter>

        <Buttons>
          <IncreaseButton onClick={handleClick}>Increase</IncreaseButton>
          <ResetButton onClick={handleReset}>Reset</ResetButton>
        </Buttons>
      </ButtonCard>
    </Page>
  );
};

export default App;
