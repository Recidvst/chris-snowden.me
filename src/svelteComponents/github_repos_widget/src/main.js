import App from './App.svelte';

const direction = document.getElementById("github_repos_widget_wrapper").getAttribute('data-direction'); // row or column

const app = new App({
  target: document.getElementById("github_repos_widget_wrapper"),
  props: {
    direction,
  },
});

export default app;
