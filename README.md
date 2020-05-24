## Details
This project is made during the CSN-252 course led by Prof. Sandeep kumar.

Team members:
1. Harshit Verma
2. Ishan Pandey.
3. Ayush Mangal.
4. Ashish Ucheniya.
5. Anuj Gupta.

This is a personality based recommendation system which can be used in social networking sites. 

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

# Note
1. It needs internet connection because we are using cloud database(mLab).
2. Result make take some time(10-20 seconds), because we have taken *free* subscription of cloud database.
