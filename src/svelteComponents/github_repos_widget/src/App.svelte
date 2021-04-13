<script>
  const NPM_API = 'https://api.npmjs.org/'
  const GITHUB_API = 'https://api.github.com/'
  const TRAVIS_API = ''

  const NPM_DOWNLOADS_PATH = 'downloads/point/2014-02-01:2021-04-13/'
  const GITHUB_USERS_PATH = 'users/'
  const TRAVIS_STATUS_PATH = ''

  const fetchNPMPackageDownloads = async (packageName) => {
    const response = await fetch(
      `${NPM_API}${NPM_DOWNLOADS_PATH}${packageName}`
    )
    const data = await response.json()
    return data.downloads
  }

  const fetchGithubReposKeyInfo = async (githubUser) => {
    const response = await fetch(
      `${GITHUB_API}${GITHUB_USERS_PATH}${githubUser}/repos`
    )
    const data = await response.json()
    if (data && data.length > 0) {
      const keys_to_keep = [
        'stargazers_count',
        'watchers_count',
        'forks_count',
        'description',
        'html_url',
        'license',
      ]
      const sanitisedObject = (array) =>
        array.map((o) =>
          keys_to_keep.reduce((acc, curr) => {
            acc[curr] = o[curr]
            return acc
          }, {})
        )
      return sanitisedObject(data)
    }
    return false
  }

  // TODO
  // const fetchTravisStatus = async () => {
  // };

  console.log(process.env.NODE_ENV)
  console.log(__buildDate__)
</script>

{#await fetchNPMPackageDownloads('eslint-plugin-import-order-aesthetic')}
  <p>...waiting</p>
{:then dls}
  <p>
    <strong>Downloads: {dls}</strong>
  </p>
{:catch error}
  <p>An error occurred!</p>
{/await}

<!-- {#await fetchGithubReposKeyInfo('Recidvst')}
<p>...waiting</p>
{:then repos}
<ul>
{#each repos as repo, i}
<li>
<p><strong>Description: </strong>{repo.description}</p>
<p><strong>License: </strong>{repo.license}</p>
<p><strong>Watchers: </strong>{repo.watchers_count}</p>
<p><strong>Stargazers: </strong>{repo.stargazers_count}</p>
<p><strong>Forks: </strong>{repo.forks_count}</p>
</li>
{/each}
</ul>
{:catch error}
<p>An error occurred!</p>
{/await} -->
