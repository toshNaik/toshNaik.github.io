<script lang="ts">
	import { base } from '$app/paths';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	export let data;

	$: skillEntries = Object.entries(data.skills) as [string, string[]][];

	// ── Pastel color system ──────────────────────────────────────────────────
	// Project card top-border accent (hex so Tailwind purge is irrelevant)
	const cardAccentColors = ['#c4b5fd', '#93c5fd', '#f9a8d4', '#6ee7b7', '#67e8f9', '#fcd34d'];

	// Project / research tag pastel pill styles (static strings → Tailwind keeps them)
	const tagStyles: Record<string, string> = {
		Research:   'bg-violet-100 text-violet-700',
		Python:     'bg-blue-100 text-blue-700',
		Go:         'bg-cyan-100 text-cyan-700',
		'C++':      'bg-orange-100 text-orange-700',
		ROS:        'bg-lime-100 text-lime-700',
		OpenCV:     'bg-sky-100 text-sky-700',
		YOLOv5:     'bg-amber-100 text-amber-700',
		'GPT-4V':   'bg-fuchsia-100 text-fuchsia-700',
		SvelteKit:  'bg-orange-100 text-orange-700',
		ChromaDB:   'bg-purple-100 text-purple-700',
		ONNX:       'bg-indigo-100 text-indigo-700',
		Redis:      'bg-red-100 text-red-600',
		GCP:        'bg-yellow-100 text-yellow-700',
		WebSockets: 'bg-teal-100 text-teal-700',
		JWT:        'bg-slate-100 text-slate-600',
		Robotics:   'bg-emerald-100 text-emerald-700',
	};

	// Skill category: label pill + tag styles
	const catLabel: Record<string, string> = {
		'Languages':      'bg-blue-100 text-blue-600',
		'Frameworks':     'bg-violet-100 text-violet-600',
		'Data & Storage': 'bg-emerald-100 text-emerald-600',
		'Cloud & Infra':  'bg-sky-100 text-sky-600',
		'Tools & CI/CD':  'bg-amber-100 text-amber-600',
	};
	const catTag: Record<string, string> = {
		'Languages':      'bg-blue-50 text-blue-700',
		'Frameworks':     'bg-violet-50 text-violet-700',
		'Data & Storage': 'bg-emerald-50 text-emerald-700',
		'Cloud & Infra':  'bg-sky-50 text-sky-700',
		'Tools & CI/CD':  'bg-amber-50 text-amber-700',
	};

	// Experience role left-border + bullet-dot hex colors
	const expBorder = ['#bfdbfe', '#ddd6fe']; // blue-200, violet-200
	const expDot    = ['#93c5fd', '#a78bfa']; // blue-300, violet-400
</script>

<svelte:head>
	<title>Ashutosh Naik</title>
</svelte:head>

