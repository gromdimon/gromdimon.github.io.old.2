---
title: "Brain Segmentation Project"
date: "2024-05-05"

layout: ../../layouts/PostLayout.astro
description: "Developed a deep learning project focused on segmenting brain tumors from MRI images using the U-Net architecture."

img_path: "/brain_segment/header.jpg"
img_alt: "Brain Segmentation Project"
---

# Brain Segmentation Project

![Header Image](/brain_segment/start.jpg)

> "The brain is a world consisting of a number of unexplored continents and great stretches of unknown territory." - Santiago Ramón y Cajal

## Table of Contents
- [Introduction](#introduction)
- [Progress](#progress)
- [Results](#results)
- [Technology Learned/Used](#technology-learnedused)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction
From March 2024 to May 2024, I undertook a deep learning project focused on brain tumor segmentation from MRI images. This project aimed to develop a model capable of accurately identifying of brain tumor regions in medical images, enabling on-device inference for real-time clinical applications.

## Progress
### Data Collection and Pre-processing
We used the BRATS (Brain Tumor Segmentation) dataset, which contains MRI images of brain tumors with corresponding segmentation masks. Since the data was already pre-processed and annotated, we focused on standardizing the image sizes and intensities for consistency. Also we enlarged the dataset using data augmentation techniques.

### Model Architecture
We implemented the U-Net architecture, since alternatives like FCN, SeqNet and UNNETR were not as effective in this context. The U-Net model was trained on the pre-processed data to learn the intricate patterns and features of brain tumors in MRI images. The model was optimized using the Adam optimizer and the Dice coefficient loss function.

In addition we used further optimisations (such as floating point precision) for on-device inference. This allowed us to achieve real-time performance on standard hardware.

## Results
The trained model was evaluated on a separate test set, achieving an average Dice coefficient of 0.85. This high accuracy demonstrates the model's ability to accurately segment brain tumors from MRI images, providing a valuable tool for radiologists and clinicians. Another important metric was the inference time, which was under 100ms per image on a standard GPU. Finally, we achieved
a model weight of 60KB, which is suitable for deployment on edge devices.

## Technology Learned/Used
Throughout this project, I deepened my expertise in:
- **Python** for programming
- **PyTorch** for deep learning modeling
- **OpenCV** for image processing
- **Monai** for medical image analysis
- **Weights & Biases** for experiment tracking

## Conclusion
The Brain Segmentation Project was the first AI project in Image Analysis that I undertook. New 
Deep Learning models and techniques were learned and applied, and the project provided a solid foundation for further exploration in the field of medical imaging. This project was completed as
the internship project at the Freie Universität Berlin and AI4Health Lab at Berlin Institute of Health, Charité.

## References
- [Project GitHub Repository](https://github.com/gromdimon/brain-segment)

