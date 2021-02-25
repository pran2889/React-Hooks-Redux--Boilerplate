import { Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './Router/app.router';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading…</h1>}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
