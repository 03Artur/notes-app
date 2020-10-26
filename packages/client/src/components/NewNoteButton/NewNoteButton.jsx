/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const NewNoteButton = ({ onClick }) => (
  <Button onClick={onClick} type="primary" block>
    ADD NOTE
    {' '}
    <PlusOutlined />
  </Button>
);

NewNoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewNoteButton;
