// * Base
import axios from 'axios';
import { useEffect, useState } from 'react';

// * Components
import Wrapper from '../Wrapper/Wrapper';

// * Styles
import styles from './List.module.css';

const List = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        console.log('data: ', data);
        setList(data);
      })
      .catch(() => {
        setError('There was an error during the loading of the list');
      });
  }, []);

  if (error) {
    return (
      <Wrapper>
        <p>{error}</p>
      </Wrapper>
    );
  }

  if (!list.length) {
    return (
      <Wrapper>
        <p>The list is empty</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ul className={styles.list}>
        {list.map(({ id, title, body }) => (
          <Item key={`list-item-${id}`} title={title} body={body} />
        ))}
      </ul>
    </Wrapper>
  );
};

const Item = ({ title, body }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
};

export default List;
