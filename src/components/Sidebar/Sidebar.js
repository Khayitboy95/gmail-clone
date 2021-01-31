import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons'
import Add from '@material-ui/icons/Add'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../redux/mailReducer'
import './Sidebar'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

const Sidebar = () => {
    
    const dispatch = useDispatch(); 

    return <div className="sidebar">
          <Button onClick={() => dispatch(openSendMessage())} startIcon={<Add fontSize='large' />} className="sidebar__compose" >Compose</Button>  
          <SidebarOption Icon={Inbox} title={'Inbox'} number={33} selected={true} />
          <SidebarOption Icon={Star} title={'Starred'} number={23} />
          <SidebarOption Icon={AccessTime} title={'Snoozed'} number={23} />
          <SidebarOption Icon={LabelImportant} title={'Importtant'} number={23} />
          <SidebarOption Icon={NearMe} title={'Sent'} number={23} />
          <SidebarOption Icon={Note} title={'Drafts'} number={23} />
          <SidebarOption Icon={ExpandMore} title={'More'} number={23} />
          <div className="sidebar__footer">
              <div className="sidebar__footerIcons">
                  <IconButton>
                      <Person />
                  </IconButton>
                  <IconButton>
                      <Duo />
                  </IconButton>
                  <IconButton>
                      <Phone />
                  </IconButton>
              </div>
          </div>
    </div>
}

export default Sidebar