<main class="max-w-[740px] mx-auto px-6 sm:px-10 py-14 space-y-20">

	<!-- ── Hero ──────────────────────────────────────────────────────────────── -->
	<section
		class="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start rounded-2xl p-6 sm:p-8 -mx-2 sm:-mx-4"
		style="background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #ffffff 100%);"
	>
		<img
			src="{base}/ashutosh_hd.jpg"
			alt="Ashutosh Naik"
			class="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-2 ring-blue-200 shrink-0"
		/>
		<div class="flex flex-col gap-1">
			<h1 class="text-2xl font-bold tracking-tight text-slate-900">Ashutosh Naik</h1>
			<p class="text-sm text-slate-500 leading-snug">
				Software Engineer &mdash; Backend Systems &middot; Event-Driven Infrastructure &middot; Applied AI
			</p>
			<p class="text-xs text-slate-400 mt-0.5">&#128205; New York, NY</p>

			<div class="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3">
				<a href="https://github.com/toshNaik" target="_blank" rel="noopener noreferrer"
					class="text-sm text-slate-500 hover:text-slate-900 transition-colors">GitHub</a>
				<a href="https://www.linkedin.com/in/toshnaik/" target="_blank" rel="noopener noreferrer"
					class="text-sm text-slate-500 hover:text-slate-900 transition-colors">LinkedIn</a>
				<a href="mailto:naik.ashutosh.67@gmail.com"
					class="text-sm text-slate-500 hover:text-slate-900 transition-colors">Email</a>
				<a href="{base}/resume.pdf" target="_blank" rel="noopener noreferrer"
					class="text-sm font-medium text-[#1B4F8A] hover:underline transition-colors">Resume ↗</a>
			</div>

			<p class="text-sm text-slate-600 leading-relaxed mt-5 max-w-lg">{data.bio}</p>
		</div>
	</section>

	<!-- ── Experience ────────────────────────────────────────────────────────── -->
	<section id="experience">
		<SectionHeader>Experience</SectionHeader>

		<div class="space-y-10">
			{#each data.experience as job, i}
				<div class="pl-5" style="border-left: 3px solid {expBorder[i % expBorder.length]};">
					<div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-2">
						<h3 class="font-semibold text-slate-900">{job.title}</h3>
						<span class="text-xs text-slate-400 shrink-0">{job.period}</span>
					</div>
					<p class="text-sm text-slate-500 mt-0.5">{job.company} &middot; {job.location}</p>
					<ul class="mt-3 space-y-2">
						{#each job.bullets as bullet}
							<li class="flex gap-3 items-start">
								<span
									class="w-1.5 h-1.5 rounded-full shrink-0 mt-[7px]"
									style="background: {expDot[i % expDot.length]};"
								></span>
								<span class="text-sm text-slate-600 leading-relaxed">{bullet}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- ── Publications ──────────────────────────────────────────────────────── -->
	<section id="publications">
		<SectionHeader>Publications</SectionHeader>

		<div class="space-y-5">
			{#each data.publications as pub}
				<div
					class="pl-4 py-1 rounded-r-lg"
					style="border-left: 3px solid #a5b4fc;"
				>
					<a
						href={pub.url}
						target="_blank"
						rel="noopener noreferrer"
						class="font-medium text-slate-900 hover:text-[#1B4F8A] transition-colors leading-snug text-sm"
					>
						{pub.title}&thinsp;↗
					</a>
					<p class="text-xs text-slate-400 mt-1">{pub.venue}</p>
					<p class="text-xs text-slate-400">{pub.authors}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- ── Projects ──────────────────────────────────────────────────────────── -->
	<section id="projects">
		<SectionHeader>Projects</SectionHeader>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{#each data.projects as project, i}
				<a
					href={project.url.startsWith('/') ? base + project.url : project.url}
					target={project.url.startsWith('/') ? '_self' : '_blank'}
					rel="noopener noreferrer"
					class="group flex flex-col border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-md transition-all duration-200"
					style="border-top: 3px solid {cardAccentColors[i % cardAccentColors.length]};"
				>
					<div class="flex items-center justify-between mb-2">
						<h3 class="font-semibold text-slate-900 text-sm group-hover:text-[#1B4F8A] transition-colors">
							{project.title}
						</h3>
						<span class="text-slate-300 group-hover:text-[#1B4F8A] transition-colors text-base leading-none">↗</span>
					</div>
					<p class="text-sm text-slate-500 leading-relaxed flex-1">{project.description}</p>
					<div class="flex flex-wrap gap-1.5 mt-4">
						{#each project.tags as tag}
							<span class="text-[11px] px-2 py-0.5 rounded-full font-medium {tagStyles[tag] ?? 'bg-slate-100 text-slate-500'}">
								{tag}
							</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- ── Skills ────────────────────────────────────────────────────────────── -->
	<section id="skills">
		<SectionHeader>Skills</SectionHeader>

		<div class="space-y-3">
			{#each skillEntries as [category, items]}
				<div class="flex gap-3 flex-wrap sm:flex-nowrap items-start">
					<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 {catLabel[category] ?? 'bg-slate-100 text-slate-500'}">
						{category}
					</span>
					<div class="flex flex-wrap gap-1.5">
						{#each items as item}
							<span class="text-xs px-2.5 py-1 rounded-full {catTag[category] ?? 'bg-slate-100 text-slate-600'}">
								{item}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

</main>
