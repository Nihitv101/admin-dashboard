import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {useMode, ColorModeContext} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material'
import TopBar from './scenes/global/TopBar';

import Dashboard from './scenes/dashboard';
import SideBarMenu from './scenes/global/SideBarMenu';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices/Invoices';
import Form from './scenes/form';
import Calendar from './scenes/calendar';
import Faq from './scenes/faq';
import Bar from './scenes/bar';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import Geography from './scenes/geography/Geography';


const App = () => {

  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <SideBarMenu />


              <main className='content'>
                <TopBar />
                <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<PieChart />} />
                <Route path="/line" element={<LineChart />} />
                <Route path="/geography" element={<Geography />} />
   
                </Routes>
              </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  
  )
}

export default App;
