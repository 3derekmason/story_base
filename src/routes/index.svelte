<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';

	import Magnify from 'svelte-material-icons/Magnify.svelte';
	import StoryTile from '../lib/stories/StoryTile.svelte';

	let stories = [];
	const getStories = () => {
		fetch('https://thestorybase.herokuapp.com/api/')
			.then((res) => res.json())
			.then((data) => {
				if (selected === 'everything..') {
					stories = data;
				} else {
					const filtered = [];
					data.forEach((story) => {
						if (story.tags.includes(selected)) {
							filtered.push(story);
						}
					});
					stories = filtered;
				}
			});
	};

	let selected = 'everything..';
	let search = '';
	const select = (string) => {
		selected = string;
	};

	onMount(async () => {
		await getStories();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Story library by Derek Mason" />
</svelte:head>

<section>
	<div class="message">
		<button
			disabled={selected === 'training'}
			on:click={() => {
				select('training');
				getStories();
			}}
		>
			TRAINING
		</button>
		<button
			disabled={selected === 'programming'}
			on:click={() => {
				select('programming');
				getStories();
			}}
		>
			PROGRAMMING
		</button>
		<div class="main">
			<h1
				on:click={() => {
					select('everything..');
					getStories();
				}}
			>
				STORY BASE
			</h1>
			<div class="row">
				<div class="title"><h4>read about <em>{selected}.</em></h4></div>
				<div class="search">
					<input bind:value={search} placeholder="Search for a tag" />
					<button
						on:click={() => {
							selected = search;

							getStories();
						}}
					>
						<Magnify size="28" color="#008a65" /></button
					>
				</div>
			</div>
		</div>
		<button
			disabled={selected === 'wellness'}
			on:click={() => {
				select('wellness');
				getStories();
			}}
		>
			WELLNESS
		</button>
		<button
			disabled={selected === 'life'}
			on:click={() => {
				select('life');
				getStories();
			}}
		>
			LIFE
		</button>
	</div>
	<div class="container">
		<div class="tiles">
			{#each stories as story}
				<StoryTile {story} />
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.row {
		display: flex;
		align-items: center;
	}
	.message {
		width: 90%;
		height: 88px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 64px;
		border-bottom: 1px solid var(--color-main);
	}

	h1 {
		font-size: 72px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		margin: 0px;
		color: var(--color-main-light);
		text-shadow: 0px 3px 0px var(--color-main);
		cursor: pointer;
		transition: 0.1s;
	}
	h1:active {
		transition: 0.1s;
		text-shadow: none;
		transform: translateY(3px);
	}

	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	input {
		border: none;
		background: none;
		width: 120px;
	}
	input:focus {
		outline: none;
	}
	.search {
		width: 220px;
		backdrop-filter: blur(15px);
		display: flex;
		justify-content: center;
		gap: 16px;
		border: 1px solid var(--color-main-light);
		border-radius: 16px;
		transition: 0.1s;
	}
	.search:hover {
		background: #ffffff80;
		transition: 0.1s;
	}

	button {
		border: none;
		background: transparent;
		color: var(--accent-color);
		font-size: 18px;
		font-weight: 600;
	}

	button:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	button:disabled {
		opacity: 0.8;
		color: var(--color-main);
		cursor: default;
	}
	button:disabled:hover {
		text-decoration: none;
	}

	.container {
		width: 100%;
		height: calc(var(--view-height) - 188px);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		padding-left: 8px;
		width: 200px;
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		height: 40px;
		color: var(--text-color);
		font-variant: small-caps;
	}

	em {
		color: var(--color-story);
		font-variant: normal;
	}
	.tiles {
		width: 90%;
		height: calc(100% - 40px);
		padding: 24px;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 24px;
		overflow: auto;
	}
</style>
