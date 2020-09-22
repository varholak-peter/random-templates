import {
  DependencyList,
  EffectCallback,
  useEffect,
  useRef,
  useState
} from 'react';

// Replace with `debounce` from current dependencies
import { debounce } from '@material-ui/core/utils';

const useDebouncedEffect = (
  callback: EffectCallback,
  dependencyList: DependencyList,
  timeout: number
) => {
  const [deps, setDeps] = useState(dependencyList);
  const debouncedSetDeps = useRef(
    debounce((_dependencyList: DependencyList) => {})
  );

  useEffect(() => {
    debouncedSetDeps.current = debounce((dependencyList: DependencyList) => {
      setDeps(dependencyList);
    }, timeout);
  }, [timeout]);

  useEffect(() => {
    debouncedSetDeps.current(dependencyList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);

  useEffect(callback, deps);
};

export default useDebouncedEffect;
