## privacy-holder

Hide some sensitive data with character '*'

### Features
1. Support hide common user data like: email, phone number, id card etc.
2. Support Custom rules to hide sensitive data.
3. Test Coverage 100%

### Install

`yarn add privacy-holder`

or

`npm install privacy-holder`

### Usage

`const privacy = require('privacy-holder')`

then

`privacy.email("ihavecoke@163.com") // ih*******@163.com`

`privacy.name("ihavecoke") // *`

`privacy.name("i havecoke") // *havecoke`

`privacy.idCard("510122199102132018") // 510***19******2018`

`privacy.phoneNumber("13800000000") // 138****0000`

`privacy.all('any-string-will-replace-with-*') // ******************************`

