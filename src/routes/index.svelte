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
				if (search === 'everything..') {
					stories = data;
				} else {
					const filtered = [];
					data.forEach((story) => {
						if (JSON.stringify(story).includes(search)) {
							filtered.push(story);
						}
					});
					stories = filtered;
				}
			});
	};
	let search = '';

	onMount(async () => {
		getStories();
		getFiles();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Story library by Derek Mason" />
</svelte:head>

<section>
	<div class="message">
		<button
			disabled={search === 'training'}
			on:click={() => {
				search = 'training';
				getStories();
			}}
		>
			TRAINING
		</button>
		<button
			disabled={search === 'programming'}
			on:click={() => {
				search = 'programming';
				getStories();
			}}
		>
			PROGRAMMING
		</button>
		<div class="main">
			<h1
				on:click={() => {
					search = '';
					getStories();
				}}
			>
				STORY BASE
			</h1>
			<div class="row">
				<div class="title"><h4>read about</h4></div>
				<div class="search">
					<input bind:value={search} placeholder="everything..." />
					<button on:click={getStories}> <Magnify size="28" color="#008a65" /></button>
				</div>
			</div>
		</div>
		<button
			disabled={search === 'wellness'}
			on:click={() => {
				search = 'wellness';
				getStories();
			}}
		>
			WELLNESS
		</button>
		<button
			disabled={search === 'life'}
			on:click={() => {
				search = 'life';
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
		padding-right: 16px;
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		height: 40px;
		color: var(--text-color);
		font-variant: small-caps;
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

	@media screen and (max-width: 600px) {
		.message {
			gap: 8px;
			border-bottom: none;
		}

		.message button {
			display: none;
		}
		h1 {
			font-size: 44px;
			margin-bottom: 24px;
		}
	}
</style>
