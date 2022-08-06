import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <List key={id}>
        <Name>
          {name}: {number}
        </Name>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          delete
        </Button>
      </List>
    ))}
  </ul>
);

const List = styled.li`
  margin-right: 10px;
  display: flex;
`;

const Name = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
  height: 20px;
`;

export default ContactList;
