---
title: "Data Privacy: What, Why and How?"
last_modified_at: 2025-04-09T12:20:02+05:30
categories:
  - blog
tags:
  - Privacy
---

We relate privacy and understand it more in the context of physical privacy, where one or more people want to be isolated from the rest of society to think freely, act, and not be judged. What does privacy mean in the context of information technology and data? Let’s take an example: A patient shares their healthcare data, which includes age, gender, health history, and imaging data, with the doctor/hospital based on the assumption that it will be confidential. Data is not private with respect to the doctor or the hospital but it’s practically private for any third person/party. So the privacy of data is contextual, where it’s okay to share data with a party or certain parties but confidential to rest. This theory of privacy is called contextual integrity [1]. Privacy generally applies in the context of a particular subset of data called personal data such as patient records. Personal data is any information that relates to an identified or identifiable living individual [2]. There are different types of personal data :

- Prominently, identifiable data – data consists of personal information attributes like – name, gender, email, phone info, etc.
- Location data – user’s location data at various points in time.
- Behavioural data – data that has records of user behaviour – such as their browsing habits, and through which one can directly or by some means (like AI) can infer user’s behaviour and routines.

But does security by default guarantee privacy of data? For example, antivirus software scans all files in one’s PC and analyses, detects, and prevents malware but it can also read contents, know behavioural usage of the user, browsing habits and recommend products directly or sell this information to third parties. The contrast between privacy and security is beautifully illustrated in the below picture. Security without privacy is like having a house made of bullet-proof glass. Sure, no one is getting inside, but your personal life is still on display.

<img src="/assets/images/privacy-glass.png">
<figcaption> Fig 1:Stalker-friendly House of Glass [3]</figcaption>


Nevertheless, security and privacy are related. Security techniques are used to enforce privacy in terms of confidentiality of data (using techniques like encryption) and anonymization (and differential privacy) of data to scrub personally identifiable data. More on these techniques are discussed at a later part of the article.

## Privacy vs utility of data:
Why does privacy matter? Privacy is important from the following perspectives:

1. **Individual/society Perspective**: Identifiable data can be misused for online harassment and abuse, and be used for identity theft. Location-based data can be used to track and monitor individuals by other parties or through surveillance systems. Their behavioural data is quite important and forms the basis of a person, this data can be sold to third-party advertisers for targeted ads and surveillance systems to control people. Personal data – especially behavioural data can be used to control an individual or community and thereby limit the freedom of speech, thought, and expression.
In this light, privacy was regarded as the fundamental right by the Supreme Court in the K.S. Puttaswamy v Union of India Judgment [4]

2. **Companies’ Perspective**: Need to ensure the trust of users with utmost safety of customers’ privacy sensitive data against data breaches. Also, these companies depending on sectors need to follow certain compliance – HIPAA for Medical Data in the USA, and GDPR for personal data in Europe. Digital Personal Data Protection Act 2023 in India.
These laws protect the user’s data, so that it is not misused for the purpose stated in the above point, and the right to privacy is held.

