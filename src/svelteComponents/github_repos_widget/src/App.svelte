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
    const data = await response.json()
    if (data && data.length > 0) {
      // filter out non-featured items and unnecessary data values
      const featuredRepos = await data.reduce( async function(filteredP, repo) {
        const filtered = await filteredP;

        if (repo.stargazers_count >= 3 || repo.topics.includes('featured')) {
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

<section class="github-repos-widget">
  <h2>Featured Open Source Projects</h2>

  {#await fetchGithubReposKeyInfo('Recidvst')}
    <p>...loading...</p>
  {:then repos}
    <ul>
      {#each repos as repo, i}
        <li>
          {#if repo.name}<p>
              <strong>Name: </strong><a href="{repo.html_url}" title="Visit GitHub repo for {deSlugify(repo.name)}" target="_blank">{deSlugify(repo.name)}</a>
            </p>{/if}
          {#if repo.description}<p>
              <strong>Description: </strong>{repo.description}
            </p>{/if}
          {#if repo.license?.key}<p>
              <strong>License: </strong>{capitalise(repo.license.key)}
            </p>{/if}
          {#if repo.stargazers_count > 0}<p>
              <strong>Stargazers: </strong>{repo.stargazers_count}
            </p>{/if}
          {#if repo.npm_downloads > 0}<p style="color: goldenrod">
              <strong>Downloads: </strong>{repo.npm_downloads}
            </p>{/if}
        </li>
      {/each}
    </ul>
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</section>

<style>
  .github-repos-widget {
    background: black;
    color: white;
  }
</style>
