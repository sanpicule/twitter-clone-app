import { Search } from '@mui/icons-material'
import React from 'react'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed'
import styles from './styles/Widget.module.css'
import { Stack, Typography } from '@mui/material'

const Widgets = () => {
  return (
    <div className={styles.widgets}>
      <Stack direction='row' alignItems='center' className={styles.search}>
        <Search className={styles.search_icon} />
        <input placeholder='キーワード検索' className={styles.search_input}></input>
      </Stack>
      <div className={styles.widget_container}>
        <Typography className={styles.widget_title}>固定されたツイート</Typography>
        <TwitterTweetEmbed
          tweetId={'1662898485593624576'}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="fcbarcelona_tr"
          options={{height: 400}}
        />
        <div className={styles.widget_tweet_button}>
          <TwitterShareButton
            url={'https://twitter.com/fcbarcelona_tr'}
            options={{ text: '#reactjs', via: 'fcbarcelona_tr',  }}
          />
        </div>
      </div>
    </div>
  )
}

export default Widgets