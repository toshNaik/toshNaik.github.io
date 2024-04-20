export function load() {
	// create an array of projects
	const projects = [
                {
                    "title": "ScreenSuggest",
                    "description": "Recommends movies based on user prompts. Built with SvelteKit, Tailwind, & Flask. Uses ChromaDB.",
                    // "src": "/projects/screensuggest.png",
                    // "alt": "ScreenSuggest app",
                    "url": "https://screensuggest.vercel.app/",
                },
                {
                    "title": "Anomaly Detection and Explanation",
                    "description": "Measures significant changes in people's movement behavior. Built with Python. Uses GPT-4V Visual Language Model for explanation.",
                    // "src": "",
                    // "alt": "Anomaly Detection and Explanation poster",
                    "url": "/projects/anomaly_april2023.pdf",
                },
                {
                    "title": "Shelfhelp",
                    "description": "A smart assistive system for the visually impaired for independent grocery shopping. Built with Python & OpenCV. Uses YoloV5 and DINO for product detection and matching. Accepted at AAMAS 2023.",
                    // "src": "",
                    // "alt": "Shelfhelp blog",
                    "url": "https://shivendraagrawal.github.io/projects/shelfhelp/",
                },
                {
                    "title": "CloudBoard",
                    "description": "A short server-client tool to sync clipboard across devices. Built with Go. Uses Websockets, Redis & SQL.",
                    // "src": "",
                    // "alt": "CloudBoard github link",
                    "url": "https://github.com/toshNaik/CloudBoard",
                },
                {
                    "title": "Tow Mater",
                    "description": "A 1/10th scale autonomous car that can navigate in corridors. Built with C++ & ROS.",
                    // "src": "",
                    // "alt": "Tow Mater youtube video",
                    "url": "https://youtu.be/k2L9MclQlPg",
                },
                {
                    "title": "Image Augmentation as a Service",
                    "description": "A hack project to augment images using REST APIs. Built with Flask & OpenCV. Uses GCP and Docker for deployment.",
                    // "src": "",
                    // "alt": "Image Augmentation as a Service github link",
                    "url": "https://github.com/toshNaik/IAaaS",
                },
                {
                    "title": "Neuroevolution Snake",
                    "description": "Trying out neuroevolution algorithms on the popular snake game. Built with Python & Pygame.",
                    // "src": "",
                    // "alt": "Neuroevolution Snake github link",
                    "url": "https://github.com/toshNaik/NeuroevolutionSnake",
                },
                {
                    "title": "Sudoku Solver",
                    "description": "Sudoku solver using backtracking algorithm. Extracts grid from an image. Built with Python & OpenCV.",
                    // "src": "",
                    // "alt": "Suoku Solver github link",
                    "url": "https://github.com/toshNaik/Sudoku-Solver",
                },
	];

    return {
        "projects" : projects,
		"bio": "Hello! I'm a second year Computer Science Master's candidate at CU Boulder. I've been working at <a class='underline text-sky-700' href='http://www.cairo-lab.com/' target='_blank'>The CAIRO Lab</a> on ShelfHelp, a project that would enable the visually impaired to navigate independently in grocery stores.<br> I'm also a Teaching Assistant for the CSCI 2400 - Computer Systems course at CU Boulder. I like learning new things and building stuff."
    };
}
