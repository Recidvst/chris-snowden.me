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
