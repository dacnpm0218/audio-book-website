import Head from "next/head";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}