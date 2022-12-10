import Head from "next/head";
import BrandList from "../components/Aside/BrandList";
import DailyHits from "../components/Aside/DailyHits";
import Features from "../components/Section/Features";
import News from "../components/Section/News";
import Main from "../components/Wrapper/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mobile sell.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="grid lg:grid-cols-[300px_1fr_300px] gap-2">
          <aside className="flex flex-col gap-2  ">
            <BrandList />
          </aside>
          <section className="flex flex-col gap-2">
            <Features heading="Top Mobiles" num={[0, 5]} />
            <Features heading="New Mobiles" num={[6, 11]} />
            <div className="flex gap-2 flex-col xl:flex-row">
              <News />
              <div>Hello</div>
            </div>
          </section>
          <aside>
            <DailyHits />
          </aside>
        </div>
      </Main>
    </div>
  );
}
