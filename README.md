## Installation

Download and install [nodejs](https://nodejs.org) and [git](https://git-scm.com/downloads)

Make sure nodejs version is equal or greater than 10.

The results are saved to a [mongodb](https://www.mongodb.com/) database, so for a full test you either need a running mongodb or an instance at [mlab](https://mlab.com/)

```sh
git clone https://github.com/hv7214/Connect-Psyche
cd Connect-Psyche
npm install
vim config.js # Edit config with vim (or your favorite editor)
npm run dev
```
Open web-browser at http://localhost:3000
