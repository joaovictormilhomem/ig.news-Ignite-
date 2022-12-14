import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string,
    amount: Number
  }
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month.</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image
          width={336}
          height={521}
          src="/images/avatar.svg"
          alt="Girl coding"
        />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1LsRQmKXSi3JPIwENhaYt1ZT")

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat(
      "en-US", {
      style: "currency",
      currency: "USD"
    }).format(price.unit_amount / 100
    ),
  };

  return {
    props: {
      product
    }
  }
}
