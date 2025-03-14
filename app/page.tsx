import { ImageList, ImageListItem } from "@mui/material";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1 style={{ marginTop: "1rem" }}>고민 잡화점</h1>
      <br />
      <br />
      <br />
      <h3 style={{ marginTop: "1rem" }}>
        고민 상담해드립니다.
        <br />
        <br />
        고민을 아래 편지지에 넣어서 보내주세요.
        <br />
        <br />
      </h3>

      <footer
        style={{
          marginBottom: "1rem",
          position: "absolute",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        &copy; 2025 The Worry Shop. All rights reserved.
      </footer>
    </div>
  );
}
