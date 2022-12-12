import React, { useCallback, useState } from 'react';

import useInput from '@hooks/useInput';
import { Button, Form, Header, Input, Label, LinkContainer, Error, Success } from './styles';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const SignUp = () => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, , setPassword] = useInput(''); //state, 비우고, setState(문법적으로 선언하지 않는것도 구조분해 할당에서 가능함)
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMissmatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMissmatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setMissmatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!mismatchError && nickname) {
        console.log('서버로 회원가입하기');
        setSignUpError(''); // 비동기 요청 사이에 setState의 경우 초기화를 한번 해주면 좋다.
        setSignUpSuccess(false);
        axios
          .post('http://localhost:3095/api/users', {
            email,
            nickname,
            password,
          })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});

        /*
          ? 요청시 개발자도구 네트워크탭을 확인해보면 post와 options 로 두번의 요청이 간다.
          ? CORS에 대한 요청, 주소(포트)가 달라서 options요청을 한번 더 보냄.
          ? 원래 주소가 다르면 요청이 안된다. Origin?? 이 다르기 때문에
          */
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  if (data === undefined) {
    return <div>로딩중....</div>;
  }

  if (data) {
    return <Navigate to="/workspace/sleact/channel/일반" />;
    //이런 return은 항상 hooks보다 아래에 있어야 한다.
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
