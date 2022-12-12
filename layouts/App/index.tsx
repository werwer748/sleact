import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import loadable from '@loadable/component';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SingUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));
const Channel = loadable(() => import('@pages/Channel'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* 중첩라우팅 방법 1 */}
      {/* <Route path="/workspace" element={<Workspace />}>
        <Route path="channel" element={<Channel />} />
      </Route> */}
      <Route path="/workspace/:workspace/*" element={<Workspace />} />
      {/*
        /workspace/test ...
        앞에 : 이 붙으면 파라미터 라고 부른다. (자유롭게 값을 지정할 수 있다.)
        /workspace/sleaact/*
        /workspace/:workspace/* <- 파라미터가있고 파라미터가 아닌 값이 있을 때 파라미터가 아닌 값을 위에 써야 꼬이지 않음
      */}
    </Routes>
  );
};

export default App;
