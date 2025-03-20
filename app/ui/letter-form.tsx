'use client';

import { useRef } from 'react';
import { Button, TextField } from '@mui/material';
import { insertLetter } from '../lib/letter/letter.action';

export default function LetterForm() {
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
      <TextField
        multiline
        placeholder="put worries, questions or any text"
        rows={18}
        inputRef={inputRef} // useRef 연결
        sx={{
          backgroundColor: 'white',
          width: '80%',
          borderRadius: '24px',
          marginTop: '2rem',
        }}
      />
      <br></br>
      <Button
        onClick={submitLetter} // 클릭 시 직접 가져오기
        sx={{
          backgroundColor: 'green',
          width: '80%',
          height: '2.5rem',
          borderRadius: '1rem',
          color: 'white',
        }}
      >
        submit post
      </Button>
    </div>
  );

  async function submitLetter() {
    const content = inputRef.current?.value; // useRef로 가져오기
    if (content) {
      try {
        await insertLetter(content);
        alert('post submitted');
      } catch (error) {
        console.error(error);
        alert('post submitted failed');
      }
    } else {
      alert('put any text');
    }
  }
}
