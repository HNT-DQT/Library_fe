import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PublicLayout from './Layout/PublicLayout';
import NotFound from './Pages/NotFound';
import './App.css';
import 'antd/dist/antd.min.css';
import { PUBLIC_ROUTER } from './Router/router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<PublicLayout><NotFound/></PublicLayout>}/>
        {PUBLIC_ROUTER.map(e =>
          <Route 
            key={e.key}
            path={e.path}
            element={<PublicLayout>{e.element}</PublicLayout>}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
