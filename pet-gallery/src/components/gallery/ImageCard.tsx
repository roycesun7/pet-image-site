import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  created: string;
  isSelected: boolean;
  onSelect: () => void;
}

const Card = styled.div<{ isSelected: boolean }>`
  position: relative;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
  overflow: hidden;

  // Adding a pseudo-element for highlighting 
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(76, 175, 80, 0.2); // greenish color with transparency
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  // Change the opacity of the pseudo-element card is selected
  ${(props) =>
    props.isSelected &&
    css`
      &::after {
        opacity: 1;
      }
    `}
`;


const ImageCard: React.FC<Props> = ({ imageUrl, title, description, created, isSelected, onSelect }) => {

  // console.log(`Loading image: ${imageUrl}`);
  
    return (
      <Card isSelected={isSelected} onClick={onSelect}>
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded" />
        <h3 className="mt-2 text-lg font-bold">{title}</h3>
        <p>{description}</p>
        
        <p className="text-sm italic mt-2">{`Created on: ${created}`}</p>
      </Card>
    );
  };

export default ImageCard;
