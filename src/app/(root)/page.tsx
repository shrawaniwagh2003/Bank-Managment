import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { Section } from 'lucide-react'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName : 'Shrawani'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
       <HeaderBox
       type="greeting"
       title="Welcome"
       user= {loggedIn?.firstName || 'Guest'}
       subtext="access and manage your transactions efficiently "/>
       <TotalBalanceBox
       accounts = {[]}
       totalBanks={1}
       totalCurrentBalance={1250.50}
       />
        </header>
      </div>
    </section>
  )
}

export default Home