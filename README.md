# slack-o365-calendar
[![Build Status](https://travis-ci.org/sedouard/slack-o365-calendar.svg?branch=master)](https://travis-ci.org/sedouard/slack-o365-calendar)

This little Slack Bot connects your Office 365 Calendar with your team Slack account to check if you're out of office. To set yourself 'out of office' simply place a meeting on your calendar with the subject 'OOO' or 'OOF' and this bot will let any teammates who @mention you that you're out of of office.

# Configuration (.config.json)

Create a file called `.config.json` and fill it out with your application secrets. You can also make each property an environment variable.

```json
{
  // The client ID provided for the Office 365 application
  "clientID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  // Client secret from the registration process for the Office 365 application
  "clientSecret": "someSecret",
  // MongoDB connection string
  "mongo_connection": "<mongodb connection string>",
  // Slack application token
  "slack_token":"slack-token-here",
  // --- SNIP: Below configuration elements are for developers and power users ---
  // Return URL after the OAuth handshake has completed; safe to leave default
  "returnURL": "http://localhost:3000/auth/openid/return",
  // set to true for Azure Active Directory
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
```
