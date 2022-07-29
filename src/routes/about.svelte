<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<div class="welcome">
		<h2>Welcome to</h2>
		<div class="row">
			<h1 class="story">Story</h1>
			<h1 class="base">Base</h1>
		</div>
		<div class="row">
			<a href="https://github.com/3derekmason/story_base" target="_blank">VIEW CODE</a>
			<a href="https://derekmason.dev" target="_blank">ABOUT DEREK</a>
		</div>
	</div>
	<div class="about">
		<p>
			Thanks for checking out the library! I created this site to showcase my stories and articles.
			Built using Svelte and deployed with Vercel.
		</p>
	</div>
</div>

<style>
	h1 {
		font-size: 72px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		margin: 0px;
	}
	h2 {
		color: var(--color-story);
		font-size: 40px;
		font-weight: 400;
		margin: 0;
		font-variant: small-caps;
	}
	.story {
		color: var(--color-main-light);
	}
	.base {
		color: var(--accent-color);
	}
	.content {
		width: 100%;
		height: var(--view-height);
		display: flex;
		align-items: center;
	}

	.welcome {
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 16px;
		height: 100%;
		width: 60%;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 24px;
		margin-bottom: 16px;
	}

	.about {
		width: 24%;
		height: 80%;
		box-shadow: 0px 5px 5px -3px #00000020, 0px 8px 10px 1px #00000014, 0px 3px 14px 2px #00000012;
		border-radius: 4px;
		padding: 32px;
	}

	a {
		width: 160px;
		height: 48px;
		display: grid;
		place-content: center;
		text-decoration: none;
		color: var(--color-story-light);
		border: 1px solid var(--color-story-light);
		border-radius: 8px;
		box-shadow: 0px 4px 0px var(--color-story);
	}
	a:active {
		box-shadow: none;
		transform: translateY(4px);
	}
</style>
