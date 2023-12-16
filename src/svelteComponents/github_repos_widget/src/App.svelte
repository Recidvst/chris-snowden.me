<script>
  // app prop
  export let direction;

  // cache util
  import { putCacheItemManually } from './utils/cache/add';
  import { getCacheItem } from './utils/cache/get';

  // components
	import RepoDetails from './RepoDetails.svelte';
	import RepoDetailsSkeleton from './RepoDetailsSkeleton.svelte';

  // constants
  const NPM_API = 'https://api.npmjs.org/';
  const GITHUB_API = 'https://api.github.com/';

  const today = new Date();
  const todayFormatted = today.toISOString().split('T')[0];

  const NPM_DOWNLOADS_PATH = `downloads/point/2014-02-01:${todayFormatted}/`;
  const GITHUB_USERS_PATH = 'users/';

  // HTTP REQUESTS
  const fetchNPMPackageDownloads = async (packageName) => {
    const npmTargetURL = `${NPM_API}${NPM_DOWNLOADS_PATH}${packageName}`;

    const inCacheResults = await getCacheItem('chris-snowden.me/npm', npmTargetURL);
    // return early if cache found
    if (inCacheResults) {
      return {
        number: inCacheResults
      };
    }

    const response = await fetch(`${npmTargetURL}`);
    const data = await response.json();
    if (data?.downloads) {
      // add results to browser cache
      putCacheItemManually('chris-snowden.me/npm', npmTargetURL, JSON.stringify(data.downloads), '7'); // one week cache
      return {
        number: data.downloads
      }
    }
    return {
      number: 0
    }
  }

  const fetchGithubReposKeyInfo = async (githubUser) => {

    const githubTargetURL = `${GITHUB_API}${GITHUB_USERS_PATH}${githubUser}/repos?per_page=100&sort=updated&direction=desc`;

    const inCacheResults = await getCacheItem('chris-snowden.me/github', githubTargetURL);

    // return early if cache found
    if (inCacheResults) {
      return inCacheResults;
    }

    let headers = new Headers()
    headers.append('Accept', 'application/vnd.github.v3+json')
    headers.append('Accept', 'application/vnd.github.mercy-preview+json')
    headers.append('Authorization', 'token ' + process.env.GITHUB_ACCESS_TOKEN);

    const response = await fetch(
      githubTargetURL, {
        method: 'GET',
        headers
      }
    )
    const data = await response.json();
    if (data && data.length > 0) {
      // filter out non-featured items and unnecessary data values
      const featuredRepos = await data.reduce( async function(filteredP, repo) {
        const filtered = await filteredP;

        if (repo.topics.includes('featured') && (repo.stargazers_count > 1 || repo.topics.includes('npm'))) {
          let npmDownloads = 0;
          if (repo.topics?.length && repo.topics.includes('npm')) {
            const NPMResults = await fetchNPMPackageDownloads(repo.name);
            if (NPMResults && NPMResults?.number) {
              npmDownloads = NPMResults.number;
            }
          }
          let obj = {
            'name': repo.name,
            'description': repo.description,
            'html_url': repo.html_url,
            'license': repo.license,
            'topics': repo.topics,
            'stargazers': {
              'stargazers_count': repo.stargazers_count,
              'stargazers_url': repo.stargazers_url,
              'stargazers_niceurl': repo.html_url + '/stargazers',
            },
            'forks': {
              'forks_count': repo.forks_count,
              'forks_url': repo.forks_url,
              'forks_niceurl': repo.html_url + '/network/members',
            },
            'watchers': {
              'watchers_count': repo.watchers_count,
              'watchers_niceurl': repo.html_url + '/watchers',
            },
            'npm_downloads': npmDownloads
          }
          filtered.push(obj);
        }
        return filtered;
      }, Promise.resolve([]));

      // sort by npm_downloads > stargazers_count > alphabetical
      const returnedRepos = featuredRepos.sort( (a, b) => {
        if (a.npm_downloads < b.npm_downloads) {
          return 1;
        } else if (a.npm_downloads > b.npm_downloads) {
          return -1;
        } else {
          // If downloads are equal, then sort by stargazers count
          if (a.stargazers.stargazers_count < b.stargazers.stargazers_count) {
            return 1;
          } else if (a.stargazers.stargazers_count > b.stargazers.stargazers_count) {
            return -1;
          } else {
            // If stargazers count is also equal, then sort by name
            return (a.name > b.name) ? 1 : -1;
          }
        }
      });

      // add results to browser cache
      putCacheItemManually('chris-snowden.me/github', githubTargetURL, JSON.stringify(returnedRepos), '7'); // one week cache
      return returnedRepos;
    }
    return false
  }

</script>


<section class="widget-container widget-container--{direction}">
  <div class="github-repos-widget github-repos-widget--{direction}">
    <div class="github-repos-widget__inner">
      {#await fetchGithubReposKeyInfo('Recidvst')}
        <h2>Fetching Open Source Projects..</h2>
        <ul class="projects-list">
          {#each [1,2,3,4] as item}
            <RepoDetailsSkeleton/>
          {/each}
        </ul>
      {:then repos}
        <h2>Featured Open Source Projects</h2>
        <ul class="projects-list">
          {#each repos as repo, i}
            <RepoDetails repo={repo} direction={direction}/>
          {/each}
        </ul>
      {:catch error}
        <p>An error occurred!</p>
      {/await}
    </div>
  </div>
</section>

<style lang="scss">
  .widget-container {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 0 0 auto;
    width: 100%;
    z-index: 1;
    margin: 0px;
    margin-top: auto;
    padding: 15px;
    &.widget-container--column {
      max-width: 360px;
    }
  }
  .github-repos-widget {
    position: relative;
    display: block;
    color: white;
    flex: 1 0 auto;
    padding: 15px;
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 100%;
    }

    &.github-repos-widget--column {
      .projects-list {
        flex-direction: column;
      }
    }
  }
  .github-repos-widget__inner {
    display: block;
    h2 {
      font-family: 'Roboto Mono';
      line-height: 2rem;
    }
    .nes-icon.trophy {
      transform: scale(2) translateY(3px);
    }
  }
  .projects-list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 0;
    @media (max-width: 1023px) {
      flex-direction: column;
    }
  }
</style>
