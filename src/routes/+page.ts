export function load() {
	const bio =
		'Software Engineer at Nomura Holdings America (New York), building event-driven data infrastructure and distributed ETL systems for credit risk. MS Computer Science from CU Boulder (4.0 GPA), where I researched computer vision and assistive robotics at the CAIRO Lab - with publications at AAMAS 2023 and IEEE RAL 2025.';

	const experience = [
		{
			title: 'Senior Software Engineer',
			company: 'Nomura Holdings America, Inc.',
			location: 'New York, NY',
			period: 'July 2024 – Present',
			bullets: [
				"Migrating Nomura's credit ETL system (RETL) from Prefect 1.x to 2.x as part of a broader event-based processing (EBP) transition; refactoring monolithic sequential flows into parallel, modular task subflows with Dask-backed distributed execution.",
				'Architected the "Mario" configuration microservice (FastAPI, PostgreSQL) with Smart Insertion and SQLAlchemy connection pooling; integrated into an event-driven architecture via Stargate hub (Solace PubSub+, Mercury Messaging).',
				'Led infrastructure-wide migration to AWS Graviton (ARM64); diagnosed and resolved x86→ARM64 integer overflow discrepancies in Basel-compliant risk model codebases, restoring 100% data parity.',
				'Built a RAG-based credit reporting tool (LangChain, LLMs) with a natural language query interface, automating analysis of complex financial reports.',
				'Engineered a Cloud Lifecycle service automating EC2 shutdown and CNAME management via REST API, reducing infrastructure overhead by 12%.'
			]
		},
		{
			title: 'Graduate Student Researcher',
			company: 'University of Colorado Boulder — CAIRO Lab',
			location: 'Boulder, CO',
			period: 'Aug. 2022 – April 2024',
			bullets: [
				'Primary implementer of ShelfAware (IEEE RAL 2025): designed a real-time semantic particle filter fusing depth and distributional semantic likelihoods (JSD over object-class counts) — achieving 96% global localization success vs. 22% MCL / 10% AMCL at 9.6 Hz on consumer hardware.',
				"Built ShelfHelp's two-stage detection pipeline (AAMAS 2023): YOLOv5 + frozen autoencoder with cosine similarity, enabling scalable product detection without retraining; MDP-based manipulation guidance achieving 90.66% task success (n=15, blindfolded users).",
				'Designed an autonomous anomaly detection system: trajectory-based spatial analysis fused with GPT-4V for semantic interpretation; introduced Jensen-Shannon Divergence for shelf stock fluctuation quantification.'
			]
		}
	];

	const publications = [
		{
			title: 'ShelfAware: Real-Time Visual-Inertial Semantic Localization in Quasi-Static Environments with Low-Cost Sensors',
			venue: 'IEEE Robotics and Automation Letters (RAL), 2025',
			authors: 'Shivendra Agrawal, Jake Brawer, Ashutosh Naik, Alessandro Roncone, Bradley Hayes',
			url: 'https://arxiv.org/abs/2512.09065'
		},
		{
			title: 'ShelfHelp: Empowering Humans to Perform Vision-Independent Manipulation Tasks with a Socially Assistive Robotic Cane',
			venue: 'AAMAS 2023',
			authors: 'Shivendra Agrawal, Suresh Nayak, Ashutosh Naik, Bradley Hayes',
			url: 'https://shivendraagrawal.github.io/projects/shelfhelp/'
		}
	];

	const skills: Record<string, string[]> = {
		Languages: ['Python', 'Go', 'C/C++', 'SQL', 'JavaScript', 'Bash'],
		Frameworks: ['FastAPI', 'SQLAlchemy', 'Prefect 2.x', 'Dask', 'LangChain', 'PyTorch', 'OpenCV', 'Pandas'],
		'Data & Storage': ['Apache Iceberg', 'Dremio', 'MinIO', 'PostgreSQL', 'Redis', 'MSSQL Server'],
		'Cloud & Infra': ['AWS (EC2, Graviton)', 'GCP (Cloud Run)', 'Docker', 'Kubernetes', 'Podman', 'Terraform'],
		'Tools & CI/CD': ['GitLab CI/CD', 'Ansible', 'Solace PubSub+', 'Pytest', 'SonarQube', 'Nexus']
	};

	const projects = [
		{
			title: 'ShelfAware',
			description: 'Real-time semantic particle filter for global localization in quasi-static indoor environments. 96% success rate vs. 22% MCL / 10% AMCL baseline at 9.6 Hz on consumer hardware. Published in IEEE RAL 2025.',
			url: 'https://shivendraagrawal.github.io/projects/shelfmcl/',
			tags: ['Python', 'OpenCV', 'ROS', 'Research']
		},
		{
			title: 'ShelfHelp',
			description: 'Assistive robotic cane enabling vision-independent grocery shopping for the visually impaired. Two-stage YOLOv5 + autoencoder pipeline achieving 90.66% task success with blindfolded users. Published at AAMAS 2023.',
			url: 'https://shivendraagrawal.github.io/projects/shelfhelp/',
			tags: ['Python', 'OpenCV', 'YOLOv5', 'Research']
		},
		{
			title: 'Anomaly Detection & Explanation',
			description: "Robot monitoring system measuring changes in spatial movement patterns. Uses GPT-4V for semantic explanations of anomalous behavior and Jensen-Shannon Divergence for stock fluctuation quantification.",
			url: 'https://shivendraagrawal.github.io/projects/anomaly/',
			tags: ['Python', 'GPT-4V', 'OpenCV']
		},
		{
			title: 'ScreenSuggest',
			description: 'Semantic movie recommendation engine using ChromaDB for vector search over 50k+ titles. Quantized embedding model to ONNX for reduced memory footprint and faster inference.',
			url: 'https://github.com/toshNaik/movierecommend',
			tags: ['Python', 'SvelteKit', 'ChromaDB', 'ONNX']
		},
		{
			title: 'CloudBoard',
			description: 'Real-time cross-device clipboard synchronization via WebSocket sessions. JWT authentication, Gin REST APIs deployed on GCP Cloud Run.',
			url: 'https://github.com/toshNaik/CloudBoard',
			tags: ['Go', 'Redis', 'GCP', 'WebSockets']
		},
		{
			title: 'Tow Mater',
			description: 'Autonomous 1/10th scale car built in a team of 6. Intel RealSense 2 + IMU for depth and stability; PID controller enabling navigation and jumps up to 1m wide.',
			url: 'https://youtu.be/k2L9MclQlPg',
			tags: ['C++', 'ROS', 'OpenCV', 'Robotics']
		}
	];

	return { bio, experience, publications, skills, projects };
}
