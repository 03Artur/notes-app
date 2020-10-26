import React, { useCallback } from 'react';
import { Avatar, List, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
  selectNote,
  deleteNoteRequest,
} from '../../actions/notesActionCreators';
import { notesSelector } from '../../selectors';
import styles from './NotesList.module.css';

const NotesList = () => {
  const { currentIndex, notes, isFetching } = useSelector(notesSelector);
  const dispatch = useDispatch();

  const handleItemClick = useCallback(
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
    ({
      id, title, text, image,
    }, index) => {
      const className = classNames([styles.notesList__item], {
        [styles.notesList__item_current]: index === currentIndex,
      });
      return (
        <List.Item
          className={className}
          key={id}
          title={title}
          data-index={index}
          onClick={handleItemClick}
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
