<script context="module">
	export const prerender = true;
</script>

<script>
	import Magnify from 'svelte-material-icons/Magnify.svelte';

	let selected = 'everything...';
	let search = '';
	const select = (string) => {
		selected = string;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Story library by Derek Mason" />
</svelte:head>

<section>
	<div class="message">
		<button
			disabled={selected === 'training.'}
			on:click={() => {
				select('training.');
			}}
		>
			TRAINING
		</button>
		<button
			disabled={selected === 'programming.'}
			on:click={() => {
				select('programming.');
			}}
		>
			PROGRAMMING
		</button>
		<div class="main">
			<h1
				on:click={() => {
					select('everything...');
				}}
			>
				STORY BASE
			</h1>
			<div class="row">
				<div class="title"><h4>read about <em>{selected}</em></h4></div>
				<div class="search"><input bind:value={search} /><Magnify size="28" color="#ff3e00" /></div>
			</div>
		</div>
		<button
			disabled={selected === 'health.'}
			on:click={() => {
				select('health.');
			}}
		>
			WELLNESS
		</button>
		<button
			disabled={selected === 'life.'}
			on:click={() => {
				select('life.');
			}}
		>
			LIFE
		</button>
	</div>
	<div class="container">
		<div class="tiles" />
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
		text-shadow: 0px 4px 0px var(--color-main);
		cursor: pointer;
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
		align-items: center;
		gap: 16px;
		border: 1px solid red;
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
		width: 220px;
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
	}
</style>
