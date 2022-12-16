import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { OnChangeHandlerFunc } from 'react-mentions';

type ReturnTypes<T = any> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initialData: T): ReturnTypes => {
  const [value, setValue] = useState(initialData);
  // const handler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // const handler = useCallback((e: any) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

/*
 * unknown은 TS의 탑 타입(Top Type). 따라서 TS에 있는 모든 타입을 포함하여 어느 값이든 가질 수 있다.
 * unknown을 사용 하는 것은 컴파일러에게 "어떤타입이 될지 모르니 니가 추론해줘" 라고 이야기하는 것.
 * unknown 타입은 any 타입을 제외한 다른 타입으로 선언한 변수에 할당할 수 없다.
 * unknown 타입으로 선언된 변수는 프로퍼티에 접근할 수 없으며, 인스턴스를 생성할 수도 없다.
 * any를 사용하는 곳에서 unknown을 사용하면 보다 안전하게 코딩이 가능하지만 any는 타입을 좁혀서 사용하지않아도 되고, unknown은 타입을 좁혀서 사용해야 한다.
 * unknown타입으로 지정된 값은 타입을 먼저 확인한 후에 무언가를 할 수 있으므로 unknown을 사용하는 것이 보다 안전하다.
 */

export default useInput;
