import App from './App.svelte';

const app = new App({
  target: document.getElementById("github_repos_widget"),
  props: {
    test: 'tester',
  },
});

export default app;
