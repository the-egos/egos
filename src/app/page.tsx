// import HomeComponent from '@/components/pages/home/HomeComponent';
import dynamic from 'next/dynamic';

const HomeComponent = dynamic(
  () => import('@/components/pages/home/HomeComponent'),
);

export default async function Home() {
  const common = { alt: 'Test', width: 800, height: 400 };

  return (
    <main className={'main'}>
      {/* <Suspense fallback={<Loading />}> */}
      <HomeComponent />
      {/* </Suspense> */}
    </main>
  );
}
