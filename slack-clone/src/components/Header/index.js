import React from "react";
import styled from 'styled-components'
import {Avatar, avatar} from "@material-ui/core"
import {AccessTime, Search} from '@material-ui/icons'
import { HelpOutline } from "@material-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
export default function Header(){
    const [user] = useAuthState(auth);
    console.log(user)
    return(
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                    onClick={() => auth.signOut()}
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTime/>
            </HeaderLeft>
            <HeaderSearch>
                <Search/>
                <input placeholder="Adriel" type="text"/>
            </HeaderSearch>
            <HeaderRight>
                <HelpOutline/>
            </HeaderRight>
        </HeaderContainer>
    )
}
const HeaderRight = styled.div`
    flex:0.3;
    display: flex;
    align-items: flex-end;
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`

const HeaderContainer = styled.div`
    >h1 {
        color: white;
    }
    display:flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color:white;
`;

const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8
    }
`
const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align:center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    >input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color:white;
    }
`