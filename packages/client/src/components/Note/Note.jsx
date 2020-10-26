/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { useDispatch } from 'react-redux';
import { Space, Typography, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { updateNoteRequest } from '../../actions/notesActionCreators';

const { Title, Paragraph, Text } = Typography;

const Note = ({
  id, title, text, createdAt,
}) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [editableText, setEditableText] = useState('');
  const [editableTitle, setEditableTitle] = useState('');

  useEffect(() => {
    setEditableText(text);
    setEditableTitle(title);
  }, [id]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isEdit) {
      const timeoutId = setTimeout(() => {
        dispatch(
          updateNoteRequest(id, {
            title: editableTitle,
            text: editableText,
          }),
        );
        setIsEdit((currentValue) => !currentValue);
      }, 200);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [editableText, editableTitle]);

  return (
    <Space direction="vertical">
      <Divider>
        <Text type="secondary">
          {format(new Date(createdAt), 'LLLL dd, yyyy h:mm aaa')}
        </Text>
      </Divider>
      <Title
        editable={{
          maxLength: 255,
          autoSize: true,
          onStart: () => setIsEdit(true),
          onChange: setEditableTitle,
        }}
        block
        level={1}
      >
        {editableTitle}
      </Title>
      <Paragraph
        strong
        editable={{
          maxLength: 255,
          autoSize: true,
          onStart: () => setIsEdit(true),
          onChange: setEditableText,
        }}
      >
        {editableText}
      </Paragraph>
    </Space>
  );
};

Note.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Note;
