<script>
	import Upload from 'svelte-material-icons/Upload.svelte';
	let newStory = '';
	const submitFile = () => {
		console.log(newStory);
	};
	const editFile = (e) => {
		e.preventDefault();
		console.log('beep');
		const files = e.target.files;
		const fileReader = new FileReader();
		fileReader.readAsDataURL(files[0]);
		newStory = files[0];
	};
</script>

<section>
	<h1>Submit your story!</h1>
	<h2>Upload File</h2>
	<div class="row">
		{#if !newStory}
			<label class="file-upload">
				Choose file
				<input type="file" name="newFile" accept=" .md, .pdf" on:input={editFile} />
			</label>
		{:else}
			<label class="file-uploaded">
				{newStory.name}
				<input type="file" name="newFile" accept=" .md, .pdf" on:input={editFile} />
			</label>
		{/if}
		<button on:click={submitFile}><Upload size="28" color="#444444" /></button>
	</div>
	<h4>or</h4>
	<h2>
		Email submissions to <a href="mailto:thestorybase@gmail.com" class="email"
			>thestorybase@gmail.com</a
		>
	</h2>
	<h3>Please include:</h3>
	<ul>
		<li>Your full name</li>
		<li>A markdown or pdf file of your story</li>
		<li>Any other contribution credits you'd like your story to include</li>
	</ul>
</section>

<style>
	section {
		width: 100%;
		height: var(--view-height);
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	h1 {
		margin: 0;
		width: 100%;
		height: 160px;
		font-weight: 400;
		font-size: 72px;
		letter-spacing: 2px;
		display: grid;
		place-content: center;
		background-image: radial-gradient(
			ellipse at left,
			var(--accent-color),
			var(--color-main),
			var(--color-main-light),
			60%,
			var(--accent-color)
		);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	h3 {
		margin: 0;
		font-size: 14px;
	}

	button {
		border: none;
		background: none;
		cursor: pointer;
		border-radius: 50%;
		transition: 0.1s;
	}
	button:hover {
		background: var(--color-story-transparent);
		transition: 0.1s;
	}
	button:active {
		background: var(--primary-color);
	}
	input[type='file'] {
		display: none;
	}

	.file-upload,
	.file-uploaded {
		width: 240px;
		border: 0.5px solid var(--color-story);
		border-radius: 16px;
		display: flex;
		padding: 6px 12px;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.file-uploaded {
		background: var(--color-story-light);
	}
</style>
