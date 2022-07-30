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

<script>
	import TurningPage from '../lib/stories/TurningPage.svelte';
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte';
	import CodeTags from 'svelte-material-icons/CodeTags.svelte';
	import { goto } from '$app/navigation';
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
		<TurningPage />
		<div class="row">
			<a id="direct" href="https://github.com/3derekmason/story_base" target="_blank"
				>VIEW CODE <CodeTags size="24" /></a
			>
			<a id="direct" href="https://derekmason.dev" target="_blank"
				>ABOUT DEREK <ChevronRight size="24" /></a
			>
		</div>
	</div>
	<div class="about">
		<p>Hi there, I'm Derek. Thanks for checking out my collection.</p>
		<p>
			Story Base was created as a home for my stories and articles. I wanted to make an accessible
			and enjoyable exprience for readers, and truly make these stories my own.
		</p>
		<p>
			Built using <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, tested with
			<a href="https://playwright.dev/" target="_blank">PlayWright</a>, and developed according to
			Web Standards definded by the WC3.
		</p>
		<button
			on:click={() => {
				goto('/');
			}}>START READING!</button
		>
	</div>
</div>

<style>
	h1 {
		font-size: 72px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		margin: 0px;
		text-shadow: 0px 4px 0px var(--primary-color);
		animation: story 4s infinite;
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
	}

	.about {
		width: 24%;
		height: 400px;
		box-shadow: 0px 5px 5px -3px #00000020, 0px 8px 10px 1px #00000014, 0px 3px 14px 2px #00000012;
		border-radius: 4px;
		padding: 48px;
		background: radial-gradient(ellipse at right, var(--color-story-transparent), 20%, transparent),
			radial-gradient(ellipse at bottom, #ff3e0020, 30%, transparent);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 16px;
	}

	p {
		color: var(--color-story);
		margin: 0;
	}
	a#direct {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		width: 160px;
		height: 48px;
		text-decoration: none;
		color: var(--color-story);
		border: 1px solid var(--color-story);
		border-radius: 8px;
		box-shadow: 0px 4px 0px var(--color-story);
	}
	a#direct:active {
		box-shadow: none;
		transform: translateY(4px);
	}

	button {
		margin-top: 24px;
		width: 220px;
		height: 44px;
		border-radius: 8px;
		border: none;
		color: #fff;
		background: var(--color-story);
		transition: 0.1s;
	}
	button:hover {
		cursor: pointer;
		transition: 0.1s;
		background: var(--color-story-light);
	}
	button:active {
		background: var(--color-story-transparent);
	}

	@keyframes story {
		0% {
			text-shadow: 0px 0px 0px var(--primary-color);
		}
		25% {
			text-shadow: 0px 2px 0px var(--primary-color);
		}
		50% {
			text-shadow: 0px 4px 0px var(--primary-color);
		}
		75% {
			text-shadow: 0px 2px 0px var(--primary-color);
		}
		100% {
			text-shadow: 0px 0px 0px var(--primary-color);
		}
	}
</style>
