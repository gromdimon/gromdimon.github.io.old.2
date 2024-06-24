---
title: "BeLLM - A Belarusian LLM"
date: "2024-01-10"

layout: ../../layouts/PostLayout.astro
description: "The beLLM project pioneers the development of a Belarusian Large Language Model (LLM), leveraging the rich literary heritage of Belarus to train a model capable of understanding and generating Belarusian text."

img_path: "/bellm/header.jpg"
img_alt: "BeLLM - A Belarusian LLM"
---

# beLLM - A Belarusian Large Language Model (LLM)

![Header Image](/bellm/road.jpg)

> "Language is the road map of a culture. It tells you where its people come from and where they are going." - Rita Mae Brown

## Table of Contents
- [Introduction](#introduction)
- [Progress](#progress)
- [Results](#results)
- [Technology Learned/Used](#technology-learnedused)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction
The beLLM project pioneers the development of the first Belarusian Large Language Model, inspired by the advancements in NLP for supporting underrepresented languages. This project aims to create a model that understands and generates text in Belarusian, leveraging the rich literary heritage of Belarus. The timeline of the project was from December 2023 to January 2024.

## Progress
### Project Setup
The project commenced with the architecture design inspired by GPT-2 and nanoGPT. I was referring to the existing implementations and adapting them to the Belarusian language (vocabularies, tokenization, etc.). Also the question of data collection and preprocessing was addressed by manual curation of a dataset. The computational resources were gained through servers of FU Berlin, Math Department.

### Data Collection and Preparation
I manually curated and preprocessed a dataset consisting of Belarusian poems and prose. The dataset includes works from notable Belarusian authors and encompasses over 9.5 million characters.
The dataset includes the following sources:


- [Belaruskaja Palichka](https://knihi.com/)
- [Ejka](https://ejka.ru/)
- [LitBel](https://lit-bel.org/)
- [RuLit](https://www.rulit.me/)
- [Stihi.by](https://stihi.by/)
- [BelSputnik](https://bel.sputnik.by/)

Some of the authors included in the dataset:
- Maxim Tank (Максім Танк) 
- Yanka Kupala (Янка Купала)
- Yakub Kolas (Якуб Колас)
- Maxim Bogdanovich (Максім Багдановіч)
- Vasyl Bykov (Васіль Быкаў)
- Francishak Bagushevich (Францішак Багушэвіч)
- Yanka Bryl (Янка Брыль)


### Model Training
The training was conducted using PyTorch on a GPU-accelerated server. The model was trained on the curated dataset for multiple epochs, optimizing the loss function to enhance the model's language generation capabilities. The total training time was approximately 4 hours
and final model size is 125MB.

## Results
The trained model can generate coherent and contextually appropriate Belarusian text, demonstrating promising capabilities in language generation for an underrepresented language. [View generated samples and model performance here.](https://github.com/gromdimon/beLLM).
Also, the models are available on Hugging Face model hub. [beLLM on Hugging Face](https://huggingface.co/gromdimon/beLLM)

## Technology Learned/Used
Throughout this project, I deepened my expertise in:
- **PyTorch** for model training and development
- **Python** for general programming
- **NumPy** for numerical computations
- **Pydantic** for data validation

## Conclusion
beLLM represents a significant step towards enriching the NLP tools available for Belarusian, offering insights and possibilities for future linguistic and cultural studies.

## References
- [beLLM on GitHub](https://github.com/gromdimon/beLLM)
- [beLLM on Hugging Face](https://huggingface.co/gromdimon/beLLM)
- [RuPoemGPT](https://github.com/gromdimon/ml-random/tree/master/rupoemgpt)
- [nanoGPT by Andrej Karpathy](https://github.com/karpathy/nanoGPT)
