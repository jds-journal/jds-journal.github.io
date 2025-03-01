const issues = {
	"Volume 1 Issue 3" : [
		{
			"cover_url": "https://dl.acm.org/doi/pdf/10.1145/3648506",
			"paper_url": "https://dl.acm.org/doi/epdf/10.1145/3648506",
			"title": "Physics-Informed Neural Operator for Learning Partial Differential Equations",
			"abstract": "In this article, we propose physics-informed neural operators (PINO) that combine training data and physics constraints to learn the solution operator of a given family of parametric Partial Differential Equations (PDE). PINO is the first hybrid approach incorporating data and PDE constraints at different resolutions to learn the operator. Specifically, in PINO, we combine coarse-resolution training data with PDE constraints imposed at a higher resolution. The resulting PINO model can accurately approximate the ground-truth solution operator for many popular PDE families and shows no degradation in accuracy even under zero-shot super-resolution, that is, being able to predict beyond the resolution of training data. PINO uses the Fourier neural operator (FNO) framework that is guaranteed to be a universal approximator for any continuous operator and discretization convergent in the limit of mesh refinement. By adding PDE constraints to FNO at a higher resolution, we obtain a high-fidelity reconstruction of the ground-truth operator. Moreover, PINO succeeds in settings where no training data is available and only PDE constraints are imposed, while previous approaches, such as the Physics-Informed Neural Network (PINN), fail due to optimization challenges, for example, in multi-scale dynamic systems such as Kolmogorov flows.",
			"authors": [
				{
					"name": "Zongyi Li",
					"affiliation": "California Institute of Technology",
					"email": "zongyili@caltech.edu"
				},
				{
					"name": "Hongkai Zheng",
					"affiliation": "California Institute of Technology",
					"email": "hzzheng@caltech.edu"
				},
				{
					"name": "Nikola Borislavov Kovachki",
					"affiliation": "California Institute of Technology",
					"email": "nkovachki@caltech.edu"
				},
				{
					"name": "David Jin",
					"affiliation": "California Institute of Technology",
					"email": "djin@caltech.edu"
				},
				{
					"name": "Haoxuan Chen",
					"affiliation": "California Institute of Technology",
					"email": "haoxuan@caltech.edu"
				},
				{
					"name": "Burigede Liu",
					"affiliation": "California Institute of Technology",
					"email": "bl377@cam.ac.uk"
				},
				{
					"name": "Kamyar Azizzadenesheli",
					"affiliation": "California Institute of Technology",
					"email": "kamyara@nvidia.com"
				},
				{
					"name": "Anima Anandkumar",
					"affiliation": "California Institute of Technology",
					"email": "anima@caltech.edu"
				}
			]
		},
		{
			"cover_url": "./files/JDS_Issue3_Cover1.pdf",
			"paper_url": "https://dl.acm.org/doi/epdf/10.1145/3643693",
			"title": "Anytime-valid off-policy inference for contextual bandits",
			"abstract": "Contextual bandit algorithms are ubiquitous tools for active sequential experimentation in healthcare and the tech industry. They involve online learning algorithms that adaptively learn policies over time to map observed contexts 𝑋𝑡 to actions 𝐴𝑡 in an attempt to maximize stochastic rewards 𝑅𝑡. This adaptivity raises interesting but hard statistical inference questions, especially counterfactual ones: for example, it is often of interest to estimate the properties of a hypothetical policy that is different from the logging policy that was used to collect the data — a problem known as “off-policy evaluation” (OPE). Using modern martingale techniques, we present a comprehensive framework for OPE inference that relax unnecessary conditions made in some past works (such as performing inference at prespecified sample sizes, uniformly bounded importance weights, constant logging policies, constant policy values, among others), significantly improving on them both theoretically and empirically. Importantly, our methods can be employed while the original experiment is still running (that is, not necessarily post-hoc), when the logging policy may be itself changing (due to learning), and even if the context distributions are a highly dependent time-series (such as if they are drifting over time). More concretely, we derive confidence sequences for various functionals of interest in OPE. These include doubly robust ones for time-varying off-policy mean reward values, but also confidence bands for the entire cumulative distribution function of the off-policy reward distribution. All of our methods (a) are valid at arbitrary stopping times (b) only make nonparametric assumptions, (c) do not require importance weights to be uniformly bounded and if they are, we do not need to know these bounds, and (d) adapt to the empirical variance of our estimators. In summary, our methods enable anytime-valid off-policy inference using adaptively collected contextual bandit data.",
			"authors": [
				{
					"name": "Ian Waudby-Smith",
					"affiliation": "Carnegie Mellon University",
					"email": "ianws@cmu.edu"
				},
				{
					"name": "Lili Wu",
					"affiliation": "Microsoft",
					"email": "liliwu@microsoft.com"
				},
				{
					"name": "Aaditya Ramdas",
					"affiliation": "Carnegie Mellon University",
					"email": "aramdas@cmu.edu"
				},
				{
					"name": "Nikos Karampatziakis",
					"affiliation": "Microsoft",
					"email": "nikosk@microsoft.com"
				},
				{
					"name": "Paul Mineiro",
					"affiliation": "Microsoft",
					"email": "pmineiro@microsoft.com"
				}
			]
		},
		{
			"cover_url": "https://dl.acm.org/doi/pdf/10.1145/3643694",
			"paper_url": "https://dl.acm.org/doi/epdf/10.1145/3643694",
			"title": "The Necessity of Machine Learning Theory in Mitigating AI Risk",
			"abstract": "In the last years we have witnessed rapidly accelerating progress in Neural Network-based Artificial Intelligence. Yet our fundamental understanding of these methods has lagged far behind. Never before had a technology been developed so quickly and deployed so widely with so little understanding of its basic principles. In this document we argue that deep learning systems with their human-like complexity cannot be controlled and guided in socially acceptable ways or countered in adversarial situations, without an underlying theory. Theory in this context refers to identifying precise measurable quantities and mathematically describing their patterns, the way it is done in physics and engineering, rather than necessarily proving rigorous theorems. Given the societal impact of rapidly proliferating AI, developing such a theory and applying its analyses to real systems is a compelling and urgent need.",
			"authors": [
				{
					"name": "Mikhail Belkin",
					"affiliation": "University of California, San Diego",
					"email": "mbelkin@ucsd.edu"
				}
			]
		}
	]
}
