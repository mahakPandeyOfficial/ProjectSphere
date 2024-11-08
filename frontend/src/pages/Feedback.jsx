// Feedback.js
import React from 'react';
import styled from 'styled-components';
import client1 from '../assets/images/client1.svg';
import client2 from '../assets/images/client2.svg'
import client3 from '../assets/images/client3.svg'
import client4 from '../assets/images/client4.svg'
import client5 from '../assets/images/client5.svg'

const FeedbackContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #0056b3;
  margin-bottom: 40px;
`;

const FeedbackCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const FeedbackCard = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ClientName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const ClientDetails = styled.p`
  font-size: 14px;
  color: gray;
`;

const FeedbackText = styled.p`
  font-size: 14px;
  color: #333;
  margin-top: 10px;
`;

const Feedback = () => {
  const feedbacks = [
    { name: 'Nauman Smith', role: 'CEO, Real Estate', feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui at quo, quos illum totam ipsum eius quisquam? Nihil quisquam, non aliquid facere quo nam reprehenderit.', img: client1 },
    { name: 'Shaira Kayak', role: 'Marketing Specialist', feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui at quo, quos illum totam ipsum eius quisquam? Nihil quisquam, non aliquid facere quo nam reprehenderit.', img: client2 },
    { name: 'John Lopez', role: 'Sales Manager', feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui at quo, quos illum totam ipsum eius quisquam? Nihil quisquam, non aliquid facere quo nam reprehenderit.', img: client3 },
    { name: 'Marry Freeman', role: 'Property Designer', feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui at quo, quos illum totam ipsum eius quisquam? Nihil quisquam, non aliquid facere quo nam reprehenderit.', img: client4 },
    { name: 'Lucy', role: 'Sales Agent', feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui at quo, quos illum totam ipsum eius quisquam? Nihil quisquam, non aliquid facere quo nam reprehenderit.', img: client5 },
  ];

  return (
    <FeedbackContainer>
      <Title>Happy Clients</Title>
      <FeedbackCardsContainer>
        {feedbacks.map((client, index) => (
          <FeedbackCard key={index}>
            <ProfileImage src={client.img} alt={client.name} />
            <ClientName>{client.name}</ClientName>
            <ClientDetails>{client.role}</ClientDetails>
            <FeedbackText>{client.feedback}</FeedbackText>
          </FeedbackCard>
        ))}
      </FeedbackCardsContainer>
    </FeedbackContainer>
  );
};

export default Feedback;
