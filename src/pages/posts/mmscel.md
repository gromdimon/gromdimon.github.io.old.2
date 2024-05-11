---
title: "MMSCel"
date: "2022-11-20"

layout: ../../layouts/PostLayout.astro
description: "Engaged in the development of various Machine Learning models to solve multimodal challenges, focusing on integrating diverse data types."

img_path: "/mmscel/header.jpg"
img_alt: "MMSCel"
---

# MmSCel Kaggle Contest

![Header Image](/public/mmscel/water.jpg)

> "Understanding the intricate mechanics of cells will pave the way for breakthroughs in personalized medicine." - Anonymous

## Table of Contents
- [Introduction](#introduction)
- [Progress](#progress)
- [Results](#results)
- [Technology Learned/Used](#technology-learnedused)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction
In November 2022, I participated in the MmSCel Kaggle Contest which aimed at predicting how DNA, RNA, and protein measurements co-vary in single cells during their development from stem cells into mature blood cells. This challenge was not only about integrating various data types but also predicting cellular behavior at unseen future time points, thus pushing the boundaries of current single-cell analysis methods.

## Progress
### Data Exploration and Preprocessing
The initial phase involved exploring the 300,000-cell dataset provided by Cellarity, which included data from different human donors and time points. Using Pandas and NumPy, I cleaned and preprocessed the data to handle sparsity and noise inherent in single-cell measurements.

### Model Development
I developed multiple machine learning models using PyTorch and Scikit-learn to handle the prediction tasks. The models were designed to predict one modality from another within the same cell, considering the dynamics of cellular processes over time.

### Integration of Modalities
Special attention was given to integrating different genomic modalities — DNA accessibility, RNA expression levels, and protein abundance — in a way that respects their biological sequence and regulatory feedback mechanisms.

### Evaluation and Optimization
Models were evaluated based on the Pearson correlation coefficient between predicted and actual measurements. I iteratively refined the models to improve their predictive accuracy, particularly focusing on how well they generalized to data from later time points not included in the training set.

## Results
The developed models demonstrated a strong ability to predict cellular states across different modalities, achieving high correlation scores. They were later integrated into bigger model of other team members.

## Technology Learned/Used
During this contest, I enhanced my skills in:
- **PyTorch** for building and training advanced machine learning models
- **Scikit-learn** for implementing traditional machine learning techniques
- **Pandas and NumPy** for data manipulation and preprocessing
- **Multimodal Data Integration** in the context of single-cell analysis

## Conclusion
The MmSCel Kaggle Contest was a challenging yet rewarding experience that enhanced my understanding of single-cell genomics and the application of machine learning to predict dynamic biological processes. This experience gave me clear understanding of the importance and advancements of Deep Learning in the field of biology.

## References
- [Competition Page](https://www.kaggle.com/competitions/open-problems-multimodal)
