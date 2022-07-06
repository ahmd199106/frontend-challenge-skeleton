import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Users.module.scss'
import Header from '../../components/shared/Header'

const Users: NextPage = () => {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Team</h1>

          <p>Place your code here</p>
        </main>
      </div>
    </div>
  )
}

export default Users
