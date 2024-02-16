<script>

</script>

<header>
	<nav id="navBar">
		<a href="/" id="logo">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="SVGRepo_bgCarrier" stroke-width="0">
				</g>
				<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
				<g id="SVGRepo_iconCarrier"> 
					<path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 
						20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 
						16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z">	
					</path> 
				</g>
			</svg>
		</a>
		<span id="links">
			<a href="/">TRADE</a>
			<a href="/collections">COLLECTIONS</a>
			<a href="/mint">MINT</a>
		</span>
		<span id="searchBar">
			<svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
				<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14A4.5 4.5 0 1 1 14 9.5 4.499 4.499 0 0 1 9.5 14z"/>
			</svg>
			<input id="searchInput" type="text" placeholder="Search collections / wallet">
			<span id="shortcut">
				<!-- On macOS: '⌘K', On Windows: 'Ctrl+K' -->
				<span>⌘ + k</span>
			</span>
		</span>
	</nav>
</header>

<style>
	#navBar {
		display: flex;
		justify-content: start;
		align-items: center;
		margin: 0;
		padding: 0;
		background-color: var(--bg-secondary);
		border: 2px dashed yellow;
		height: 100%;
	}
	
	#navBar a svg {
		fill: var(--text-primary); 
		height: 1.5rem; 
		width: 1.5rem; 
		vertical-align: middle; /* Align the SVG vertically within the line */
	}
	
	#navBar a {
		text-decoration: none;
		color: var(--text-primary);
		margin: 0 0.72rem;
	}

	#searchBar {
		display: flex;
		align-items: center;
		position: relative;
		width: clamp(35%, 40%, 90%);
		height: 2.25rem;
		background-color: var(--bg-tertiary); 
		outline: none;
		color: inherit;
		font-size: 1.35rem;
		margin: 0.5rem auto;
		border: 1px solid var(--bg-tertiary);
		transition: border 0.36s ease;
    }

	#searchBar:hover {
		border: 1px solid #b6b6b6;
		border-radius: 5px;
	}
	
	#searchInput {
		flex:1;
		width: 100%;
		height: 50%;
		padding: 0.25rem;
		background: none;
		border: none;
		outline: none;
		color: inherit;
		font-family: inherit; 
		font-size: inherit;
		transition: border 3s ease;
    }

    #searchIcon {
		fill: #b6b6b6;
		width:2rem;
		height:2rem;
    }

    #shortcut {
		margin-right: 0.25em;
		color: var(--text-primary);
		font-size: inherit;
    }

    ::placeholder {
		color: var(--text-primary);
    }

	@media only screen and (max-width: 600px) {
		#searchBar {
			width: 95%;
			height: 1.8rem;
		}

		#searchInput {
			font-size: 1.62rem;
		}

		#links, #shortcut {
			display:none;
		}
	}
</style>
