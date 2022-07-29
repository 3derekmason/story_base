<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		max-width: 100vw;
		height: var(--view-height);
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
