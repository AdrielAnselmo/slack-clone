import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import styled from 'styled-components';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase'
import Login from './components/Login';
import Spinner from 'react-spinkit';

const Routas = () =>{
    const[user,loading] = useAuthState(auth)

    if(loading){
        return(
            <AppLoading>
                <AppLoadingContents>
                    <img src="data:image/png;base64,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" />
                    <Spinner name="ball-spin-fade-loader" color='purple' fadeIn='none'/>
                </AppLoadingContents>
            </AppLoading>
        )
    }
    return(
        <BrowserRouter>
        {!user ? (
            <Login/>
        ):(
            <>
            <Header/>
            <AppBody>
                <Sidebar/>
                <Routes>
                <Route exact path="/" element={<Chat/>}/>
                </Routes>   
              

            </AppBody>
            </>
        )}
       
            
        </BrowserRouter>
    )
}

export default Routas;

const AppLoading = styled.div`
  display:grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align:center;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >img{
        height: 100px;
        padding: 20px;
        margin-bottom: 40px;
    }
`;


const AppBody = styled.div`
    display: flex;
    height: 100vh;
`