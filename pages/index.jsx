/*
 * @Description:
 * @Version: 1.0
 * @Autor: xuhanfeng
 * @Date: 2023-05-02 16:56:05
 * @LastEditors: xuhanfeng
 * @LastEditTime: 2023-05-02 18:31:55
 */
import Head from 'next/head'
import Header from '../components/Header'
import Jackpots from '../components/Jackpots'
// try to get the block chain
import { getLotteries } from '@/services/blockchain.srr'

export default function Home({ jackpots }) {
  return (
    <div>
      <Head>
        <title>Lottery Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-slate-100">
        <Header />
        <Jackpots jackpots={jackpots} />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await getLotteries()
  return {
    props: { jackpots: JSON.parse(JSON.stringify(data)) },
  }
}
