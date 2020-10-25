import { Avatar, List, Button } from 'antd';
import styles from './NotesList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import {
  selectNote,
  deleteNoteRequest,
} from '../../actions/notesActionCreators';
import classNames from 'classnames';

const NotesList = () => {
  const { currentIndex, notes, isFetching } = useSelector(
    (state) => state.notes,
  );
  const dispatch = useDispatch();

  const handleNoteItemClick = useCallback(
    ({ currentTarget }) => {
      const {
        dataset: { index },
      } = currentTarget;

      dispatch(selectNote(+index));
    },
    [dispatch, selectNote],
  );
  const handleDeleteBtnClick = useCallback(
    (e) => {
      const {
        currentTarget: {
          dataset: { id },
        },
      } = e;
      e.stopPropagation();

      dispatch(deleteNoteRequest(+id));
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({ id, title, text, image }, index) => {
      const className = classNames([styles.notesList__item], {
        [styles.notesList__item_current]: index === currentIndex,
      });
      return (
        <List.Item
          className={className}
          key={id}
          title={title}
          data-index={index}
          onClick={handleNoteItemClick}
        >
          <List.Item.Meta
            avatar={<Avatar shape="square" src={image} />}
            title={title}
            description={text}
          />
          <Button
            disabled={index !== currentIndex}
            data-id={id}
            onClick={handleDeleteBtnClick}
            danger
          >
            delete
          </Button>
        </List.Item>
      );
    },
    [currentIndex],
  );

  return (
    <List
      className={styles.notesList}
      dataSource={notes}
      notes={notes}
      loading={isFetching}
      size="large"
      renderItem={renderItem}
    />
  );
};

export default NotesList;
