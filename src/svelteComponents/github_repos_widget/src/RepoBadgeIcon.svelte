<script>
	export let type;

  let icon;

  switch(type) {
  case 'stars':
    icon = '⭐';
    break;
  case 'downloads':
    icon = '⬇️';
    break;
  case 'forked':
    icon = '↗️';
    break;
  case 'watchers':
    icon = '👁️';
    break;
  case 'license':
    icon = null;
    break;
}
</script>


{#if icon && type }
  <span class="badge__icon { type }">{ icon }</span>
{/if}

<style lang="scss">
  .badge__icon {
    display: inline-block;
    font-size: 0.8em;
    transform: translateY(-1px);
    &.stars {
      transform: translateY(-2px);
    }
  }
</style>
