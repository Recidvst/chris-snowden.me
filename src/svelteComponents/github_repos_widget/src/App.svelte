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
    const data = await response.json()
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
            'stargazers_count': repo.stargazers_count,
            'license': repo.license,
            'topics': repo.topics,
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
        else if (a.stargazers_count > b.stargazers_count) {
          return -1;
        }
        else if (b.stargazers_count < a.stargazers_count) {
          return 1;
        }
        else if (b.stargazers_count === a.stargazers_count) {
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
      <h2>Featured Open Source Projects</h2>

      {#await fetchGithubReposKeyInfo('Recidvst')}
        <p>...loading...</p>
      {:then repos}
        <ul class="projects-list">
          {#each repos as repo, i}
            <li class="projects-list__item">
              <div class="badges">
                {#if repo.license?.key}<p class="badge license">{capitalise(repo.license.key)}</p>{/if}
                {#if repo.stargazers_count > 0}<p class="badge stars">{repo.stargazers_count}</p>{/if}
                {#if repo.npm_downloads > 0}<p class="badge downloads">{repo.npm_downloads}</p>{/if}
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
  }
  .projects-list__item {
    padding: 10px 20px 10px 0px;
    max-width: 250px;
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
    display: inline;
    color: black;
    padding: 2px 8px;
    // font-weight: bold;
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
  }
</style>
