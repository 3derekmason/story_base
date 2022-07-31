<script>
	import ChartBubble from 'svelte-material-icons/ChartBubble.svelte';

	import CodeBraces from 'svelte-material-icons/CodeBraces.svelte';
	import Dumbbell from 'svelte-material-icons/Dumbbell.svelte';
	import HospitalBox from 'svelte-material-icons/HospitalBox.svelte';

	export let story;
</script>

<div class="tile">
	<div class="row">
		<h2>{story.title}</h2>
		<h4>by {story.author}</h4>
		<ul>
			{#each story.tags as tag}
				{#if tag === 'training'}
					<li><Dumbbell size="20" color="#ffffff" /></li>
				{/if}
				{#if tag === 'programming'}
					<li><CodeBraces size="20" color="#ffffff" /></li>
				{/if}
				{#if tag === 'wellness'}
					<li><HospitalBox size="20" color="#ffffff" /></li>
				{/if}
				{#if tag === 'life'}
					<li><ChartBubble size="20" color="#ffffff" /></li>
				{/if}
			{/each}
		</ul>
	</div>

	<h4>{story.body}</h4>

	<h6>{story.created_at}</h6>
</div>

<style>
	.tile {
		width: 90%;
		height: 160px;
		border: 1px solid var(--color-main-light);
	}
	.row {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	ul {
		display: flex;
		gap: 16px;
		list-style: none;
	}
	li {
		width: 48px;
		height: 24px;
		border-radius: 8px;
		background: var(--color-story-light);
		display: grid;
		place-content: center;
	}
</style>
