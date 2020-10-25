import React, { useEffect, useState } from 'react';
import { Space, Typography, Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { updateNoteRequest } from '../../actions/notesActionCreators';
import format from 'date-fns/format';
const { Title, Paragraph, Text } = Typography;

const Note = (props) => {
  const { id, title, text, createdAt } = props;
  const dispatch = useDispatch();

  const [editableTitle, setEditableTitle] = useState('');
  const [editableText, setEditableText] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setEditableText(text);
    setEditableTitle(title);
  }, [id]);

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
      }, 1000);

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

export default Note;
