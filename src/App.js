import { Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './Router/app.router';
import Loading from './Components/shared/Loading';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
