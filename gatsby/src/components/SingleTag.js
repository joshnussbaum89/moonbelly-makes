import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const TagStyles = styled.li`
  display: inline-block;
  cursor: pointer;
  text-align: center;
  background: var(--pink);
  border-radius: 20px;
  padding: 0.6rem;
  margin: 0.2rem;
  transition: 0.2s;
  :hover {
    background: var(--mint);
  }
`;

const SingleTag = ({ tag }) => {
  return (
    <Link to={`/category/${tag}`}>
      <TagStyles className='tag-name'>{tag}</TagStyles>
    </Link>
  );
};

export default SingleTag;
