const issues = {
	"Volume 1 Issue 3" : [
		{
			"cover_url": "./files/JDS_Issue3_Cover1.pdf",
			"paper_url": "./files/JDS_Issue3_Paper1.pdf",
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
		}
	]
}
