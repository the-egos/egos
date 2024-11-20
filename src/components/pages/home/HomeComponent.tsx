import cn from 'clsx';
/*********************************************************************************
 * about grid
 * grid-auto-flow: column || row
 * 자동배치 알고리즘,
 * 열 기준 차례배치 할지
 * 행 기준 차례배치 할지
 *
 *********************************************************************************/
const HomeComponent = () => {
  return (
    <section className="bg-zinc-500 h-full w-full text-white">
      home
      <div className="flex flex-col gap-y-2 w-1/2 mx-auto items-center">
        <h1>subGridTest</h1>

        <div
          className={cn(
            'grid grid-rows-4 grid-flow-col gap-4 bg-zinc-900 font-medium w-full p-3',
            '[&_.item]:rounded [&_.item]:bg-pink-500 [&_.item]:text-center [&_.item]:py-2',
          )}
        >
          <div className="item">01</div>
          <div className="item">02</div>
          <div className="item">03</div>
          <div className="item">04</div>
          <div className="item">05</div>
          <div className="grid grid-rows-subgrid gap-4 row-span-3 bg-yellow-200">
            <div className="item row-start-2">06</div>
          </div>
          <div className="item">07</div>
          <div className="item">08</div>
          <div className="item">09</div>
          <div className="item">10</div>
        </div>
      </div>
    </section>
  );
};
export default HomeComponent;
