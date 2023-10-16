const issues = {
	"Volume 1 Issue 1" : [
		{
			"cover_url": "./files/JDS_Issue1_Cover1.pdf",
			"paper_url": "./files/JDS_Issue1_Paper1.pdf",
			"title": "Batched Neural Bandits",
			"abstract": "In many sequential decision-making problems, the individuals are split into several batches and the decision-maker is only allowed to change her policy at the end of batches. These batch problems have a large number of applications, ranging from clinical trials to crowdsourcing. Motivated by this, we study the stochastic contextual bandit problem for general reward distributions under the batched setting. We propose the BatchNeuralUCB algorithm which combines neural networks with optimism to address the exploration-exploitation tradeoff while keeping the total number of batches limited. We study BatchNeuralUCB under both fixed and adaptive batch size settings and prove that it achieves the same regret as the fully sequential version while reducing the number of policy updates considerably. We confirm our theoretical results via simulations on both synthetic and real-world datasets.",
			"authors": [
				{
					"name": "Quanquan Gu",
					"affiliation": "University of California, Los Angeles",
					"email": "qgu@cs.ucla.edu"
				},
				{
					"name": "Amin Karbasi",
					"affiliation": "Yale University",
					"email": "amin.karbasi@yale.edu"
				},
				{
					"name": "Khashayar Khosravi",
					"affiliation": "Google Research NYC",
					"email": "khosravi@google.com"
				},
				{
					"name": "Vahab Mirrokni",
					"affiliation": "Google Research NYC",
					"email": "mirrokni@google.com"
				},
				{
					"name": "Dongruo Zhou",
					"affiliation": "University of California, Los Angeles",
					"email": "drzhou@cs.ucla.edu"
				}
			]
		},
		// {
		// 	"cover_url": "",
		// 	"paper_url": "",
		// 	"title": "Identification and semiparametric efficiency theory of nonignorable missing data with a shadow variable",
		// 	"abstract": "We consider identification and estimation with an outcome missing not at random (MNAR). We study an identification strategy based on a so-called shadow variable. A shadow variable is assumed to be correlated with the outcome, but independent of the missingness process conditional on the outcome and fully observed covariates. We describe a general condition for nonparametric identification of the full data law under MNAR using a valid shadow variable. Our condition is satisfied by many commonly- used models; moreover, it is imposed on the complete cases, and therefore has testable implications with observed data only. We characterize the semiparametric efficiency bound for the class of regular and asymptotically linear estimators, and derive a closed form for the efficient influence function. We describe a doubly robust and locally efficient estimation method and evaluate its performance on both simulation data and a real data example about home pricing.",
		// 	"authors": [
		// 		{
		// 			"name": "Wang Miao",
		// 			"affiliation": "Peking University",
		// 			"email": "mwfy@pku.edu.cn"
		// 		},
		// 		{
		// 			"name": "Lan Liu",
		// 			"affiliation": "University of Minnesota",
		// 			"email": "liux3771@umn.edu"
		// 		},
		// 		{
		// 			"name": "Yilin Li",
		// 			"affiliation": "Peking University",
		// 			"email": "yilinli@pku.edu.cn"
		// 		},
		// 		{
		// 			"name": "Eric Tchetgen Tchetgen",
		// 			"affiliation": "University of Pennsylvania",
		// 			"email": "ett@wharton.upenn.edu"
		// 		},
		// 		{
		// 			"name": "Zhi Geng",
		// 			"affiliation": "Peking University",
		// 			"email": "zhigeng@pku.edu.cn"
		// 		}
		// 	]
		// },
		{
			"cover_url": "./files/JDS_Issue1_Cover3.pdf",
			"paper_url": "./files/JDS_Issue1_Paper3.pdf",
			"title": "Record Fusion via Inference and Data Augmentation",
			"abstract": "We introduce a learning framework for the problem of unifying conflicting data in multiple records referring to the same entity, we call this problem “record fusion”. Record fusion generalizes two known problems:“data fusion” and “golden record”. Our approach expresses record fusion as a learning problem over probabilistic mod- els. In contrast to prior approaches, our method achieves high performance with or without the records source information, and outperforms state-of-art baselines. Furthermore, we show how our learned fusion model can solve the the problem of scarcity of training data. On multiple data sets, we show that our framework fuses records with an average precision of ∼98% when source information is available, and ∼94% without source information across a diverse array of datasets. We compare our approach to a comprehensive collection of data fusion and en- tity consolidation methods, ranging from source information related methods to approaches that do not need any source information. We show that our approach can achieve an average improvement of ∼ 20/ ∼ 45 precision points with/without source information. Our data augmentation method improves previous approaches an average of ∼ 10 precision points.",
			"authors": [
				{
					"name": "Alireza Heidari",
					"affiliation": "University of Waterloo",
					"email": "a5heidar@uwaterloo.ca"
				},
				{
					"name": "George Michalopoulos",
					"affiliation": "University of Waterloo",
					"email": "gmichalo@uwaterloo.ca"
				},
				{
					"name": "Shrinu Kushagra",
					"affiliation": "University of Waterloo",
					"email": "skushagr@uwaterloo.ca"
				},
				{
					"name": "Ihab F. Ilyas",
					"affiliation": "University of Waterloo",
					"email": "ilyas@uwaterloo.ca"
				},
				{
					"name": "Theodoros Rekatsinas",
					"affiliation": "University of Wisconsin-Madison",
					"email": "thodrek@cs.wisc.edu"
				}
			]
		},
		// {
		// 	"cover_url": "",
		// 	"paper_url": "",
		// 	"title": "Optimistic Rates: A Unifying Theory for Interpolation Learning and Regularization in Linear Regression",
		// 	"abstract": "We study a localized notion of uniform convergence known as an “optimistic rate” (Panchenko 2002; Srebro et al. 2010) for linear regression with Gaussian data. Our refined analysis avoids the hidden constant and logarithmic factor in existing results, which are known to be crucial in high-dimensional settings, especially for understanding interpolation learning. As a special case, our analysis recovers the guarantee from Koehler et al. (2021), which tightly characterizes the population risk of low-norm interpolators under the benign overfitting conditions. Our optimistic rate bound, though, also analyzes predictors with arbitrary training error. This allows us to recover some classical statistical guarantees for ridge and LASSO regression under random designs, and helps us obtain a precise understanding of the excess risk of near-interpolators in the over-parameterized regime.",
		// 	"authors": [
		// 		{
		// 			"name": "Lijia Zhou",
		// 			"affiliation": "University of Chicago",
		// 			"email": "zlj@uchicago.edu"
		// 		},
		// 		{
		// 			"name": "Frederic Koehler",
		// 			"affiliation": "Stanford University",
		// 			"email": "fkoehler@berkeley.edu"
		// 		},
		// 		{
		// 			"name": "Danica J. Sutherland",
		// 			"affiliation": "University of British Columbia; Alberta Machine Intelligence Institute",
		// 			"email": "dsuth@cs.ubc.ca"
		// 		},
		// 		{
		// 			"name": "Nathan Srebro",
		// 			"affiliation": "Toyota Technological Institute at Chicago",
		// 			"email": "nati@ttic.edu"
		// 		}
		// 	]
		// },
		{
			"cover_url": "./files/JDS_Issue1_Cover5.pdf",
			"paper_url": "./files/JDS_Issue1_Paper5.pdf",
			"title": "DNBP: Differentiable Nonparametric Belief Propagation",
			"abstract": "We present a differentiable approach to learn the probabilistic factors used for inference by a nonparametric belief propagation algorithm. Existing nonparametric belief propagation methods rely on domain-specific features encoded in the probabilistic factors of a graphical model. In this work, we replace each crafted factor with a differentiable neural network enabling the factors to be learned using an efficient optimization routine from labeled data. By combining differentiable neural networks with an efficient belief propagation algorithm, our method learns to maintain a set of marginal posterior samples using end-to-end training. We evaluate our differentiable nonparametric belief propagation (DNBP) method on a set of articulated pose tracking tasks and compare performance with learned baselines. Results from these experiments demonstrate the effectiveness of using learned factors for tracking and suggest the practical advantage over hand-crafted approaches. The project webpage is available at: https://progress.eecs.umich.edu/projects/dnbp/.",
			"authors": [
				{
					"name": "Anthony Opipari",
					"affiliation": "University of Michigan",
					"email": "topipari@umich.edu"
				},
				{
					"name": "Jana Pavlasek",
					"affiliation": "University of Michigan",
					"email": "pavlasek@umich.edu"
				},
				{
					"name": "Chao Chen",
					"affiliation": "University of Michigan",
					"email": "joecc@umich.edu"
				},
				{
					"name": "Shoutian Wang",
					"affiliation": "University of Michigan",
					"email": "shoutian@umich.edu"
				},
				{
					"name": "Karthik Desingh",
					"affiliation": "University of Washington",
					"email": "kdesingh@cs.washington.edu"
				},
				{
					"name": "Odest Chadwicke Jenkins",
					"affiliation": "University of Michigan",
					"email": "ocj@umich.edu"
				},

			]
		},
		{
			"cover_url": "./files/JDS_Issue1_Cover6.pdf",
			"paper_url": "./files/JDS_Issue1_Paper6.pdf",
			"title": "Data Management for ML-based Analytics and Beyond",
			"abstract": "The increasing capabilities of machine learning (ML) has enabled the deployment of ML methods in a variety of applications, ranging from unstructured data analytics to autonomous vehicles. Due to the volumes of data ML is deployed over, it is infeasible for humans to monitor deployments: the Tesla fleet of vehicles produces exabytes of data and millions of hours of video per day. As a result, ML deployments can fail in unexpected and catastrophic ways. In this work, we highlight three important, but underlooked aspects of ML deployment pipelines: 1) managing high-quality training data, 2) monitoring ML errors at deployment time, and 3) connecting end use to deployment algorithms. We first demonstrate that training labels are often erroneous, contrary to standard practice, even when labeled by leading vendors. We then demonstrate that standard methods of deploying ML methods can lead to downstream errors. As a first step towards addressing these issues, we review and contextualize two abstractions for finding errors in training data and deployments. We further describe how to improve algorithms for analytics queries as a case study for optimizing ML pipelines end-to-end.",
			"authors": [
				{
					"name": "Daniel Kang",
					"affiliation": "Stanford University",
					"email": "topipari@umich.edu"
				},
				{
					"name": "John Guibas",
					"affiliation": "Stanford University",
					"email": "jtguibas@stanford.edu"
				},
				{
					"name": "Peter Bailis",
					"affiliation": "Stanford University",
					"email": "pbailis@cs.stanford.edu"
				},
				{
					"name": "Tatsunori Hashimoto",
					"affiliation": "Stanford University",
					"email": "thashim@stanford.edu"
				},
				{
					"name": "Yi Sun",
					"affiliation": "Stanford University",
					"email": "TBA"
				},
				{
					"name": "Matei Zaharia",
					"affiliation": "Stanford University",
					"email": "matei@cs.stanford.edu"
				}
			]
		}
	]
}