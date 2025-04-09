import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch users on mount
  useEffect(() => {
    axios
      .get('http://localhost:3001/users') // Replace <url> with your actual route
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  // Add user
  const handleAddUser = () => {
    if (name.trim() === "") return;

    axios
      .post('http://localhost:3001/users', { name, email }) // Replace <url>
      .then(response => {
        setUsers([...users, response.data]);
        setName('');
        setEmail('');
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
      });
  };

  // Delete user
  const deleteSource = (userId) => {
    axios
      .delete('http://localhost:3001/users', { data: { id: userId } }) // Replace <url>
      .then(response => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
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

          <AddDesign onClick={handleAddUser}>
            <AddWord>ADD</AddWord>
          </AddDesign>
        </BlueBox>

        <NameWrapper>
          {users.map((user, index) => (
            <NameBox key={user.id}>
              <Number>{index + 1}</Number>
              <ActualName>{user.name}</ActualName>
              <Email>{user.email}</Email>
              <DeleteDesign onClick={() => deleteSource(user.id)}>
                <DeleteWord>DELETE</DeleteWord>
              </DeleteDesign>
            </NameBox>
          ))}
        </NameWrapper>
      </Wrapper>
    </Main>
  );
};

// Styled Components (unchanged from your original)

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
  gap: 10px;
`;

const Label = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;

const Input = styled.input`
  width: 250px;
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
