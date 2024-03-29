import { useSearchParams } from 'react-router-dom';

function Counter() {
  const [param, setParam] = useSearchParams();

  const count = Number(param.get('count')) ?? 0;
  const step = Number(param.get('step')) || 1;

  console.log(step);

  function decreaseCount() {
    setParam({ count: count - step, step });
  }
  function increaseCount() {
    setParam({ count: count + step, step });
  }

  function handlerChange(e) {
    setParam({
      count,
      step: Number(e.target.value),
    });
  }

  return (
    <>
      <div className='card'>
        <input
          type='range'
          onChange={handlerChange}
          value={step}
          min={1}
          max={10}
        />
        <button onClick={decreaseCount} type='button'>
          -
        </button>
        <h1>{count}</h1>
        <button onClick={increaseCount} type='button'>
          +
        </button>
      </div>

      <button type='button' onClick={() => setParam('')}>
        reset
      </button>
    </>
  );
}

export default Counter;
