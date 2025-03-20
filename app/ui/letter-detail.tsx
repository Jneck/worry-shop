'use client';

import { useRef } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { replyLetter } from '../lib/letter/letter.action';
import { Database, Tables } from '@/database.types';

export default function LetterDetail({ letter }: { letter: Tables<'letter'> }) {
  const inputRef = useRef<HTMLInputElement | null>(null); // useRef로 값 저장
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <br></br>
      <br></br>
      <Typography>{letter.content}</Typography>
      <TextField
        disabled={letter.status !== 'replied' ? false : true}
        multiline
        placeholder="put worries, questions or any text"
        rows={18}
        inputRef={inputRef} // useRef 연결
        sx={{
          backgroundColor: letter.status !== 'replied' ? 'white' : 'lightgray',
          width: '80%',
          borderRadius: '24px',
          marginTop: '2rem',
        }}
      />
      <br></br>
      <Button
        onClick={onClickReplyButton} // 클릭 시 직접 가져오기
        sx={{
          backgroundColor: 'green',
          width: '80%',
          height: '2.5rem',
          borderRadius: '1rem',
          color: 'white',
        }}
      >
        post reply
      </Button>
    </div>
  );

  async function onClickReplyButton() {
    const reply = inputRef.current?.value; // useRef로 가져오기
    if (reply) {
      try {
        await replyLetter(letter.id, reply);
        alert('reply submitted');
      } catch (error) {
        console.error(error);
        alert('reply submitted failed');
      }
    } else {
      alert('reply any text');
    }
  }
}
