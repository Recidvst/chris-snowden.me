### 1.5.0 (2023-12-02)

#### 1.3.2 (2023-11-26)

##### New Features

- **mail:** hide contact page and disable mail send for now as cancelling mailgun ([a22f837a](https://github.com/Recidvst/chris-snowden.me/commit/a22f837a9b1eb8966f84253741ca708e14a89d1e))

##### Bug Fixes

- **mail:** ignore contact page from sitemap as hiding for now ([d2157b0c](https://github.com/Recidvst/chris-snowden.me/commit/d2157b0c738f58803dd8616bb4ecf517c809ab95))

#### 1.3.1 (2022-03-30)

##### Build System / Dependencies

- **deps:** upgrade svelte widget dependencies ([9f942d35](https://github.com/Recidvst/chris-snowden.me/commit/9f942d35fa1b16f1e2e9e83d236cf5bbf01f4e39))

### 1.3.0 (2022-03-30)

##### New Features

- **mail:** migrate from gmail to mailgun for SMTP ([96ec57c4](https://github.com/Recidvst/chris-snowden.me/commit/96ec57c4724d23b8ba7fb1dff96ac902561a94a9))

#### 1.2.5 (2022-03-30)

##### Build System / Dependencies

- **deps:** upgrade dependencies ([3a20f2e2](https://github.com/Recidvst/chris-snowden.me/commit/3a20f2e2a30e2fe3d734bb32221674d965d97f57))

#### 1.2.4 (2022-03-29)

##### New Features

- **contact:** update security policy headers to check if breaking form ([b8d95ff8](https://github.com/Recidvst/chris-snowden.me/commit/b8d95ff859ce9e7b20d4cad9b53e93280718fb2f))

#### 1.2.3 (2022-03-29)

##### New Features

- **projects:** update main blurb ([b74f7999](https://github.com/Recidvst/chris-snowden.me/commit/b74f799902d120aa76a29606c960e5a40d9bd84d))

#### 1.2.2 (2022-03-29)

##### New Features

- **projects:** remove work page for now ([e8c816fc](https://github.com/Recidvst/chris-snowden.me/commit/e8c816fc57aba47c7c809c69032b1e506ee8da0f))
- **caching:** init custom browser caching for github and npm data ([21280973](https://github.com/Recidvst/chris-snowden.me/commit/21280973ce3d009c4a46fa6d434d156d498b7c52))

##### Bug Fixes

- **sensors:** testing ambient light sensor ([b24d3224](https://github.com/Recidvst/chris-snowden.me/commit/b24d32246a3835865ff5a5d6a842eac356a9956e))

##### Refactors

- **sensors:** add further check to the ambientlightsensor function - btw this basically doesn't work ([df83ed6b](https://github.com/Recidvst/chris-snowden.me/commit/df83ed6bb4c8a594ae93caac4592d1deab0e787d))

#### 1.2.1 (2021-05-21)

##### New Features

- **sensors:**
  - add an animated ghost svg, triggered when dark or after 9pm ([0969160b](https://github.com/Recidvst/chris-snowden.me/commit/0969160be37802932da8691584cbcc07f081bd62))
  - add ambient light sensor watcher ([b9620056](https://github.com/Recidvst/chris-snowden.me/commit/b9620056b1817a5df41cdb048df9f58a45e2f0cc))

### 1.2.0 (2021-05-21)

##### New Features

- **projects:**
  - add final(ish) draft project page copy | style up the page | some general tweaks ([dd8a52cf](https://github.com/Recidvst/chris-snowden.me/commit/dd8a52cfe43f1d217e5849094f94978f60105141))
  - add new projects page with first draft of content ([9f00d375](https://github.com/Recidvst/chris-snowden.me/commit/9f00d375543be2b390367fef2c0f63a10d83ee58))
- **netlify:** add security headers ([246b37c5](https://github.com/Recidvst/chris-snowden.me/commit/246b37c5ae3230628604000eb428dc6aff8e5c32))

##### Bug Fixes

- **netlify:**
  - fix blocked analytics image resource ([2e1f8236](https://github.com/Recidvst/chris-snowden.me/commit/2e1f8236cdb39dd45b21c39b036b799e92a1a4a3))
  - csp unsafe needs quotes.. ([0d15efd8](https://github.com/Recidvst/chris-snowden.me/commit/0d15efd872e85ef6e24c8895b0eb1acc42a2b525))
  - allow unsafe csp header for now, will use hashes later ([f3673f2b](https://github.com/Recidvst/chris-snowden.me/commit/f3673f2ba0d926bf1bda76bab3a11773fc817fbd))
  - security headers to be set for all pages specifically, fix content security syntax ([ecbc0cc5](https://github.com/Recidvst/chris-snowden.me/commit/ecbc0cc5f2dfe5b2ce13ce3c7325a7c5b1944d5d))

##### Refactors

- **styles:** small css tidy ([ca46b3dc](https://github.com/Recidvst/chris-snowden.me/commit/ca46b3dc43d8b837c8afb0419a5047a5a9776d80))

#### 1.1.6 (2021-05-19)

##### New Features

- **speedlify:**
  - fix issues with speedlify-score component and add to separate page for now ([bf49a95e](https://github.com/Recidvst/chris-snowden.me/commit/bf49a95ead23be14e5730b269d4138371f8fdf32))
  - init speedlify-score web component code and logic. Needs testing. ([cf83f44d](https://github.com/Recidvst/chris-snowden.me/commit/cf83f44ddcc4c90a142522245f7648379ed90939))

#### 1.1.5 (2021-05-17)

##### New Features

- **performance:** add preconnect for npm, github, ga ([65fa31df](https://github.com/Recidvst/chris-snowden.me/commit/65fa31df2e0595531bd7618aa7a006ef3b9490d9))
- **contact:** add a loading icon when form submitted | also add missing safelist items ([c9e7253f](https://github.com/Recidvst/chris-snowden.me/commit/c9e7253fbf2714b725680ef91f0fe6b41588a44d))

##### Bug Fixes

- **docs:** remove duplicated changelog entry ([51477b4a](https://github.com/Recidvst/chris-snowden.me/commit/51477b4a619ad8e9f04902b84415a67c4c0b63c5))

##### Refactors

- **performance:** tweak preload links | add font-display rule ([85a584b6](https://github.com/Recidvst/chris-snowden.me/commit/85a584b6e90903df95e6288f8c539d126b368286))

#### 1.1.4 (2021-05-12)

##### New Features

- **svelte:** add a skeleton loading component for the github repos widget ([718014f1](https://github.com/Recidvst/chris-snowden.me/commit/718014f1bcc3526340b8807e8bc2717bdd7dda79))

##### Bug Fixes

- **styles:** add dynamically added classes to the purgecss safelist ([9e478c26](https://github.com/Recidvst/chris-snowden.me/commit/9e478c26b5f51af15ea1c52cab929b17e0509eda))

#### 1.1.3 (2021-05-09)

##### New Features

- **analytics:** add google analytics to site ([d113b67b](https://github.com/Recidvst/chris-snowden.me/commit/d113b67b221373eb6dcd6af44e2288bc971c81cd))

#### 1.1.2 (2021-05-08)

##### New Features

- **cache:** use 11ty cache plugin to fetch google font and avoid a css network request ([33371875](https://github.com/Recidvst/chris-snowden.me/commit/3337187544934409663b6170a409bb8a81e9b5db))

##### Bug Fixes

- **svelte:** no need for map file to be passed ([8ea3c2e2](https://github.com/Recidvst/chris-snowden.me/commit/8ea3c2e2ec64a27adf0f87dbcd435e236e11b234))

#### 1.1.1 (2021-05-08)

##### New Features

- **contact:** add basic scroll to message when form completed ([28b6c625](https://github.com/Recidvst/chris-snowden.me/commit/28b6c6254a0526bd8bc78d66732246119832ae16))
- **cache:** adding headers file with cache rule ([c62893ee](https://github.com/Recidvst/chris-snowden.me/commit/c62893ee911bf44a5e410d63acca57c8eb1d924d))
- **meta:**
  - adding noreferrer noopener | allow lines on mobile again (2) ([45855eab](https://github.com/Recidvst/chris-snowden.me/commit/45855eab6f8cb8b9a02f589dbb542716504febaa))
  - adding noreferrer noopener | allow lines on mobile again ([98d3a96e](https://github.com/Recidvst/chris-snowden.me/commit/98d3a96e47266fa63f4166ec1dbaecbc692dbefd))

##### Bug Fixes

- **styling:** tweak some styling to fix layout issues ([58aff596](https://github.com/Recidvst/chris-snowden.me/commit/58aff5967b95d3a4766b1727545eeec30e091896))

### 1.1.0 (2021-05-02)

##### Build System / Dependencies

- **env:** update package files to pull in env values correctly | switch off sw for now as broken ([aec39c95](https://github.com/Recidvst/chris-snowden.me/commit/aec39c95894a56b4b540a26c9167494bc31d565e))

##### Continuous Integration

- **build:**
  - got to install svelte app deps ([d04041e2](https://github.com/Recidvst/chris-snowden.me/commit/d04041e25b0f7555e3bacf482d0a4bce9180bc88))
  - travis and netlify not playing nice with env vars so fuck it, netlify alone ([124038a6](https://github.com/Recidvst/chris-snowden.me/commit/124038a68b834e6972f1ae5dd54b3ca36d1a949e))
  - specific install stage ([40d20383](https://github.com/Recidvst/chris-snowden.me/commit/40d203832fc68c7ad43416506c98782fdb7a250c))
  - fix bad path in travis file ([2c8336c4](https://github.com/Recidvst/chris-snowden.me/commit/2c8336c4d235c280b4c8ffe415e1db341cd127ed))
  - init travis for building and deploying to netlify ([d73ae5e0](https://github.com/Recidvst/chris-snowden.me/commit/d73ae5e0dc2ca4ed18efce25027dc15b1f711dbe))
- **travis:**
  - adding secret env variables ([8e5a1f66](https://github.com/Recidvst/chris-snowden.me/commit/8e5a1f66dff7a9591610d1de63d6756b4c7360f1))
  - moving away from stages as files are not persisted ([0d9feddd](https://github.com/Recidvst/chris-snowden.me/commit/0d9fedddfa6466d0708436fefb8616392f584348))
  - try auth again.... grr ([34e4a229](https://github.com/Recidvst/chris-snowden.me/commit/34e4a2290c1d5b67a2eb4adcfdda8c86f694cc04))
  - remove netlify auth flags (done automatically?) ([79c12f9d](https://github.com/Recidvst/chris-snowden.me/commit/79c12f9d0ea0d187219441315b44158fdf5c9c56))
- **svelte:** travis complaining about dev deps ([e7e16160](https://github.com/Recidvst/chris-snowden.me/commit/e7e1616063ef5b00d821faa8477b43c44d150974))

##### New Features

- **azure:** add error serialisation to return better errors from function app ([65e8bcd8](https://github.com/Recidvst/chris-snowden.me/commit/65e8bcd877da580e6ea99d98b91d4d31a6ff09d1))
- **meta:** add preload meta tag ([3c69009d](https://github.com/Recidvst/chris-snowden.me/commit/3c69009d8d6958c95cdd7ae8c7f92eb2ea12f5f2))

##### Bug Fixes

- **style:**
  - improve style of form success message ([214a7bae](https://github.com/Recidvst/chris-snowden.me/commit/214a7bae864628e5f3f457eb14f16012ab96b207))
  - improve repo details on mobile ([8f111816](https://github.com/Recidvst/chris-snowden.me/commit/8f111816098589c01c31f449bcf6e633a00501d6))
- **travis:** remove bad cd cmd ([71807c83](https://github.com/Recidvst/chris-snowden.me/commit/71807c839c55671c2e60caf4e7b6e25e38532c3f))
- **build:**
  - missing package lock files (2) ([1902a975](https://github.com/Recidvst/chris-snowden.me/commit/1902a97500fa1b1398b57cc74f150859cea498ca))
  - missing package lock files ([f543dcff](https://github.com/Recidvst/chris-snowden.me/commit/f543dcff07e6a15bee01d20a74918304e579a51f))
- **svelte:** actually, don't show built svelte files.. ([2590df44](https://github.com/Recidvst/chris-snowden.me/commit/2590df44cae5729c86d0ada5e02d6a0b16f66713))

#### 1.0.3 (2021-05-01)

##### Bug Fixes

- **svelte:** we need to commit the svelte build files otherwise they are not available to netlify ([a3fd7e07](https://github.com/Recidvst/chris-snowden.me/commit/a3fd7e07dc9d4e121ae0ba4d2ad932e448a2ef31))

#### 1.0.2 (2021-05-01)

##### Bug Fixes

- **serviceworker:** fix issues with service worker not having access to process.env ([33feae59](https://github.com/Recidvst/chris-snowden.me/commit/33feae598b4077b963d9fb821e9921552a3aab2d))

#### 1.0.1 (2021-05-01)

##### Build System / Dependencies

- **maintenance:** migrate to husky v5 ([4097898f](https://github.com/Recidvst/chris-snowden.me/commit/4097898fa1bc19356b2a1f84a1138e17177da262))
- **changelog:** update release process commands ([e04b6bae](https://github.com/Recidvst/chris-snowden.me/commit/e04b6bae7cf73710cb9beef21a1c30cd33fa02b3))
- **tools:** add sourcemaps and fix minif | add purgecss and inline | add quicklink prefetching ([0ce15d92](https://github.com/Recidvst/chris-snowden.me/commit/0ce15d92b28a55d9be2982b539fcf2176ec63b38))
- **migrate:**
  - re-instating neon flicker, svg lines and scrambling letters functionality for title ([6853e721](https://github.com/Recidvst/chris-snowden.me/commit/6853e721cbe387c8ef6058b6f0cf79c6e1ba57d2))
  - remove snowpack config ([daa7e3bb](https://github.com/Recidvst/chris-snowden.me/commit/daa7e3bbbbdeb06d1ff14835d896f7251b2670f9))
  - move from parcel/snowpack to rollup | js and css build working fine ([bbe2a535](https://github.com/Recidvst/chris-snowden.me/commit/bbe2a535011464eb9f6139c3109f70a88baddb88))
  - moving across js and css | update meta info | static assets pulling in ([1d25640d](https://github.com/Recidvst/chris-snowden.me/commit/1d25640da80c85e40d7389aa825733b05afecc54))
  - swap back to njk due to isses | added parcel for assets building | tweaked structure ([9d5c1ed6](https://github.com/Recidvst/chris-snowden.me/commit/9d5c1ed6cc09e77b68470302bc2c4644d54e7d0a))
  - swap to ejs | rewrite permalinks | add cachebust ([8f5be72e](https://github.com/Recidvst/chris-snowden.me/commit/8f5be72e632c1b24e93807f38f84a34e71a89733))
  - scaffold eleventy app in place of Nuxt ([b7265b21](https://github.com/Recidvst/chris-snowden.me/commit/b7265b21a476c05acf3ffae223bb69e0cbabac80))

##### Continuous Integration

- **netlify:**
  - specify node version for netlify build ([515388a0](https://github.com/Recidvst/chris-snowden.me/commit/515388a06ff07e9f34100ba128e3bb0ab38656d2))
  - move all dev deps to deps as netlify failing and cba to figure it out ([77392de4](https://github.com/Recidvst/chris-snowden.me/commit/77392de4ce5368c98887fdf6c4eb4ed787cc343d))

##### Documentation Changes

- **readme:**
  - add verison badge ([82cafee6](https://github.com/Recidvst/chris-snowden.me/commit/82cafee6d96155f82b45f1bfdc68484192fbf1f5))
  - add netlify status badge ([6788e825](https://github.com/Recidvst/chris-snowden.me/commit/6788e8257d33e47bd583d8fb5b16bfd6d5c16a1c))
  - add todo list and status badge to readme ([1efb72e4](https://github.com/Recidvst/chris-snowden.me/commit/1efb72e4761964180087458688e4e4cc6447c293))
  - update readme with tool links and added detail ([0434f052](https://github.com/Recidvst/chris-snowden.me/commit/0434f052b40268255b6f5f1d38eab32072e147be))
  - add stack info to readme ([44a2d5bd](https://github.com/Recidvst/chris-snowden.me/commit/44a2d5bdf283bd4aec296e72206d2f559f953e8e))
- update readme ([647cc225](https://github.com/Recidvst/chris-snowden.me/commit/647cc22599bb5646b0fa980d1656320f9b78cd13))

##### New Features

- **svelte:**
  - componentise svelte widget ([3b10ea88](https://github.com/Recidvst/chris-snowden.me/commit/3b10ea88f608001283e14f3605dcc30d0f296093))
  - further stylign for widget and add badges with icons ([c882bcea](https://github.com/Recidvst/chris-snowden.me/commit/c882bceac239cf4ee775d98953363bd2fee19be6))
  - basic styling for svelte github component ([c9b0bf5d](https://github.com/Recidvst/chris-snowden.me/commit/c9b0bf5d1567ee996cdc13e5b4b1dd79bf8dd31f))
  - pull data from GitHub and NPM for repos widget ([ab7c7eaf](https://github.com/Recidvst/chris-snowden.me/commit/ab7c7eaf53e9ca0fe985dbb39f2b319f57cc9312))
  - add initial svelte component and integrate with build process ([5c0a4061](https://github.com/Recidvst/chris-snowden.me/commit/5c0a4061a8ad57d933a201d70a3f11e66084b680))
- **social:** add social icon logos and style ([7ae9e81e](https://github.com/Recidvst/chris-snowden.me/commit/7ae9e81e9a945666d682a850543cf4d01053292d))
- **contact:**
  - add a progress bar to the form | tweak some styling | fix meta tag bug ([87858713](https://github.com/Recidvst/chris-snowden.me/commit/87858713553449fbabdf1c911ea0c27b61eb3fa5))
  - further form styling | add nes fonts ([38e77ec8](https://github.com/Recidvst/chris-snowden.me/commit/38e77ec8ebe19252bbb8f740a39627d2efb02ee9))
  - add NES styling lib add configure with form ([d1812164](https://github.com/Recidvst/chris-snowden.me/commit/d18121640cfea80cecf65934922755da9d0df7c1))
  - add honeypot and validation | add status message | clear fields ([7e5a2eb4](https://github.com/Recidvst/chris-snowden.me/commit/7e5a2eb489ad04cc50e3c74830e339ee9d0ec3b7))
  - contact form wired up to azure ([2e00e0b5](https://github.com/Recidvst/chris-snowden.me/commit/2e00e0b5541c217392ba8cae1be5fe903dedd4a6))
  - add basic contact form | addd active state to menu items ([3387cf2e](https://github.com/Recidvst/chris-snowden.me/commit/3387cf2ea03d32d230ea9e970e50eeda4d7baa2d))
- **serverless:**
  - Azure function receiving data correctly and triggering populated email ([cd05a848](https://github.com/Recidvst/chris-snowden.me/commit/cd05a84800859f794e314042632e70a33ab71bfa))
  - add handlebars email template for contact form emails ([a0421dae](https://github.com/Recidvst/chris-snowden.me/commit/a0421dae056a6778854e71ca6f6bd4268cde9dff))
  - sendMail Azure function working but needs tidying up ([5759a131](https://github.com/Recidvst/chris-snowden.me/commit/5759a13114bc4f81ee11c437032f2b3a20c83ce5))
  - init Azure function app ([79154477](https://github.com/Recidvst/chris-snowden.me/commit/79154477995aa6f17825db9aa99901c8091dc73c))
- **email:** tweak email template output ([bb938abe](https://github.com/Recidvst/chris-snowden.me/commit/bb938abe1f1209723e4bb4c472c9e435143c27d8))
- **pwa:** generate custom service worker and release task ([1536d88b](https://github.com/Recidvst/chris-snowden.me/commit/1536d88ba354c03774a6dd1c23484698f2c24efe))
- **sitemap:** add sitemap.xml ([870d9f9d](https://github.com/Recidvst/chris-snowden.me/commit/870d9f9daa9437563f7abdec273292dcc51105fe))
- **headings:** add scrambler to subtitles and align timings with title ([5d9e25b5](https://github.com/Recidvst/chris-snowden.me/commit/5d9e25b548c260d0b338b6eaccf5d7d6f3548389))
- **menu:** add main menu with data source | also tweak some config ([1e5fa9b9](https://github.com/Recidvst/chris-snowden.me/commit/1e5fa9b9540dda93e4f42bd5fa5eac7b6b48f840))

##### Bug Fixes

- **build:**
  - html minifier breaking inlined purge css ([9749220a](https://github.com/Recidvst/chris-snowden.me/commit/9749220a4c0b4ffee37e51eaef484af197fd8864))
  - fix issues with env variables not being correct values ([6d7bf8ff](https://github.com/Recidvst/chris-snowden.me/commit/6d7bf8ff58c69e1ff20351ca4924b3f03ac05001))
- **maintenance:** fix post-commit file ([9535f53a](https://github.com/Recidvst/chris-snowden.me/commit/9535f53aba7b6051a295a4478fd348fdb5112018))

##### Refactors

- **font:** fontawesome no longer needed ([08aa506a](https://github.com/Recidvst/chris-snowden.me/commit/08aa506ae3f00f69d734bed2c7802d2646d06cb8))
- **pwa:** only use the service worker for prod build past v1.0.0 ([080dec84](https://github.com/Recidvst/chris-snowden.me/commit/080dec8404c2b6c9024875befa31de4add673c36))
- **menu:** projects page can be mvp + 1 ([de411462](https://github.com/Recidvst/chris-snowden.me/commit/de4114624f7e444c2902ff28721ff4928f0d5bc0))
- **theme:** add new fonts, new colours | add macro for page titles ([4fa94eeb](https://github.com/Recidvst/chris-snowden.me/commit/4fa94eebf1140251856b4d317afca6685357ba82))

## 1.0.0 (2021-05-01)

##### Build System / Dependencies

- **maintenance:** migrate to husky v5 ([4097898f](https://github.com/Recidvst/chris-snowden.me/commit/4097898fa1bc19356b2a1f84a1138e17177da262))
- **changelog:** update release process commands ([e04b6bae](https://github.com/Recidvst/chris-snowden.me/commit/e04b6bae7cf73710cb9beef21a1c30cd33fa02b3))
- **tools:** add sourcemaps and fix minif | add purgecss and inline | add quicklink prefetching ([0ce15d92](https://github.com/Recidvst/chris-snowden.me/commit/0ce15d92b28a55d9be2982b539fcf2176ec63b38))
- **migrate:**
  - re-instating neon flicker, svg lines and scrambling letters functionality for title ([6853e721](https://github.com/Recidvst/chris-snowden.me/commit/6853e721cbe387c8ef6058b6f0cf79c6e1ba57d2))
  - remove snowpack config ([daa7e3bb](https://github.com/Recidvst/chris-snowden.me/commit/daa7e3bbbbdeb06d1ff14835d896f7251b2670f9))
  - move from parcel/snowpack to rollup | js and css build working fine ([bbe2a535](https://github.com/Recidvst/chris-snowden.me/commit/bbe2a535011464eb9f6139c3109f70a88baddb88))
  - moving across js and css | update meta info | static assets pulling in ([1d25640d](https://github.com/Recidvst/chris-snowden.me/commit/1d25640da80c85e40d7389aa825733b05afecc54))
  - swap back to njk due to isses | added parcel for assets building | tweaked structure ([9d5c1ed6](https://github.com/Recidvst/chris-snowden.me/commit/9d5c1ed6cc09e77b68470302bc2c4644d54e7d0a))
  - swap to ejs | rewrite permalinks | add cachebust ([8f5be72e](https://github.com/Recidvst/chris-snowden.me/commit/8f5be72e632c1b24e93807f38f84a34e71a89733))
  - scaffold eleventy app in place of Nuxt ([b7265b21](https://github.com/Recidvst/chris-snowden.me/commit/b7265b21a476c05acf3ffae223bb69e0cbabac80))

##### Continuous Integration

- **netlify:**
  - specify node version for netlify build ([515388a0](https://github.com/Recidvst/chris-snowden.me/commit/515388a06ff07e9f34100ba128e3bb0ab38656d2))
  - move all dev deps to deps as netlify failing and cba to figure it out ([77392de4](https://github.com/Recidvst/chris-snowden.me/commit/77392de4ce5368c98887fdf6c4eb4ed787cc343d))

##### Documentation Changes

- **readme:**
  - add netlify status badge ([6788e825](https://github.com/Recidvst/chris-snowden.me/commit/6788e8257d33e47bd583d8fb5b16bfd6d5c16a1c))
  - add todo list and status badge to readme ([1efb72e4](https://github.com/Recidvst/chris-snowden.me/commit/1efb72e4761964180087458688e4e4cc6447c293))
  - update readme with tool links and added detail ([0434f052](https://github.com/Recidvst/chris-snowden.me/commit/0434f052b40268255b6f5f1d38eab32072e147be))
  - add stack info to readme ([44a2d5bd](https://github.com/Recidvst/chris-snowden.me/commit/44a2d5bdf283bd4aec296e72206d2f559f953e8e))
- update readme ([647cc225](https://github.com/Recidvst/chris-snowden.me/commit/647cc22599bb5646b0fa980d1656320f9b78cd13))

##### New Features

- **svelte:**
  - componentise svelte widget ([3b10ea88](https://github.com/Recidvst/chris-snowden.me/commit/3b10ea88f608001283e14f3605dcc30d0f296093))
  - further stylign for widget and add badges with icons ([c882bcea](https://github.com/Recidvst/chris-snowden.me/commit/c882bceac239cf4ee775d98953363bd2fee19be6))
  - basic styling for svelte github component ([c9b0bf5d](https://github.com/Recidvst/chris-snowden.me/commit/c9b0bf5d1567ee996cdc13e5b4b1dd79bf8dd31f))
  - pull data from GitHub and NPM for repos widget ([ab7c7eaf](https://github.com/Recidvst/chris-snowden.me/commit/ab7c7eaf53e9ca0fe985dbb39f2b319f57cc9312))
  - add initial svelte component and integrate with build process ([5c0a4061](https://github.com/Recidvst/chris-snowden.me/commit/5c0a4061a8ad57d933a201d70a3f11e66084b680))
- **social:** add social icon logos and style ([7ae9e81e](https://github.com/Recidvst/chris-snowden.me/commit/7ae9e81e9a945666d682a850543cf4d01053292d))
- **contact:**
  - add a progress bar to the form | tweak some styling | fix meta tag bug ([87858713](https://github.com/Recidvst/chris-snowden.me/commit/87858713553449fbabdf1c911ea0c27b61eb3fa5))
  - further form styling | add nes fonts ([38e77ec8](https://github.com/Recidvst/chris-snowden.me/commit/38e77ec8ebe19252bbb8f740a39627d2efb02ee9))
  - add NES styling lib add configure with form ([d1812164](https://github.com/Recidvst/chris-snowden.me/commit/d18121640cfea80cecf65934922755da9d0df7c1))
  - add honeypot and validation | add status message | clear fields ([7e5a2eb4](https://github.com/Recidvst/chris-snowden.me/commit/7e5a2eb489ad04cc50e3c74830e339ee9d0ec3b7))
  - contact form wired up to azure ([2e00e0b5](https://github.com/Recidvst/chris-snowden.me/commit/2e00e0b5541c217392ba8cae1be5fe903dedd4a6))
  - add basic contact form | addd active state to menu items ([3387cf2e](https://github.com/Recidvst/chris-snowden.me/commit/3387cf2ea03d32d230ea9e970e50eeda4d7baa2d))
- **serverless:**
  - Azure function receiving data correctly and triggering populated email ([cd05a848](https://github.com/Recidvst/chris-snowden.me/commit/cd05a84800859f794e314042632e70a33ab71bfa))
  - add handlebars email template for contact form emails ([a0421dae](https://github.com/Recidvst/chris-snowden.me/commit/a0421dae056a6778854e71ca6f6bd4268cde9dff))
  - sendMail Azure function working but needs tidying up ([5759a131](https://github.com/Recidvst/chris-snowden.me/commit/5759a13114bc4f81ee11c437032f2b3a20c83ce5))
  - init Azure function app ([79154477](https://github.com/Recidvst/chris-snowden.me/commit/79154477995aa6f17825db9aa99901c8091dc73c))
- **email:** tweak email template output ([bb938abe](https://github.com/Recidvst/chris-snowden.me/commit/bb938abe1f1209723e4bb4c472c9e435143c27d8))
- **pwa:** generate custom service worker and release task ([1536d88b](https://github.com/Recidvst/chris-snowden.me/commit/1536d88ba354c03774a6dd1c23484698f2c24efe))
- **sitemap:** add sitemap.xml ([870d9f9d](https://github.com/Recidvst/chris-snowden.me/commit/870d9f9daa9437563f7abdec273292dcc51105fe))
- **headings:** add scrambler to subtitles and align timings with title ([5d9e25b5](https://github.com/Recidvst/chris-snowden.me/commit/5d9e25b548c260d0b338b6eaccf5d7d6f3548389))
- **menu:** add main menu with data source | also tweak some config ([1e5fa9b9](https://github.com/Recidvst/chris-snowden.me/commit/1e5fa9b9540dda93e4f42bd5fa5eac7b6b48f840))

##### Bug Fixes

- **build:** fix issues with env variables not being correct values ([6d7bf8ff](https://github.com/Recidvst/chris-snowden.me/commit/6d7bf8ff58c69e1ff20351ca4924b3f03ac05001))
- **maintenance:** fix post-commit file ([9535f53a](https://github.com/Recidvst/chris-snowden.me/commit/9535f53aba7b6051a295a4478fd348fdb5112018))

##### Refactors

- **font:** fontawesome no longer needed ([08aa506a](https://github.com/Recidvst/chris-snowden.me/commit/08aa506ae3f00f69d734bed2c7802d2646d06cb8))
- **pwa:** only use the service worker for prod build past v1.0.0 ([080dec84](https://github.com/Recidvst/chris-snowden.me/commit/080dec8404c2b6c9024875befa31de4add673c36))
- **menu:** projects page can be mvp + 1 ([de411462](https://github.com/Recidvst/chris-snowden.me/commit/de4114624f7e444c2902ff28721ff4928f0d5bc0))
- **theme:** add new fonts, new colours | add macro for page titles ([4fa94eeb](https://github.com/Recidvst/chris-snowden.me/commit/4fa94eebf1140251856b4d317afca6685357ba82))
