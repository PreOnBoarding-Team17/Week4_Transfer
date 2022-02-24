import React from "react";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* <LinkPage /> */}
        <DetailPage />
      </Container>
    </>
  );
}

export default App;
