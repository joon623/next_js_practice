import { useCallback, useState } from 'react';

export default (initValue = null) => {
  const [state, setState] = useState<string>('');

  const onChange = useCallback((e) => {
    setState(e.target.value);
  }, []);

  return [state, onChange];
};