Privacy of data seeks to minimise the sharing of data and restrict the usage/processing of data to only the purposes consented to during the data collection. On the contrary, the motivation behind data exchanges, such as [CDPG](https://dataforpublicgood.org.in) (formerely [IUDX](https://iudx.org.in)), is to break data silos across various vendors in smart cities, government sectors, and agriculture through controlled/consent-based access to data that providers can leverage. Discovery and access of various types of data (spatial, temporal, and complex data) through the same set of standard APIs accelerates the consumption of data, and helps in research and development of novel applications. The data exchange model works well when data is non-personal and can be shared with a third-party data exchange platform or directly to consumers from their platform. The challenge arises when dealing with personal data, as its sharing and collaboration are hindered by privacy concerns and the legal and regulatory frameworks governing it. But this data, when shared, combined from various sources, and collaborated upon, has immense value. A very good use case for combining different personal data is to analyse credit risk score for agricultural loans for a farmer based on the holdings of land, the crop grown, crop yield, financial status, sales.

This results in a trade-off between privacy and utility. To maximise the utility derived from personal data, there must be a compromise on privacy, whereas opting for stronger privacy measures entails a reduction in the utility that can be extracted from the data.

## The way out: Utility of data in a privacy-preserving way

Is there a way to preserve privacy and still get value out of data? Yes, there is a set of actively researched (and also being deployed) technologies that exactly do that, called privacy-preserving technologies/Privacy enhancing technologies (PETs).

Broadly, different privacy-preserving technologies/methodologies can be divided into two classes. In most cases, there would be a need for implementing both classes of privacy to ensure end-to-end privacy – during processing and also after processing data

1. **Input privacy;** This category of technologies aims to safeguard data privacy during the processing phase, ensuring that the data of each input party remains confidential from other input data parties and the party or parties conducting the processing.

    The most prominent technologies are Confidential Computing and Secure Multi-party computing (SMPC). Confidential Compute is based on a hardware-based trusted execution environment (TEE), where data is encrypted in memory i.e. during processing, from other applications on the host, the underlying host, and the hypervisor.

    In SMPC, the participating input parties send secret shares of their respective data to multiple compute parties, which in turn process the shares in order to compute a joint function of input data. The computing parties perform necessary exchange of intermediate data (towards obtaining the required function output) while ensuring that the input data remains private (and cannot be reconstructed either fully or partially) at the computing servers. SMPC employs cryptographic tools and guarantees privacy based on theoretical security.

2. **Output Privacy:** In this type of privacy, given the outputs, PETs tries to minimise the privacy leak of the input data used for processing. Example: Consider the aggregate of employee’s age/salary data given as output. When there is a continuous release of this data, and the employee count is acquired from either the same or a separate source, it becomes possible to deduce the age and salary of the remaining employees. The most prominent technologies are anonymization-based techniques such as k-anonymity and Differential privacy. Anonymization-based techniques use suppression or generalisation of personal identifiers attributes in data but it doesn’t mathematically guarantee that output cannot be re-identified. On the other hand, Differential privacy(DP) mathematically guarantees the upper bound of the privacy leak of input data. DP achieves this through the addition of noise.

## Conclusion
Data privacy may seem subtler than physical privacy but it is important as it can define one’s/communities life and freedoms. Privacy is constantly evolving and what information is private/sensitive keeps changing depending on social norms and evolving attacks. By year-end 2024, Gartner predicts [6] that 75% of the world’s population will have its personal data covered under modern privacy regulations. Privacy will be disruptive for companies in how they handle personal data but it also presents an opportunity to increase the trust among users and increase its unique selling point.

Privacy Enhancing Technologies(PETs) are the way to be compliant with privacy norms and unlock the potential of personal data – by sharing and combining data to get more value. In some cases shifting the place where processing is done – from on-prem to cloud-based on confidential computing PET. But there is a long way to go to improve performance, the cost of using this technology, the maturity of technology, and the accuracy of outputs.

At [IUDX](https://iudx.org.in)/[CDPG](https://dataforpublicgood.org.in), we explore these technologies and explore how they can be used and implemented in real world scenarios. We aim to participate in creation and development of standards in the PETs domain, and drive policy changes to reference these standards, thereby unleashing the power of data in a privacy-preserving manner.

 Revieweed by [Anshoo Tandon](https://anshootandon.github.io/profile/)
### References

Original Post [here](https://iudx.org.in/data-privacy-what-is-it-why-do-we-need-it-and-how-can-it-be-achieved/)

  1. [Helen Nissenbaum’s theory of informational privacy as ‘contextual integrity’](https://digitalcommons.law.uw.edu/wlr/vol79/iss1/10/) : 
  2. [What is personal data in EU data protection law?](https://commission.europa.eu/law/law-topic/data-protection/reform/what-personal-data_en)
  3. [Privacy Mythbusting #6: Security equals privacy.](https://spreadprivacy.com/security-is-not-privacy/)
  4. [Right to Privacy verdict](https://en.wikipedia.org/wiki/Right_to_Privacy_verdict)
  5. [THE DIGITAL PERSONAL DATA PROTECTION ACT, 2023](https://www.meity.gov.in/writereaddata/files/Digital%2520Personal%2520Data%2520Protection%2520Act%25202023.pdf&sa=D&source=docs&ust=1698641773067961&usg=AOvVaw17vRxxy6yzYAFnP7BiB5br)
  6. [Gartner Top five trends in Privacy](https://www.gartner.com/en/newsroom/press-releases/2022-05-31-gartner-identifies-top-five-trends-in-privacy-through-2024)