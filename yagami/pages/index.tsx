import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header/index';
import { Grid } from '@material-ui/core'
import OneCard from '../components/card';
import Button from '@material-ui/core/Button';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KCS矢上祭 -ゲーム開発班-</title>
        <meta name="KCSのゲーム開発班では2021矢上祭の出典としてゲームを個人で開発しました！ゲームはUE4やOpenGLを使ったゲームを作成しました！また、KCSに興味がありましたら入会お待ちしています！！" content="Generated by create next app" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="KCS矢上祭 -ゲーム開発班-" />
        <meta property="og:description" content="KCSのゲーム開発班では2021矢上祭の出典としてゲームを個人で開発しました！ゲームはUE4やOpenGLを使ったゲームを作成しました！また、KCSに興味がありましたら入会お待ちしています！！" />
        <meta property="og:url" content="https://yagami-phi.vercel.app/" />
        <meta property="og:image" content="/kcslogo.png" />
        <meta property="og:site_name" content="KCS矢上祭 -ゲーム開発班-" />
        <meta property="og:locale" content="ja_JP"  />
        <meta name="keywords" content="矢上祭,KCS,ゲーム,ゲーム開発班,OpenGL,UE4" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className={styles.divImg} >
          <img className={styles.img} src='/PC.jpg' />
          <h2 className={styles.imgText}>KCS矢上祭 -ゲーム開発班-</h2>
        </div>
        <div className={styles.spacer_medium} />
          <Grid container justifyContent='center' spacing={3}>
                <Grid item xs={12} sm={8} >
                  <div className={styles.onecard}>
                    <OneCard title={'RustyCraft'}
                      description={'マインクラフトっぽいゲームです。今はまだ動き回ることしかできないのでゲームとは言えないかもしれません。W、A、S、Dキーで移動、スペースでジャンプ、マウスで視点の回転ができます。ゲームエンジンを使わず、OpenGLを直接使ってゲームを作るという目標で制作しています。'}
                      gameLink={'https://yuma140902.github.io/RustyCraft/'}
                      gameLinkTitle={'ゲームを見てみる！'}
                      imgLink={'/minecraft.png'} 
                      shareLink={'https://twitter.com/intent/tweet?text=RustCraftをプレイしました！&url=https://yagami-phi.vercel.app/&hashtags=KCS,矢上祭'}
                    />
                    <OneCard title={'OldHouse'}
                      description={'10分ほどでできる脱出ゲーム。W、A、S、Dキーで移動、スペースでジャンプ、マウスで視点の回転、Tabでアイテムボックスの開閉、アイテムを右クリックで使用、ドヤやスイッチは左クリックです。'}
                      gameLink={'https://drive.google.com/file/d/13sLLDyUH4q_gqJbTXoiIo1z7LCBQqO2Z/view?usp=sharing'}
                      gameLinkTitle={'ゲームをダウンロードする！'}
                      imgLink={'/OldHouse.png'}
                      shareLink={'https://twitter.com/intent/tweet?text=OldHouseをプレイしました！&url=https://yagami-phi.vercel.app/&hashtags=KCS,矢上祭'}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <h1>KCSとは？</h1>
                  <p>
                    慶應義塾大学のコンピューターサークル、KCSです！
                    <br />
                    AI班・CG班・ゲーム開発班・音楽班・Web班に分かれて活動中です！！
                  </p>
                  <div className={styles.spacer_medium} />
                  <h1>入会について</h1>
                  <p>
                    下記からご応募ください
                    <br />
                    <div className={styles.spacer_small} />
                    ※入会費に3000円が必要となります。
                    <br />
                    ※記入に気づかない場合がございますので、TwitterのDMに連絡してくださると助かります。
                    <br />
                    <div className={styles.spacer_small} />
                    <Button href='https://forms.gle/LP3cLYPpQWATuVVB8' variant='contained' size="large" color="primary">
                      入会フォーム
                    </Button>
                  </p>
                </Grid>
            </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://kcs1959.jp"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©️ 2021 Computer Society
        </a>
      </footer>
    </div>
  )
}

export default Home
