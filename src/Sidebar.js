import React from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Sidebar() {

    const [{playlists},dispatch] = useDataLayerValue()
    return (
        <div className='sidebar'>
            <img
            className='sidebar_logo' 
            src={process.env.PUBLIC_URL +"/logo.png"} alt="logo"/>

            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br/>
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name}/>
            ))}

        </div>
        
    );
}

export default Sidebar;