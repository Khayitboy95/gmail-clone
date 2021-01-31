import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList/EmailList';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  
  const sendMessageIsOpen = useSelector((state) => state.mail.sendMessageIsOpen);
  const user = useSelector((state) => state.user.user);

  return (
    <BrowserRouter>
    {
      !user 
      ? ( <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail /> }
        </div>
      )
    }
    </BrowserRouter>
  );
}

export default App;
