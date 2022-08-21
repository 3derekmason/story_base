<script>
	import relativeTimeAgo from 'relative-time-ago';

	import Account from 'svelte-material-icons/Account.svelte';
	import ChartBubble from 'svelte-material-icons/ChartBubble.svelte';
	import CircleSmall from 'svelte-material-icons/CircleSmall.svelte';
	import ClockOutline from 'svelte-material-icons/ClockOutline.svelte';
	import CodeBraces from 'svelte-material-icons/CodeBraces.svelte';
	import Dumbbell from 'svelte-material-icons/Dumbbell.svelte';
	import HospitalBox from 'svelte-material-icons/HospitalBox.svelte';

	export let story;

	const getStory = () => {
		fetch(`http://localhost:5000/api/file?added=${story.created_at}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
</script>

<div class="tile">
	<div class="row">
		<h3><Account color="#006af8" /> {story.authorFirst} {story.authorLast}</h3>
		<CircleSmall />
		<h6>
			{new Date(story.created_at).toDateString()}
			<ClockOutline />
			...{relativeTimeAgo(new Date(story.created_at), 'day')}
		</h6>
	</div>
	<h2>{story.title}</h2>
	<h4>{story.body}</h4>
	<div class="row">
		<ul>
			{#each story.tags as tag}
				{#if tag === 'training'}
					<li><Dumbbell size="20" color="#444444" /></li>
				{/if}
				{#if tag === 'programming'}
					<li><CodeBraces size="20" color="#444444" /></li>
				{/if}
				{#if tag === 'wellness'}
					<li><HospitalBox size="20" color="#444444" /></li>
				{/if}
				{#if tag === 'life'}
					<li><ChartBubble size="20" color="#444444" /></li>
				{/if}
			{/each}
		</ul>
		<a sveltekit:prefetch href={`/story/${story.title}`}>Read Story</a>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
	.tile {
		width: 90%;
		height: 160px;
		border-bottom: 1px solid var(--color-main);
		padding: 8px;
		padding-bottom: 16px;
		background: linear-gradient(transparent, 80%, var(--color-main-light-transparent));
	}
	.row {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	ul {
		padding: 0;
		display: flex;
		gap: 16px;
		list-style: none;
	}
	li {
		width: 48px;
		height: 24px;
		border-radius: 12px;
		border: 0.5px solid var(--color-main);
		display: grid;
		place-content: center;
	}

	h6,
	h2,
	h4 {
		margin: 0;
	}
	h2 {
		font-size: 20px;
		font-weight: 600;
	}

	h3 {
		font-size: 16px;
		display: flex;
		align-items: center;
		gap: 4px;
		font-family: 'Roboto Condensed', sans-serif;
	}

	h4 {
		margin-top: 16px;
		font-family: 'Playfair Display', serif;
	}

	h6 {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--text-color);
	}

	a {
		text-transform: uppercase;
	}
</style>
