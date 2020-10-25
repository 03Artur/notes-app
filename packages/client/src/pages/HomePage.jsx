import { Layout, Empty, Button } from 'antd';
import { bindActionCreators } from 'redux';
import React, { useCallback, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotesList from '../components/NotesList/NotesList';
import * as NotesActionCreators from './../actions/notesActionCreators';
import Note from '../components/Note/Note';
import { currentNoteSelector } from '../selectors';

const { Header, Sider, Content } = Layout;

function HomePage() {
  const note = useSelector(currentNoteSelector);

  const dispatch = useDispatch();
  const { createNoteRequest, getNotesRequest } = useMemo(
    () => bindActionCreators(NotesActionCreators, dispatch),
    [dispatch],
  );

  useEffect(() => {
    getNotesRequest();
  }, []);

  return (
    <Layout>
      <Header />
      <Layout>
        <Sider width={400}>
          <Button
            type="primary"
            block
            onClick={() => {
              createNoteRequest({
                title: 'note title',
                text: 'note description',
              });
            }}
          >
            Add note
          </Button>
          <NotesList />
        </Sider>
        <Content>{note ? <Note {...note} /> : <Empty />}</Content>
      </Layout>
    </Layout>
  );
}

export default HomePage;
