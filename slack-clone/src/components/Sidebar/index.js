import React from 'react'
import styled from 'styled-components'
import SideOption from '../SidebarOption';
import { FiberManualRecord, Create, InsertComment, Inbox, Drafts, BookmarkBorder, PeopleAlt, Apps, FileCopy, ExpandLess, ExpandMore, Add} from '@material-ui/icons';
import{useCollection} from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';

export default function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection('rooms'));

  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Adriel </h2>
                <h3><FiberManualRecord/>Adriel Anselmo</h3>
            </SidebarInfo>
            <Create/>
        </SidebarHeader>
        <SideOption Icon={InsertComment} title="Threads"/>
        <SideOption Icon={Inbox} title="Mentions & reactions"/>
        <SideOption Icon={Drafts} title="Saved items"/>
        <SideOption Icon={BookmarkBorder} title="Channel browser"/>
        <SideOption Icon={PeopleAlt} title="People & user groups"/>
        <SideOption Icon={Apps} title="Apps"/>
        <SideOption Icon={FileCopy} title="File browser"/>
        <SideOption Icon={ExpandLess} title="Show less"/>
        <hr/>
        <SideOption Icon={ExpandMore} title="Show less"/>
        <hr/>
        <SideOption Icon={Add} addChannelOption title="Add Channel"/>
        {channels?.docs.map((doc) =>(
          <SideOption key={doc.id}  id={doc.id} title={doc.data().name}/>
        ))}

    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    >hr{
      margin-top: 10px;
      margin-bottom: 10px;
      border: 1px solid #49274b;
    }
`;
const SidebarHeader = styled.div`
  display:flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
    
  }
  >h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  >h3 >.MuiSvgIcon-root{
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;