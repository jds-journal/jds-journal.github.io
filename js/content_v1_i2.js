const issues = {
	"Volume 1 Issue 2" : [
		{
			"cover_url": "./files/JDS_Issue2_Cover1.pdf",
			"paper_url": "https://dl.acm.org/doi/epdf/10.1145/3592389",
			"title": "Identification and semiparametric efficiency theory of nonignorable missing data with a shadow variable",
			"abstract": "We consider identification and estimation with an outcome missing not at random (MNAR). We study an identification strategy based on a so-called shadow variable. A shadow variable is assumed to be correlated with the outcome, but independent of the missingness process conditional on the outcome and fully observed covariates. We describe a general condition for nonparametric identification of the full data law under MNAR using a valid shadow variable. Our condition is satisfied by many commonly- used models; moreover, it is imposed on the complete cases, and therefore has testable implications with observed data only. We characterize the semiparametric efficiency bound for the class of regular and asymptotically linear estimators, and derive a closed form for the efficient influence function. We describe a doubly robust and locally efficient estimation method and evaluate its performance on both simulation data and a real data example about home pricing.",
			"authors": [
				{
					"name": "Wang Miao",
					"affiliation": "Peking University",
					"email": "mwfy@pku.edu.cn"
				},
				{
					"name": "Lan Liu",
					"affiliation": "University of Minnesota",
					"email": "liux3771@umn.edu"
				},
				{
					"name": "Yilin Li",
					"affiliation": "Peking University",
					"email": "yilinli@pku.edu.cn"
				},
				{
					"name": "Eric Tchetgen Tchetgen",
					"affiliation": "University of Pennsylvania",
					"email": "ett@wharton.upenn.edu"
				},
				{
					"name": "Zhi Geng",
					"affiliation": "Peking University",
					"email": "zhigeng@pku.edu.cn"
				}
			]
		},
		{
			"cover_url": "./files/JDS_Issue2_Cover2.pdf",
			"paper_url": "https://dl.acm.org/doi/epdf/10.1145/3594234",
			"title": "Optimistic Rates: A Unifying Theory for Interpolation Learning and Regularization in Linear Regression",
			"abstract": "We study a localized notion of uniform convergence known as an “optimistic rate” (Panchenko 2002; Srebro et al. 2010) for linear regression with Gaussian data. Our refined analysis avoids the hidden constant and logarithmic factor in existing results, which are known to be crucial in high-dimensional settings, especially for understanding interpolation learning. As a special case, our analysis recovers the guarantee from Koehler et al. (2021), which tightly characterizes the population risk of low-norm interpolators under the benign overfitting conditions. Our optimistic rate bound, though, also analyzes predictors with arbitrary training error. This allows us to recover some classical statistical guarantees for ridge and LASSO regression under random designs, and helps us obtain a precise understanding of the excess risk of near-interpolators in the over-parameterized regime.",
			"authors": [
				{
					"name": "Lijia Zhou",
					"affiliation": "University of Chicago",
					"email": "zlj@uchicago.edu"
				},
				{
					"name": "Frederic Koehler",
					"affiliation": "Stanford University",
					"email": "fkoehler@berkeley.edu"
				},
				{
					"name": "Danica J. Sutherland",
					"affiliation": "University of British Columbia; Alberta Machine Intelligence Institute",
					"email": "dsuth@cs.ubc.ca"
				},
				{
					"name": "Nathan Srebro",
					"affiliation": "Toyota Technological Institute at Chicago",
					"email": "nati@ttic.edu"
				}
			]
		},
		{
			"cover_url": "./files/JDS_Issue2_Cover3.pdf",
			"paper_url": "https://dl.acm.org/doi/epdf/10.1145/3617130",
			"title": "Language Models in the Loop: Incorporating Prompting into Weak Supervision",
			"abstract": "We propose a new strategy for applying large pre-trained language models to novel tasks when labeled training data is limited. Rather than apply the model in a typical zero-shot or few-shot fashion, we treat the model as the basis for labeling functions in a weak supervision framework. To create a classifier, we first prompt the model to answer multiple distinct queries about an example and define how the possible responses should be mapped to votes for labels and abstentions. We then denoise these noisy label sources using the Snorkel system and train an end classifier with the resulting training data. Our experimental evaluation shows that prompting large language models within a weak supervision framework can provide significant gains in accuracy. On the WRENCH weak supervision benchmark, this approach can significantly improve over zero-shot performance, an average 19.5% reduction in errors. We also find that this approach produces classifiers with comparable or superior accuracy to those trained from hand-engineered rules.",
			"authors": [
				{
					"name": "Ryan Smith",
					"affiliation": "Snorkel AI",
					"email": "topipari@umich.edu"
				},
				{
					"name": "Jason A. Fries",
					"affiliation": "Stanford University and Snorkel AI",
					"email": "pavlasek@umich.edu"
				},
				{
					"name": "Braden Hancock",
					"affiliation": "Snorkel AI",
					"email": "joecc@umich.edu"
				},
				{
					"name": "Stephen H. Bach",
					"affiliation": "Brown University and Snorkel AI",
					"email": "shoutian@umich.edu"
				},

			]
		},
		{
			"cover_url": "./files/JDS_Issue2_Cover4.pdf",
			"paper_url": "https://dl.acm.org/doi/epdf/10.1145/3617778",
			"title": "Principal Component Networks: Utilizing Low-Rank Activation Structure to Reduce Parameters Early in Training",
			"abstract": "Recent works show that overparameterized neural networks contain small subnetworks that exhibit comparable accuracy to the full model when trained in isolation. These results highlight the potential to reduce computational costs, memory footprint, and distributed communication overhead of deep neural network training without sacrificing generalization performance. Initial approaches for finding these small networks relied on expensive multi-round train-and-prune procedures, limiting their practical potential, but more recent work identifies subnetworks using structured pruning techniques early in training. In this paper, we study network activations, rather than network weights, and find that hidden layer activations in overparameterized networks exist primarily in subspaces smaller than the actual model width. We further notice that these subspaces can be identified early in training. Based on these observations, we show how to efficiently find small networks that exhibit similar accuracy to their overparameterized counterparts after only a few training epochs. We term these network architectures Principal Component Networks (PCNs). PCNs compress individual layers by retaining only the high variance linear combinations of channels—defined by the principal components of the layer inputs—a key difference from structured pruning techniques which focus on individual channel pruning using localized channel measurements. We evaluate PCNs on CIFAR-10 and ImageNet for VGG and ResNet style architectures and compare against existing methods for subnetwork identification during early training. We find that PCNs consistently reduce parameter counts with little accuracy loss, thus providing the potential to reduce the computational costs of deep neural network training. Beyond model compression, we also connect our observation regarding hidden layer activations to the feature representations learned by neural networks and discuss areas for future work.",
			"authors": [
				{
					"name": "Roger Waleffe",
					"affiliation": "University of Wisconsin-Madison",
					"email": "topipari@umich.edu"
				},
				{
					"name": "Theodoros Rekatsinas",
					"affiliation": "ETH Zurich",
					"email": "jtguibas@stanford.edu"
				},
			]
		}
	]
}
