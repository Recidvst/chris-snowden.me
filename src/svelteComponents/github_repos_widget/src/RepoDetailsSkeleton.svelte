<script>
  // skeleton loaders
  import 'skeleton-elements/skeleton-elements.css';
  import { SkeletonBlock, SkeletonImage  } from 'skeleton-elements/svelte';

  let showIcon = false;
</script>

<li class="projects-list__item">
  <div class="badges">
    <SkeletonImage showIcon={showIcon} width='39' height='26' effect='fade' />
    <SkeletonImage showIcon={showIcon} width='68' height='26' effect='fade' />
    <SkeletonImage showIcon={showIcon} width='39' height='26' effect='fade' />
    <SkeletonImage showIcon={showIcon} width='49' height='26' effect='fade' />
  </div>

  <div class="projects-list__link">
    <SkeletonBlock tag="p" width="250px" height='25px' effect='fade' />
  </div>
  <div class="projects-list__desc">
    <SkeletonBlock tag="p" width="280px" effect='fade' />
    <SkeletonBlock tag="p" width="260px" effect='fade' />
    <SkeletonBlock tag="p" width="220px" effect='fade' />
    <SkeletonBlock tag="p" width="240px" effect='fade' />
  </div>
</li>

<style lang="scss">
  :root {
    --skeleton-color: #a0b3c6;
  }
  .projects-list__item {
    flex: 1 1 200px;
    max-width: 300px;
    overflow: hidden;
    padding: 10px 20px 10px 0px;
    @media (max-width: 1023px) {
    flex: 1 1 auto;
      padding: 10px 0px 10px 0px;
    }
  }
  .projects-list__link {
    --skeleton-color: #e9436f;
    color: #e9436f;
    font-family: 'Roboto Mono';
    &:hover {
      color: #33ced8;
    }
  }
  :global(.projects-list__link .skeleton-block) {
    margin-bottom: 15px !important;
  }
  .projects-list__desc {
    font-size: .9rem;
    font-family: 'Roboto Mono';
  }
  :global(.projects-list__desc .skeleton-block) {
    margin-bottom: 6px !important;
  }
  .badges {
    display: block;
    margin-bottom: 13px;
  }
</style>
