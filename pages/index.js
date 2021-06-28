import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Signup from '../components/Signup';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Signup />
    </Layout>
  );
}
