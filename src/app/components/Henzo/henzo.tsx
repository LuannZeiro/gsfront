'use client';

import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  margin: 10px;
  background-color: #ffffff;
  border: 2px solid #ddd;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 90%;
  max-height: 70%;
  object-fit: cover;
  border-radius: 5px;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #333;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.a`
  text-decoration: none;
  color: white;
  background-color: ${(props: { bgColor: string }) => props.bgColor};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props: { bgColor: string }) =>
      props.bgColor === '#333' ? '#555' : '#005582'};
  }
`;

type PhotoCardProps = {
  imageSrc: string;
  title: string;
};

const Henzo: React.FC<PhotoCardProps> = ({ imageSrc, title }) => {
  return (
    <Card>
      <Image src={imageSrc} alt={title} />
      <Title>{title}</Title>
      <ButtonContainer>
        <Button
          href="https://github.com/henzopuchetti"
          target="_blank"
          rel="noopener noreferrer"
          bgColor="#333"
        >
          GitHub
        </Button>
        <Button
          href="https://www.linkedin.com/in/henzo-boschiero-358a4a241/"
          target="_blank"
          rel="noopener noreferrer"
          bgColor="#0077b5"
        >
          LinkedIn
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default Henzo;
