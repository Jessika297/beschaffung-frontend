import Head from "next/head";
import HeadSearch from "../../components/headSearch/headSearch";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <Head>
          <title>Beschaffung</title>
        </Head>
          <Link href="/shop">Shop</Link>
        <HeadSearch/>
        <main className={"font-bold"}>
          <div>Hallo dies ist die Homepage</div>
        </main>
      </>
  )
}
