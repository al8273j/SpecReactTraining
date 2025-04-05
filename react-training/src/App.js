import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const addPerson = () => {
    if (name.trim() !== "") {
      setPeople([...people, { name, email }]);
      setName("");
      setEmail("");
    }
  };

  const deletePerson = (indexToDelete) => {
    setPeople(people.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Main>
      <Logo
        src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MSGEDI6JTZDBPFXEK2T3MSORGU.png"
        alt="Logo"
      />

      <Header>Spectator's Sources</Header>

      <Wrapper>
        <BlueBox>
          <InfoBox>
            <Label>Source name:</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </InfoBox>

          <InfoBox>
            <Label>Source email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </InfoBox>

          <AddDesign onClick={addPerson}>
            <AddWord>ADD</AddWord>
          </AddDesign>
        </BlueBox>

        <NameWrapper>
          {people.map((person, index) => (
            <NameBox key={index}>
              <Number>{index + 1}</Number>

              <ActualName>{person.name}</ActualName>

              <Email>{person.email}</Email>

              <DeleteDesign onClick={() => deletePerson(index)}>
                <DeleteWord>DELETE</DeleteWord>
              </DeleteDesign>
            </NameBox>
          ))}
        </NameWrapper>
      </Wrapper>
    </Main>
  );
};

// Styled Components
const Main = styled.div`
  background-color: #f5f5f0;
  height: 100%; 


`;

const Logo = styled.img`
  width: 263px;
  height: 65px;
`;

const Header = styled.p`
  font-family: Poppins;
  font-weight: 700;
  font-size: 50px;
  line-height: 75px;
  letter-spacing: 0%;
  text-align: center;
  color: #36476d;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 120px;
  align-items: center;
  flex-direction: column;
`;

const BlueBox = styled.div`
  width: 1320px;
  height: 143px;
  border-radius: 30px;
  background: #afd7fa;
  border: 1px solid #000000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 40px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;  /* Space between label and input */
`;

const Label = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;

const Input = styled.input`
  width: 250px;  /* Adjust width for better alignment */
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

const AddDesign = styled.div`
  width: 166px;
  height: 57px;
  border-radius: 20px;
  background: #56c854;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const AddWord = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 30px;
  color: #ffffff;
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-direction: column;
`;

const NameBox = styled.div`
  width: 1320px;
  height: 107px;
  border-radius: 30px;
  box-shadow: 1px 3px #888888;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #ffffff;
`;

const Number = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  color: #36476d;
`;

const ActualName = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 32px;
  color: #36476d;
`;

const Email = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 32px;
  color: #828ea6;
`;

const DeleteDesign = styled.div`
  width: 166px;
  height: 57px;
  border-radius: 20px;
  background: #ff7676;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DeleteWord = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 30px;
  color: #ffffff;
`;

export default App;