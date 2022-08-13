<script>
	import Upload from 'svelte-material-icons/Upload.svelte';
	let newStory = {
		title: '',
		author: '',
		body: '',
		tags: []
	};
	let newFile = '';

	const submitFile = () => {
		console.log(newFile);
		let formData = new FormData();
		formData.append('file', newFile);
		fetch('http://localhost:5000/api/files', {
			method: 'POST',
			'Content-Type': 'multipart/form-data',
			body: formData
		})
			.then(() => {
				console.log('Thanks for the submission!');
			})
			.catch((err) => {
				console.error(err);
			});
		newFile = '';
	};
	const editFile = (e) => {
		e.preventDefault();
		const files = e.target.files;
		const fileReader = new FileReader();
		fileReader.readAsDataURL(files[0]);
		newFile = files[0];
	};
</script>

<section>
	<h1>Submit your story!</h1>

	<div class="row">
		<input type="text" class="input-lg" placeholder="Title of your story" />
	</div>
	<div class="row">
		<input type="text" placeholder="First name" />
		<input type="text" placeholder="Last name" />
	</div>
	<div class="row">
		<textarea class="input-lg" name="body" rows="2" placeholder="Little summary of your story..." />
	</div>
	<div class="row">
		<h2>Upload File</h2>
		{#if !newFile}
			<label class="file-upload">
				Choose file
				<input type="file" name="newFile" accept=" .md, .pdf" on:input={editFile} />
			</label>
		{:else}
			<label class="file-uploaded">
				{newFile.name}
				<input type="file" name="newFile" accept=" .md, .pdf" on:input={editFile} />
			</label>
		{/if}
		<button disabled={!newFile} on:click={submitFile}><Upload size="28" color="#444444" /></button>
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
		width: 100%;
		height: 64px;
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
		border: 1px solid var(--color-story-light);
		box-shadow: 0px 2px 0px var(--color-story);
		background: none;
		cursor: pointer;
		border-radius: 50%;
		transition: 0.1s;
	}
	button:disabled {
		box-shadow: none;
		transform: translateY(2px);
	}
	button:active {
		box-shadow: none;
		transform: translateY(2px);
	}

	input {
		width: 220px;
		border: none;
		height: 40px;
		background: none;
		border-bottom: 1px solid var(--color-story);
	}

	.input-lg {
		width: 464px;
		border: none;
		height: 56px;
		border-bottom: 1px solid var(--color-story);
	}
	input[type='file'] {
		display: none;
	}

	textarea {
		resize: none;
		background: none;
	}

	textarea:focus,
	input:focus {
		outline: none;
	}

	.file-upload,
	.file-uploaded {
		width: 272px;
		border: 0.5px solid var(--color-story);
		border-radius: 16px;
		display: flex;
		padding: 6px 12px;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background: var(--color-story-transparent);
		transition: 0.1s;
	}
	.file-upload:hover {
		background: var(--tertiary-color);
		transition: 0.1s;
	}
	.file-uploaded {
		background: var(--color-story-light);
		color: #fff;
	}
</style>
