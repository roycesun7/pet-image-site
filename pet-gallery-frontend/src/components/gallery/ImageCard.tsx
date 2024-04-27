import React from 'react';
import styled from 'styled-components';

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin: 8px;
`;

const ImageCard: React.FC<Props> = ({ imageUrl, title, description }) => {
  return (
    <Card>
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded" />
      <h3 className="mt-2 text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ImageCard;
