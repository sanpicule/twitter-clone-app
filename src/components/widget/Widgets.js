import { Search } from '@mui/icons-material'
import React from 'react'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed';
import './Widget.css'
import { Stack, Typography } from '@mui/material';

const Widgets = () => {
  return (
    <div className='widgets'>
      <Stack direction='row' alignItems='center' className='search'>
        <Search className='search_icon' />
        <input placeholder='キーワード検索' className='search_input'></input>
      </Stack>
      <div className='widget_container'>
        <Typography className='widget_title'>固定されたツイート</Typography>
        <TwitterTweetEmbed
          tweetId={'1662898485593624576'}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="fcbarcelona_tr"
          options={{height: 400}}
        />
        <div className='widget_tweet_button'>
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