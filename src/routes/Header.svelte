<script>

</script>

<header>
	<nav id="navBar">
		<a href="/">
			<svg  id="logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
				⌘ K
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
	
	
	#navBar a {
		text-decoration: none;
		color: var(--text-primary);
		margin: 0 0.5rem;
		font-size: var(--font-size-primary);
		letter-spacing: 0.07rem;
	}

	#logo {
		fill: var(--text-primary); 
		height: 1.71rem; 
		width: 1.71rem; 
		vertical-align: middle; /* Align the SVG vertically within the line */
		margin: 0.36rem;
	}

	#searchBar {
		display: flex;
		align-items: center;
		position: relative;
		width: clamp(20%, 50%, 90%);
		height: 2.25rem;
		background-color: var(--bg-tertiary); 
		outline: none;
		color: inherit;
		font-size: var(--font-size-primary);
		margin: 0.5rem auto;
		border: 1px solid var(--bg-tertiary);
		border-radius: var(--main-radius);
		transition: border 0.36s ease;
    }

	#searchBar:hover {
		border: 1px solid var(--text-primary);
		border-radius: var(--main-radius);
	}
	
	#searchInput {
		flex:1;
		width: 100%;
		height: 50%;
		padding: 0.25rem;
		background: none;
		border: none;
		outline: none;
		font-family: inherit; 
		font-size: inherit;
		transition: border 3s ease;
		color: var(--text-primary);
    }

    #searchIcon {
		fill: var(--text-primary);
		width:2rem;
		height:2rem;
    }

    #shortcut {
		margin-right: 0.25em;
		color: var(--text-primary);
		font-family: Arial;
		font-size: 1rem;
    }

    ::placeholder {
		color: var(--text-secondary);
    }

	@media only screen and (max-width: 850px) {
		#searchBar {
			width: 95%;
			height: 2rem;
		}

		#logo {
			height: 2.1rem; 
			width: 2.1rem; 
		}

		#searchInput {
			font-size: var(--font-size-secondary);
		}

		#links, #shortcut {
			display:none;
		}
	}
</style>
