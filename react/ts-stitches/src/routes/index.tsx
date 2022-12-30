import { Routes, Route } from 'react-router-dom';
import Example from '../theme/Example';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={ <Home /> } />
        <Route path='example' element={ <Example /> } />
        <Route path='login'>
          <Route index element={ <Login /> } />
          <Route path='register' element={ <Register /> } />
        </Route>
      </Route>
    </Routes>
  );
}
