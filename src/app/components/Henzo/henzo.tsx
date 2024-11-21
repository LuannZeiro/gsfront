'use client';

import styled from 'styled-components';


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  background-color: #ffffff;
  border: 2px solid #ddd;
  border-radius: 10px;
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

type PhotoCardProps = {
  imageSrc: string;
  title: string;
};

const Henzo: React.FC<PhotoCardProps> = ({ imageSrc, title }) => {
  return (
    <Card>
      <Image src={imageSrc} alt={title} />
      <Title>{title}</Title>
    </Card>
  );
};

export default Henzo;
