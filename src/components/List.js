import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem';

import './List.css';

const List = () => {
  const { list } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  return (
    <div className='list-container'>
      <ul className='list'>
        {list.map((item, i) => {
          return <ListItem key={i} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default List;
