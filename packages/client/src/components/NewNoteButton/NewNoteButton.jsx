import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const NewNoteButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="primary" block>
      ADD NOTE <PlusOutlined />
    </Button>
  );
};

export default NewNoteButton;
