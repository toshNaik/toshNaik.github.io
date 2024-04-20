<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";
    import Avatar from "$lib/components/Avatar.svelte";
    import Projectcard from "$lib/components/Projectcard.svelte";
    export let data;

	var reorderedProjects = data.projects;

	onMount(() => {
		// if window width is greater than 1024px, set column count to 2
		if (window.innerWidth < 1024) return;
		const columnCount = 2;
		const projectItems = document.getElementsByClassName("project-card"); // class project-card is used in Projectcard.svelte
		const projectArray = Array.from(projectItems);
		var reorderedProjects = [];
		reorderedProjects.length = projectArray.length;

		let idx = 0;
		for (let i = 0; i < columnCount; i++) {
			for (let j = i; j < projectArray.length; j += columnCount) {
				reorderedProjects[idx++] = projectArray[j];
			}
		}
		const container = document.getElementById("project-container");
		if (container)
			container.replaceChildren(...reorderedProjects);
	});
</script>

<div class="flex flex-col items-center md:flex-row md:justify-around">
	<div class="flex flex-col md:self-start">
		<div class="flex flex-row md:flex-col">
			<Avatar src={ base + "/ashutosh_hd.jpg"  } alt="avatar" class="w-32 rounded-full md:w-56 lg:w-64" />
			<div class="ml-8 flex flex-col gap-2 md:ml-6 lg:ml-10">
				<h1 class="text-2xl font-extrabold md:mt-2">Ashutosh Naik</h1>
				<div class="flex flex-row justify-start">
					<svg class="w-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
					<span class="rounded-full ml-2 text-xs font-bold">Boulder</span>
				</div>
				<div class="mt-4 flex flex-row gap-8 justify-start">
					<a aria-label="github link" target="_blank" href="https://github.com/toshnaik"><svg class="w-8" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg></a>
					<a aria-label="linkedin" target="_blank" href="https://www.linkedin.com/in/toshnaik/"><svg class="w-8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 112.196 112.196" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle style="fill:#007AB9;" cx="56.098" cy="56.097" r="56.098"></circle> <g> <path style="fill:#F1F2F2;" d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118 c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715 c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662 C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967 c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z M27.865,83.739H41.27V43.409H27.865V83.739z"></path> </g> </g> </g></svg></a>
					<a aria-label="email" target="_blank" href="mailto:naikashutosh.67@gmail.com"><svg class="w-8" fill="#000000" viewBox="0 0 512 512" id="_x30_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M412,353.5 c0,20.193-16.37,36.562-36.562,36.562H136.562c-20.193,0-36.562-16.37-36.562-36.562v-195c0-20.193,16.37-36.562,36.562-36.562 h238.875c20.193,0,36.562,16.37,36.562,36.562V353.5z"></path> <path d="M334.463,166.703L256,212.004l-78.463-45.301c-8.744-5.048-19.924-2.052-24.973,6.691 c-5.048,8.744-2.052,19.924,6.691,24.973l87.604,50.578l0.001-0.002c2.777,1.6,5.936,2.443,9.139,2.448 c3.204-0.004,6.363-0.848,9.139-2.448l0.001,0.002l87.604-50.578c8.744-5.048,11.74-16.229,6.691-24.973 C354.388,164.651,343.207,161.655,334.463,166.703z"></path> </g> </g></svg></a>
				</div>
			</div>
		</div>
		<p class="text-sm mt-4 w-80 md:w-56 lg:w-64 text-justify italic">
			"{@html data.bio}"
		</p>
	</div>

    <div class="divider w-11/12 self-center md:hidden"></div>

    <!-- <div class="flex flex-col w-11/12 gap-3 items-center md:w-7/12"> -->
    <div id="project-container" class="gap-4 columns-1 w-11/12 items-center md:w-7/12 lg:columns-2">
        {#each reorderedProjects as project}
            <Projectcard {...project} />
        {/each}
    </div>
</div>
