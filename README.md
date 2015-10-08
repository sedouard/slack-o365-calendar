# slack-o365-calendar
[![Build Status](https://travis-ci.org/sedouard/slack-o365-calendar.svg?branch=master)](https://travis-ci.org/sedouard/slack-o365-calendar)

# Summary

This project creates a bridge between out of office information on Office365 calendars and the Slack collaboration platform. Users can log in using a form hosted by the bot to synchronize their calendar information. After calendar information is linked, the bot will respond to mentions of a given user to inform other users in the channel that the mentioned user is out of office (or otherwise unavailable).

# Configuration (.config.json)

````
{
  // The client ID provided for the Office 365 application
  "clientID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  
  // Client secret from the registration process for the Office 365 application
  "clientSecret": "someSecret",
  
  // MongoDB connection string
  "mongo_connection": "mongodb://MongoLab-rj:4rEBWb.CqOGPSoLjJ5.5xoeSr2U59nnWHhJdt7lkY4U-@ds034348.mongolab.com:34348/MongoLab-rj",
  
  // Slack application token
  "slack_token":"xoxb-12147075331-2g4UjEiZzEAQQ4Tn2Hh5W89n",
  
  // --- SNIP: Below configuration elements are for developers and power users ---
  
  // Return URL after the OAuth handshake has completed; safe to leave default
  "returnURL": "http://localhost:3000/auth/openid/return",
  
  // ?
  "skipUserProfile": true,
  
  // Metadata to use for the OAuth configuration with Azure 
  "identityMetadata": "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration",
  
  // Use code-based authentication
  "responseType": "code",
  
  // Use the HTTP POST verb in the OAuth response instead of HTTP GET 
  "responseMode": "form_post",
  
  // Realm to submit to OAuth
  "realm": "http://outlook.office.com/",
  
  // Automatically reconnect if we lose connection to Slack
  "slack_autoReconnect": true,
  
  // Automatically mark bot as away/active based on activity
  "slack_autoMark": true
}
````

# Contributing

## Step 1 Create or Find an Issue

Create a new issue or find one on this repo. Comment "I'll work on this!" so we'll know you're working on it.

## Step 2 Fork

Create a fork of this repo into your profile

## Step 3 Clone

```
# fork your url
git clone https://github.com/<your username>/slack-o365-calendar.git
gitt add remote upstream https://github.com/sedouard/slack-o365-calendar.git
```

## Step 4 Create a Feature

Create a feature branch by going into your repo folder and doing

`git checkout -b fix_or_feat_issue_number`

## Step 5 Code!

Do the code. Run `npm test` to ensure you're lint-free and follow code guidelines

## Step 6 Commit, Push

```
git add <whatever files you want to add>
git push origin fix_or_feat_issue_number
```

## Step 7 Create Pull Request

Come back to this repo, and click the green 'Create Pull Request' button.

