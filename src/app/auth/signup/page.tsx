import dynamic from 'next/dynamic';

const Signup = dynamic(() => import('@/components/pages/signup/Signup'));

const Page = () => {
  return <Signup />;
};
export default Page;
