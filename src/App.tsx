import styled from "styled-components";
import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';

// layout import statements go here
import Header from "./Components/layout/Header.tsx";
import Nav from "./Components/layout/Nav.tsx";
import Footer from "./Components/layout/Footer.tsx";

// component import statements go here
import Home from "./Components/mains/Home.tsx";
import Pack from "./Components/mains/Pack.tsx";
import Deck from "./Components/mains/Deck.tsx";
import RandomCard from "./Components/other/RandomCard.tsx";
const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
`;

const Container = styled.div`
    font-family: Arial, Monospaced, "Droid Sans", sans-serif;
    display: flex;
    flex-direction: column;
`;

function Root() {
    return (
        <>
    <PageWrapper>
        <Header/>
        <Container>
            <Nav/>
            <Routes>
                <Route path={`/`}
                       element={<Home/>}
                />
                <Route path={`/pack`}
                       element={<Pack/>}
                />
                <Route path={`/deck`}
                       element={<Deck/>}
                />
                <Route path={'/randomCard'}
                       element={<RandomCard/>}
                />
            </Routes>
        </Container>
    </PageWrapper>

    <Footer/>
    </>
    );
}

const router = createBrowserRouter(
    [{path: "*", Component: Root}]
);

function App() {
  return (
        <><RouterProvider router={router}/></>
  )
}
export default App
