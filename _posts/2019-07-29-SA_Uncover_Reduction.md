---
title: "面向还原与生成的网络空间知识化表示方法"
date: 2019-07-29
layout: post
categories: SA
---

# 面向还原与生成的网络空间知识化表示方法


## 问题概述
背景：网络空间相关数据匮乏制约着网络空间相关研究及其实验的开展，还原与生成获得网络空间仿真数据，可为开展相关研究提供基础支撑。由于数据匮乏，相关知识难以通过机器学习获取，需要借助领域知识来实现还原与生成获得网络空间仿真数据。
问题：网络空间结构复杂，网络空间由各式各样的网络实体组成，如个人计算机、路由器、服务器、数据库、认证中心、移动热点等等；网络空间感知数据具有大数据的5V（Volume/Variety/Value/Velocity/Veracity）特性，增加了数据处理的难度；网络空间地形训练数据匮乏，仅仅依靠机器学习难以实现网络空间的还原与生成。实现网络空间态势感知，亟待解决的问题是，如何从网络传输数据重构网络空间，包括网络拓扑和实体属性。
## 研究内容及参考技术路线
### 针对典型网络类型，研究知识的综合（最优）表示方法，包括：
面向网络空间构造方式、拓扑关系、动态行为等方面的知识获取；
各类知识的组织与融合方法，如解析模型、机器学习训练的模型、领域知识的有机集成与高效管理。
### 面向综合（最优）表示的知识，研究其运用方法，包括：
面向多类融合知识的高效集成推理机制/方法，面向网络空间感知大数据处理，研制解析模型、机器学习模型计算、领域知识相衔接的推理接口或推理机制；
与其它方法相结合的推理方法，如转换为贝叶斯网的知识表示与推理。
### 基于知识的网络空间还原与生成方法
网络空间模拟案例生成算法，例如基于逻辑推理/案例推理/概率推理的网络空间还原与生成过程。
## 研究资源
### 网络空间地形标准
### MITRE发布的网络空间相关标准
### 文献
Raymond D, Cross T, Conti G, et al. Key terrain in cyberspace: Seeking the high ground[C]// International Conference on Cyber Conflict. 2014.
Zhou Z H . Abductive learning: towards bridging machine learning and logical reasoning[J]. Science China Information Sciences, 2019, 62(7):76101.
### 相关知识库
简称	格式	名称	译名	sourceAddr
MBO	OWL	malicious behavior ontology	恶意行为本体	A. Gr´egio, R. Bonacin, A. C. de Marchi, O. F. Nabuco, and P. L. de Geus, “An Ontology of Suspicious Software Behavior,” Applied Ontology, vol. 11, no. 1, pp. 29–49, 2016.
VDO	OWL	Vulnerability Description Ontology	脆弱性描述本体	http://csrc.nist.gov/publications/PubsDrafts.html#NIST-IR-8138
CybOX	OWL	Cyber Observable eXpression	网络可观察对象表达	http://cybox.mitre.org
		Modeling Cyber-Physical Systems	 	https://www.researchgate.net/publication/220473317_Modeling_Cyber-Physical_Systems
		The Essential Features of an Ontology for Cyberwarfare	网络战基本特征本体	http://www.crcnetbase.com/doi/abs/10.1201/b15253-7
MAEC	OWL	Malware Attribute Enumeration and Characterization	病毒属性枚举与刻画	http://maec.mitre.org/
SMO	OWL	Security Metric Ontology	安全度量本体	https://github.com/marcusp46/security-metrics-ontology
