# privacy-holder

Hidden Privacy String with *

## How to use ?

```bash

// install with yarn 
yarn add privacy-holder

// require to your code
const privacy = require('privacy-holder')

// email
privacy.email("ihavecoke@163.com") // ih*******@163.com

// ID Card
privacy.idCard("510122199102132018") // 510***19******2018

// phone number
privacy.email("13800000000") // 138****0000

// all 
privacy.all('any-string-will-replace-with-*') // ******************************

```
