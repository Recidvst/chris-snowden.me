<script>
  // constants
  const NPM_API = 'https://api.npmjs.org/'
  const GITHUB_API = 'https://api.github.com/'

  const NPM_DOWNLOADS_PATH = 'downloads/point/2014-02-01:2021-04-13/'
  const GITHUB_USERS_PATH = 'users/'

  // utils
  let deSlugify = function (slug) {
    var words = slug.split('-')

    for (var i = 0; i < words.length; i++) {
      var word = words[i]
      words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }

    return words.join(' ')
  }
  let capitalise = function(string) {
    return string.toUpperCase();
  }

  // HTTP REQUESTS
  const fetchNPMPackageDownloads = async (packageName) => {
    const response = await fetch(
      `${NPM_API}${NPM_DOWNLOADS_PATH}${packageName}`
    )
    const data = await response.json();
    if (data?.downloads) {
      return data.downloads
    }
    return 0
  }

  const fetchGithubReposKeyInfo = async (githubUser) => {
    let headers = new Headers()
    headers.append('Accept', 'application/vnd.github.v3+json')
    headers.append('Accept', 'application/vnd.github.mercy-preview+json')
    headers.append('Authorization', 'token ' + process.env.GITHUB_ACCESS_TOKEN)

    const response = await fetch(
      `${GITHUB_API}${GITHUB_USERS_PATH}${githubUser}/repos?per_page=100&sort=updated&direction=desc`, { // topic:rails
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
            npmDownloads = await fetchNPMPackageDownloads(repo.name)
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
      return featuredRepos.sort( (a, b) => {
        if (a.npm_downloads < b.npm_downloads) {
          return 1;
        }
        else if (a.stargazers.stargazers_count > b.stargazers.stargazers_count) {
          return -1;
        }
        else if (b.stargazers.stargazers_count < a.stargazers.stargazers_count) {
          return 1;
        }
        else if (b.stargazers.stargazers_count === a.stargazers.stargazers_count) {
          return (a.name > b.name) ? 1 : -1;
        }
      });
    }
    return false
  }

</script>


<section class="page-container widget-container">
  <div class="github-repos-widget">
    <div class="github-repos-widget__inner">
      <h2>Featured Open Source Projects <i class="nes-icon trophy"></i></h2>

      {#await fetchGithubReposKeyInfo('Recidvst')}
        <p>...loading...</p>
      {:then repos}
        <ul class="projects-list">
          {#each repos as repo, i}
            <li class="projects-list__item">
              <div class="badges">
                {#if repo.stargazers.stargazers_count > 0}<a class="badge stars" href="{ repo.stargazers.stargazers_niceurl }" title="View stargazers on GitHub" target="_blank" rel="noopener noreferrer"><span class="badge__icon star">⭐</span>{repo.stargazers.stargazers_count}</a>{/if}
                {#if repo.npm_downloads > 0}<a class="badge downloads" href="https://www.npmjs.com/package/{repo.name}" title="View package on NPM" target="_blank" rel="noopener noreferrer"><span class="badge__icon downloads">📂</span>{repo.npm_downloads}</a>{/if}
                {#if repo.forks.forks_count > 0 }<a class="badge forked" href="{ repo.forks.forks_niceurl }" title="View forks on GitHub" target="_blank" rel="noopener noreferrer"><span class="badge__icon forked">↗️</span>{repo.forks.forks_count}</a>{/if}
                {#if repo.watchers.watchers_count > 0 }<a class="badge watchers" href="{ repo.watchers.watchers_niceurl }" title="View watchers on GitHub" target="_blank" rel="noopener noreferrer"><span class="badge__icon eye">👁️</span>{repo.watchers.watchers_count}</a>{/if}
                {#if repo.license?.key}<a class="badge license" href="{ repo.license.url }" title="View license on GitHub" target="_blank" rel="noopener noreferrer">{capitalise(repo.license.key)}</a>{/if}
              </div>
              {#if repo.name}<a href="{repo.html_url}" title="Visit GitHub repo for {deSlugify(repo.name)}" class="projects-list__link" target="_blank">{deSlugify(repo.name)}</a>{/if}
              {#if repo.description}<p class="projects-list__desc">{repo.description} </p>{/if}
            </li>
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
    margin-top: auto;
  }
  .github-repos-widget {
    position: relative;
    display: block;
    background: #212529;
    background: rgba(33, 37, 41, 0.75);
    color: white;
    flex: 1 0 auto;
    padding: 15px;
    border: 4px solid #e9436f;
  }
  .github-repos-widget__inner {
    display: block;
    h2 {
      font-family: 'Roboto Mono';
      line-height: 2rem;
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
  .projects-list__item {
    padding: 10px 20px 10px 0px;
    max-width: 300px;
    overflow: hidden;
  }
  .projects-list__link {
    color: #e9436f;
    font-family: 'Roboto Mono';
    &:hover {
      color: #33ced8;
    }
  }
  .projects-list__desc {
    font-size: .9rem;
    font-family: 'Roboto Mono';
  }
  .badges {
    display: block;
    margin-bottom: 5px;
  }
  .badge {
    display: inline-block;
    color: black;
    padding: 2px 6px;
    margin-bottom: 6px;
    font-family: 'Roboto Mono';
    &.license {
      background: #e9436f;
    }
    &.stars {
      background: goldenrod;
    }
    &.downloads {
      background: #33ced8;
    }
    &.forked {
      background: #b877db;
    }
    &.watchers {
      background: #fab28e;
    }
  }
  .badge__icon {
    display: inline-block;
    font-size: 0.8em;
    transform: translateY(-1px);
    &.star {
      transform: translateY(-2px);
    }
  }
</style>
