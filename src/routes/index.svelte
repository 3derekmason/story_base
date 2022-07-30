<script context="module">
	export const prerender = true;
</script>

<script>
	let selected = 'everything...';
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
		<h1
			on:click={() => {
				select('everything...');
			}}
		>
			STORY BASE
		</h1>
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
		<div class="title"><h4>Stories about {selected}</h4></div>
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

	.message {
		width: 90%;
		height: 88px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 64px;
	}

	h1 {
		font-size: 72px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		margin: 0px;
		color: var(--color-main-light);
		text-shadow: 0px 4px 0px var(--color-main);
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
</style>
