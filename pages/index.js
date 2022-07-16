import { Banner } from '../components';

export default function Home() {
  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner banner="Collect & Sell NFTs just in one second" childStyles="md:text-4xl sm:text-2x1 xs=tesr-xl text-left" />
      </div>
    </div>
  );
}
