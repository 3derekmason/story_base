<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import showdown from 'showdown';
	const converter = new showdown.Converter();
	const created_at = $page.url.pathname.slice(7);
	let displayStory;
	onMount(() => {
		fetch(`https://thestorybase.herokuapp.com/api/file?added=${created_at}`)
			.then((res) => res.json())
			.then((data) => {
				const html = converter.makeHtml(data);
				displayStory = html;
			});
	});
</script>

<div class="story">
	<div class="display">{@html displayStory}</div>
</div>

<style scoped>
	.story {
		height: var(--view-height);
		padding: 64px;
		display: flex;
		justify-content: center;
		overflow-y: auto;
	}
	.display {
		width: 80%;
	}

	@media screen and (max-width: 600px) {
		.story {
			height: 100%;
			padding: 8px;
			display: flex;
			justify-content: center;
			overflow-y: auto;
		}
		.display {
			width: 90%;
		}
		img {
			max-width: 300px;
		}
	}
</style>
