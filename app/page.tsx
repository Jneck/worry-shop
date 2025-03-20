import {
  Button,
  Card,
  Grid2,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { getLetters } from './lib/letter/letter.data';
import { Suspense } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1 style={{ marginTop: '1rem' }}>Make Sense</h1>
      <br />
      <br />
      <br />
      <h3 style={{ marginTop: '1rem' }}>Post your worries or questions.</h3>
      <h3 style={{ marginTop: '1rem' }}>Reply nice answer that make sense.</h3>

      {/* Suspense를 사용하여 서버 데이터를 비동기 로드 */}
      <Suspense fallback={<p>fetching posts...</p>}>
        <LettersList />
      </Suspense>

      <Button
        variant="contained"
        color="primary"
        href="/post/create"
        sx={{
          minWidth: '200px',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        post text
      </Button>

      <footer
        style={{
          marginBottom: '1rem',
          position: 'absolute',
          bottom: '0',
          width: '100%',
          textAlign: 'center',
        }}
      >
        &copy; 2025 The Worry Shop. All rights reserved.
      </footer>
    </div>
  );
}

async function LettersList() {
  const letters = await getLetters();

  return (
    <List
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        marginLeft: '2rem',
      }}
    >
      {letters.map((letter) => (
        <Link href={`/post/${letter.id}`} key={letter.id}>
          <ListItem
            style={{
              minWidth: '360px',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'lightgray',
            }}
          >
            <List>
              <ListItemText
                primary={letter.content}
                style={{
                  maxWidth: '300px',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  whiteSpace: 'normal',
                }}
              />
              <br />
              <br />
              <br />
              <ListItemText
                secondary={letter.reply ?? 'Click for making sense'}
                style={{
                  maxWidth: '300px',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  whiteSpace: 'normal',
                }}
              />
            </List>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
