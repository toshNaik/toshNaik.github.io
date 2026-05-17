<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
</script>

<!-- Minimal sticky nav -->
<header class="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-slate-100">
	<div class="max-w-[740px] mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
		<a href="{base}/" class="text-sm font-semibold text-slate-900 tracking-tight hover:text-[#1B4F8A] transition-colors">
			Ashutosh Naik
		</a>
		<nav class="flex items-center gap-5 text-sm">
			<a
				href="https://github.com/toshNaik"
				target="_blank"
				rel="noopener noreferrer"
				class="text-slate-500 hover:text-slate-900 transition-colors hidden sm:block"
			>GitHub</a>
			<a
				href="https://www.linkedin.com/in/toshnaik/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-slate-500 hover:text-slate-900 transition-colors hidden sm:block"
			>LinkedIn</a>
			<a
				href="{base}/resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-[#1B4F8A] hover:underline transition-colors"
			>Resume ↗</a>
		</nav>
	</div>
</header>

<slot />

<!-- Minimal footer -->
<footer class="border-t border-slate-100 mt-24">
	<div class="max-w-[740px] mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
		<span>© 2025 Ashutosh Naik · New York, NY</span>
		<div class="flex gap-5">
			<a href="mailto:naik.ashutosh.67@gmail.com" class="hover:text-slate-600 transition-colors">Email</a>
			<a href="https://github.com/toshNaik" target="_blank" rel="noopener noreferrer" class="hover:text-slate-600 transition-colors">GitHub</a>
			<a href="https://www.linkedin.com/in/toshnaik/" target="_blank" rel="noopener noreferrer" class="hover:text-slate-600 transition-colors">LinkedIn</a>
		</div>
	</div>
</footer>
