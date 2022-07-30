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
		<h2
			on:click={() => {
				select('training.');
			}}
		>
			TRAINING
		</h2>
		<h2
			on:click={() => {
				select('programming.');
			}}
		>
			PROGRAMMING
		</h2>
		<h1
			on:click={() => {
				select('everything...');
			}}
		>
			STORY BASE
		</h1>
		<h2
			on:click={() => {
				select('health.');
			}}
		>
			WELLNESS
		</h2>
		<h2
			on:click={() => {
				select('life.');
			}}
		>
			LIFE
		</h2>
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
	.container {
		width: 100%;
		height: calc(var(--view-height) - 188px);
		box-shadow: 0px 5px 5px -3px #00000020, 0px 8px 10px 1px #00000014, 0px 3px 14px 2px #00000012;
		background: radial-gradient(ellipse at left, var(--color-story-transparent), 20%, transparent),
			radial-gradient(ellipse at top, var(--color-story-transparent), 20%, transparent),
			radial-gradient(ellipse at right, #ff3e0020, 30%, transparent),
			radial-gradient(ellipse at bottom, #ff3e0020, 30%, transparent);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
