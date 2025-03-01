const issues = {
	"Volume 2 Issue 1": [
		{
			"cover_url": "https://dl.acm.org/doi/pdf/10.1145/3711116",
			"paper_url": "https://dl.acm.org/doi/epdf/10.1145/3711116",
			"title": "Spectral Deconfounding for High-Dimensional Sparse Additive Models",
			"abstract": "Many high-dimensional data sets suffer from hidden confounding which affects both the predictors and the response of interest. In such situations, standard regression methods or algorithms lead to biased estimates. This paper substantially extends previous work on spectral deconfounding for high-dimensional linear models to the nonlinear setting and with this, establishes a proof of concept that spectral deconfounding is valid for general nonlinear models. Concretely, we propose an algorithm to estimate high-dimensional sparse additive models in the presence of hidden dense confounding: arguably, this is a simple yet practically useful nonlinear scope. We prove consistency and convergence rates for our method and evaluate it on synthetic data and a genetic data set.",
			"authors": [
				{
					"name": "Cyrill Scheidegger",
					"affiliation": "ETH Zürich",
					"email": "scheidegger@stat.math.ethz.ch"
				},
				{
					"name": "Zijian Guo",
					"affiliation": "Rutgers University",
					"email": "zijguo@stat.rutgers.edu"
				},
				{
					"name": "Peter Bühlmann",
					"affiliation": "ETH Zürich",
					"email": "buhlmann@stat.math.ethz.ch"
				}
			]
		},
		{
			"cover_url": "https://dl.acm.org/doi/pdf/10.1145/3711709",
			"paper_url": "https://dl.acm.org/doi/epdf/10.1145/3711709",
			"title": "Scalable Subsampling Inference for Deep Neural Networks",
			"abstract": "Deep neural networks (DNN) have received increasing attention in machine learning applications in the past several years. Recently, a non-asymptotic error bound has been developed to measure the performance of the fully connected DNN estimator with ReLU activation functions for estimating regression models. The article at hand gives a small improvement on the current error bound based on the latest results on the approximation ability of (forward) DNN. More importantly, however, a non-random subsampling technique—scalable subsampling—is applied to construct a “subbagged” DNN estimator. Under regularity conditions, it is shown that the subbagged DNN estimator is computationally efficient without sacrificing accuracy for either estimation or prediction tasks. Beyond point estimation/prediction, we propose different approaches to build confidence and prediction intervals based on the subbagged DNN estimator. In addition to being asymptotically valid, the proposed confidence/prediction intervals appear to work well in finite samples. All in all, the scalable subsampling DNN estimator offers the complete package in terms of statistical inference, i.e., (a) computational efficiency; (b) point estimation/prediction accuracy; and (c) allowing for the construction of practically useful confidence and prediction intervals.",
			"authors": [
				{
					"name": "Kejin Wu",
					"affiliation": "University of California San Diego",
					"email": "kwu@ucsd.edu"
				},
				{
					"name": "Dimitris N. Politis",
					"affiliation": "University of California San Diego",
					"email": "dpolitis@ucsd.edu"
				}
			]
		}
	]
}
