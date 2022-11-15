import {Routes, Route, useNavigate} from 'react-router-dom';
import WebSocket from './Websocket';

export default function App() {
  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <div>
      <div>
        <button onClick={navigateHome}>Home</button>
        <hr />
  

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <WebSocket/>;
}