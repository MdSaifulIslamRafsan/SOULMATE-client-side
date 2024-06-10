import CountUp, { useCountUp } from 'react-countup';
import useCount from '../../Hooks/useCount';
import { Vortex } from 'react-loader-spinner';

const SuccessInfo = () => {
  const [Count , isLoading] = useCount();
  console.log(Count);
    useCountUp({
        ref: 'counter',
        end: 100,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
      if (isLoading) {
        return (
          <div className="flex min-h-screen items-center justify-center">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          </div>
        );
      }
    return (
        <section
        id="features"
        className="max-w-[1440px] lg:w-10/12 w-11/12 mx-auto"
      >
        <div  className="lg:w-2/3 mb-10 space-y-3 w-full mx-auto text-center">
        <h1 className="text-xl lg:text-4xl font-bold">
        Our Impact
        </h1>
        <p className="">
        see the total number of biodata profiles, the number of girls and boys on our platform, and the marriages {`we've`} helped make a reality.
        </p>
      </div>
        <div style={{background: "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url('https://i.ibb.co/PzY0TYg/photo-1600547224355-10c6482872ca.jpg')"}} className="grid mb-20 justify-center gap-4 sm:grid-cols-2 p-8 rounded-2xl !bg-fixed md:grid-cols-4">
          <div className="relative overflow-hidden rounded-lg border bg-gray-100/10 text-white p-2">
            <div className="flex  text-center flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold"> Total Biodata</h3>
                <p className="text-3xl font-bold text-muted-foreground">
                <CountUp end={Count?.totalBoidata} enableScrollSpy />
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-gray-100/10 text-white p-2">
            <div className="flex flex-col text-center justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold"> Girls  Biodata</h3>
                <p className="text-3xl font-bold text-muted-foreground">
                <CountUp end={Count?.femaleBoidata} enableScrollSpy />
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-gray-100/10 text-white p-2">
            <div className="flex flex-col text-center justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold"> Boys Biodata</h3>
                <p className="text-3xl font-bold text-muted-foreground">
                <CountUp end={Count?.maleBoidata} enableScrollSpy />
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-gray-100/10 text-white p-2">
            <div className="flex flex-col text-center justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Total marriages</h3>
                <p className="text-3xl font-bold text-muted-foreground">
                <CountUp end={Count?.successfulMarriages} enableScrollSpy />
                </p>
              </div>
            </div>
          </div>
         
        
        </div>
      </section>
    );
};

export default SuccessInfo;