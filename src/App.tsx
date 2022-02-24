import React from 'react'
import Container from 'components/Container'
import DetailPage from 'pages/DetailPage'
import LinkPage from 'pages/LinkPage'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DataInterface } from 'common/interface'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LinkPage />} />
            <Route path="/:key" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
