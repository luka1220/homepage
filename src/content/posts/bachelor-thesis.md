---
template: blog-post
slug: /bachelor-thesis
date: 2020-07-01T05:00:00.102Z
title: "Bachelor Thesis"
description: BA
featuredImage: /assets/RS-O.png
---
## Title
Semantic Similarity of Concepts for a Human-Centered Idea Recommendation Feature in the Clustering Application Orchard

### Abstract
Orchard is a creative clustering application developed in the Idea2Market project. The task of bringing many ideas into spacial-relation, called clustering, is part of a more extensive ideation process and is considered highly creative and beneficial to humans in developing ideas. Hence, taking away this task with an automated cluster generation might harm the ideation process. Still, manually going through a stack of hundreds of ideas can be mundane. This thesis implements a recommendation feature that supports users in clustering many ideas to synthesize and evolve them into more advanced and promising ideas. The creative task of clustering remains in the user's hand. However, through interaction they can control which ideas are explored next when building their representation of ideas by clustering them. This is done by repeatedly specifying a target for which the recommendation feature provides similar ideas.

For the similarity measurements, to recommend similar ideas, the recommendation feature applies the information of knowledge graphs (KGs) that describe resources and encode relations and facts of concepts. This work includes experiments on the performance of five variants of concept similarity methods and one idea similarity method using the Wikidata KG to ensure the accuracy of the used similarity measures. The similarity method path uses the path-length between concepts of the KG, the methods res, lin, jcn differently apply a graph-based Information Content measurement and wpath combines the two.

The evaluation points out the potential of Wikidata as a knowledge source for semantic similarity. The semantic similarity approach proved its suitability by a high correlation to human perceptions of word similarity for five well-studied datasets, namely R&G, M&C, WS353, WS353-Sim, and SimLex. wpath performed best in three out of five datasets and thus was applied in the recommendation feature. The idea similarity method is a variant of the Word Mover's Distance and proved its accuracy in further experiments.

A Think-Aloud user study with five participants conducted for this thesis shows that the recommendation feature achieves a targeted and more efficient iteration through the ideas for the clustering tool Orchard. With the novel feature, the participants reported they were able to explore the ideas for clusters of their current interest, which enabled an in-depth iteration on various topics. These observations could indicate an improvement in the idea synthesis, which could be looked at in further research.

[Link](https://refubium.fu-berlin.de/handle/fub188/31751)
[PDF](https://refubium.fu-berlin.de/bitstream/handle/fub188/31751/Bachelorarbeit_Staerk.pdf?sequence=4&isAllowed=y)