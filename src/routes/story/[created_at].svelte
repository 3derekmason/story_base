<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import showdown from 'showdown';
	const converter = new showdown.Converter();
	const created_at = $page.url.pathname.slice(7);
	let displayStory;
	onMount(() => {
		fetch(`http://localhost:5000/api/file?added=${created_at}`)
			.then((res) => res.json())
			.then((data) => {
				const html = converter.makeHtml(data);
				displayStory = html;
			});
	});
</script>

<div class="story">
	{@html displayStory}
</div>

<style>
	.story {
		height: var(--view-height);
		padding: 64px;
		overflow-y: auto;
	}
</style>
