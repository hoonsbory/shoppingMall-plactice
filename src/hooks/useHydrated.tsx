import { useEffect, useState } from 'react';

//persist를 이용하여 로컬스토리지에 저장하면 hydrate 이슈가 발생한다.
//사전 렌더링에는 스토리지 접근이 불가하기 때문
//마운트 후 윈도우 객체에 접근이 가능할 때 데이터를 사용하는 훅 개발
const useHydrated = <T,>(beforeHydrateData: T): T => {
  const [afterHydrateData, setAfterHydrateData] = useState<T | false>(false as T | false);
  useEffect(() => setAfterHydrateData(beforeHydrateData), [beforeHydrateData]);
  return afterHydrateData as T;
};

export default useHydrated;
