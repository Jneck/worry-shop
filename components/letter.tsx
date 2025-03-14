"use client";

import { useRef } from "react";
import { Button, TextField } from "@mui/material";

export default function LetterForm() {
  const inputRef = useRef<HTMLInputElement | null>(null); // useRef로 값 저장

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <TextField
        multiline
        placeholder="고민을 적어주세요"
        rows={16}
        inputRef={inputRef} // useRef 연결
        sx={{
          backgroundColor: "white",
          width: "50%",
          borderRadius: "24px",
        }}
      />
      <Button
        onClick={submitLetter} // 클릭 시 직접 가져오기
        sx={{
          backgroundColor: "green",
          width: "50%",
          height: "3rem",
          borderRadius: "1rem",
          color: "white",
        }}
      >
        편지 제출하기
      </Button>
    </div>
  );

  async function submitLetter() {
    const letter = inputRef.current?.value; // useRef로 가져오기
    if (letter) {
      alert("편지가 제출됐어요.");
      console.log(letter);
    } else {
      alert("편지를 입력해주세요.");
    }
  }
}
