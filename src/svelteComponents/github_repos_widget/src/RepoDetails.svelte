<script>
  // components
	import RepoBadgeIcon from './RepoBadgeIcon.svelte';

  // utils
  import deSlugify from './utils/deSlugify';
  import capitalise from './utils/capitalise';

  // expose props
	export let repo;
  export let direction;
</script>

<li class="projects-list__item projects-list__item--{direction}">
  <div class="badges">
    {#if repo.stargazers.stargazers_count > 0}
      <a class="badge stars" href="{ repo.stargazers.stargazers_niceurl }" title="View stargazers on GitHub" target="_blank" rel="noopener noreferrer">
        <RepoBadgeIcon type="stars" />{repo.stargazers.stargazers_count}
      </a>
    {/if}
    {#if repo.npm_downloads > 0}
      <a class="badge downloads" href="https://www.npmjs.com/package/{repo.name}" title="View package on NPM" target="_blank" rel="noopener noreferrer">
        <RepoBadgeIcon type="downloads" />{repo.npm_downloads}
      </a>
    {/if}
    {#if repo.forks.forks_count > 0 }
      <a class="badge forked" href="{ repo.forks.forks_niceurl }" title="View forks on GitHub" target="_blank" rel="noopener noreferrer">
        <RepoBadgeIcon type="forked" />{repo.forks.forks_count}
      </a>
    {/if}
    {#if repo.watchers.watchers_count > 0 }
    <a class="badge watchers" href="{ repo.watchers.watchers_niceurl }" title="View watchers on GitHub" target="_blank" rel="noopener noreferrer">
      <RepoBadgeIcon type="watchers" />{repo.watchers.watchers_count}</a>
    {/if}
    {#if repo.license?.key}
      <a class="badge license" href="{ repo.license.url }" title="View license on GitHub" target="_blank" rel="noopener noreferrer">
        {capitalise(repo.license.key)}
      </a>
    {/if}
  </div>

  {#if repo.name}
    <a href="{repo.html_url}" title="Visit GitHub repo for {deSlugify(repo.name)}" class="projects-list__link" target="_blank" rel="noopener noreferrer">
      {deSlugify(repo.name)}
    </a>
  {/if}
  {#if repo.description}
    <p class="projects-list__desc">{repo.description}</p>
  {/if}
</li>

<style lang="scss">
  .projects-list__item {
    flex: 1 1 200px;
    max-width: 300px;
    overflow: hidden;
    padding: 10px 20px 10px 0px;
    @media (max-width: 1023px) {
      flex: 1 1 auto;
      padding: 10px 0px 10px 0px;
    }
    &.projects-list__item--column {
      flex: 1 1 auto;
      padding: 10px 0px 10px 0px;
    }
  }
  .projects-list__link {
    color: rgb(233 67 111 / 75%);
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
      color: #f7e3e3;
      background: rgb(233 67 111 / 75%);
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
</style>
