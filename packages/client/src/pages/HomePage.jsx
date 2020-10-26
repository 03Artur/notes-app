import { bindActionCreators } from 'redux';
import { Layout, Empty, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import React, { useMemo, useEffect, useCallback } from 'react';
import Note from '../components/Note/Note';
import { currentNoteSelector } from '../selectors';
import NotesList from '../components/NotesList/NotesList';
import * as NotesActionCreators from '../actions/notesActionCreators';

const { Header, Sider, Content } = Layout;

function HomePage() {
  const dispatch = useDispatch();
  const currentNote = useSelector(currentNoteSelector);

  const { createNoteRequest, getNotesRequest } = useMemo(
    () => bindActionCreators(NotesActionCreators, dispatch),
    [dispatch],
  );

  useEffect(() => {
    getNotesRequest();
  }, []);

  const createNote = useCallback(() => {
    createNoteRequest({
      title: 'note title',
      text: 'note description',
    });
  }, [createNoteRequest]);

  return (
    <Layout>
      <Header />
      <Layout>
        <Sider width={400}>
          <Button
            type="primary"
            block
            onClick={createNote}
          >
            Add note
          </Button>
          <NotesList />
        </Sider>
        <Content>
          {currentNote ? (
            <Note
              id={currentNote.id}
              text={currentNote.text}
              title={currentNote.title}
              createdAt={currentNote.createdAt}
            />
          ) : <Empty />}
        </Content>
      </Layout>
    </Layout>
  );
}

export default HomePage;
