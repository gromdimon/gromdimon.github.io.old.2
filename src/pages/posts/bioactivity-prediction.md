---
title: "Bioactivity prediction project"
date: "2021-06-01"

layout: ../../layouts/PostLayout.astro
description: "Built a complete Machine Learning project focusing on the prediction of chemical binding activity to the Beta-Amyloid protein."

img_path: "/bioactivity_prediction/header.jpeg"
img_alt: "Bioactivity prediction project"
---

# Bioactivity Prediction Project

![Header Image](/public/bioactivity_prediction/start.jpg)

> "The art of medicine consists of amusing the patient while nature cures the disease." - Voltaire

## Table of Contents
- [Introduction](#introduction)
- [Progress](#progress)
- [Results](#results)
- [Technology Learned/Used](#technology-learnedused)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction
From May 2021 to July 2021, I developed a machine learning project aimed at predicting the bioactivity of drugs that interact with the Beta-Amyloid A4 protein. This project was my first foray into the data science domain, python programming, and machine learning modeling.

## Progress
### Data Collection and Pre-processing
In the first phase, I extracted bioactivity data from the ChEMBL database, focusing on compounds tested for their efficacy against Beta-Amyloid A4. The data was cleaned and pre-processed to ensure quality and consistency for subsequent analysis.

### Descriptor Calculation and Exploratory Data Analysis
I calculated molecular descriptors that quantitatively describe the compounds. These descriptors are crucial for the modeling process as they represent chemical properties affecting bioactivity. Exploratory data analysis was conducted to understand trends and distributions in the data.

### Descriptor Dataset Preparation
The calculated descriptors were then used to prepare a final dataset. This dataset served as the input for the machine learning models, structured to effectively capture the nuances of chemical interactions with the protein.

### Model Building
Using Scikit-learn, I built a regression model employing the random forest algorithm to predict the binding affinity of compounds to Beta-Amyloid. The model was trained and validated using standard practices to ensure its reliability and accuracy.

## Results
The model demonstrated the capability to predict bioactivity with significant accuracy, offering a tool that can be used to speed up the discovery of potential therapeutic compounds for Alzheimer's disease. [View the detailed model performance and metrics here.](https://github.com/gromdimon/Bioactivity_prediction_project)

## Technology Learned/Used
Throughout this project, I deepened my expertise in:
- **Python** for programming
- **Scikit-learn** for machine learning modeling
- **RDKit** for cheminformatics

## Conclusion
This Bioactivity Prediction Project was a pivotal learning experience that introduced me to the world of data science and machine learning. Starting from this successful project, I have continued to explore and expand my skills in the technical domain, with a focus on leveraging data to drive impactful solutions.

## References
- [Project GitHub Repository](https://github.com/gromdimon/Bioactivity_prediction_project)
- [Video Explanation of the Project](https://youtu.be/plVLRashaA8?si=e5OniCH9xt-RZr4b)
