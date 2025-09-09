"use client";

import React from "react";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import SubTopBar from "@/components/SubTopBar";
import Image from "next/image";
// import { useSmoothHashScroll } from "@/hooks/useSmoothHashScroll";
// import SidebarSection from "@/components/SidebarSection";

const page = () => {
  // useSmoothHashScroll(-100);

  return (
    <div className="default-layout ">
      <header></header>
      <Offset height={160} color={"brand-white"} />
      <div className={"container mb-20"}>
        <TopBar titleHeader={"JIRBDAI' Journal Policies"} />
        <div className="flex h-24 w-full items-center">
          <Image
            src="/assets/images/random-images/tech-journal-policies-one.svg"
            alt="Scientist conducting research in laboratory"
            width={900}
            height={900}
            className="h-full w-auto object-cover"
          />
        </div>
      </div>
      <div className={"container text-black"}>
        {/* <SidebarSection title={"Section"} /> */}
        <div>
          <div className={""}>
            <br />
            <br />
            <div id={"ai-policy"}>
              <div className={""}>
                <SubTopBar titleHeader={"AI Policy"} />
              </div>
              <div className={"px-4"}>
                <h3>1.1 Overview</h3>
                <p>
                  The Journal of Institutional Research, Big Data Analytics and
                  Innovation (JIRBDAI) recognizes the rapidly evolving role of
                  Artificial Intelligence (AI) in the research and publishing
                  landscape. This policy defines the standards for acceptable
                  use of AI tools to maintain the journal&#39;s commitment to
                  transparency, academic integrity, and ethical scholarship. As
                  AI tools become more advanced and accessible, it is vital to
                  establish clear boundaries to preserve the originality and
                  trustworthiness of academic publications. This policy applies
                  to authors, editors, and peer reviewers involved in JIRBDAI’s
                  editorial workflow.
                </p>
                <br />
                <br />

                <h3>1.2 Use of AI Tools by Authors</h3>
                <p>
                  Authors may use AI tools to support their work, particularly
                  for grammar correction, language refinement, and code
                  debugging. However, the use of such tools must be fully
                  disclosed within the manuscript—preferably in the
                  “Acknowledgment” or “Methods” section. AI tools are not
                  permitted for generating scientific content, formulating
                  conclusions, or producing unverifiable data. The journal
                  explicitly forbids the use of AI for creating fictitious
                  results, images, or citations.
                </p>
                <br />
                <br />

                <h3>1.3 Transparency and Disclosure</h3>
                <p>
                  Every instance of AI tool usage must be reported clearly in
                  the manuscript. Authors must disclose:
                  <br />
                  - The name and version of the AI tool(s),
                  <br />
                  - The purpose of its use (e.g., summarization, editing), and
                  <br />
                  - Confirmation that outputs were critically reviewed by the
                  authors.
                  <br />
                  This disclosure ensures the integrity of the scholarly content
                  and facilitates a fair review process.
                </p>
                <br />
                <br />

                <h3>1.4 Responsibility and Accountability</h3>
                <p>
                  Authors retain full responsibility for the content of their
                  manuscripts, including sections influenced or supported by AI
                  tools. The use of AI cannot substitute the intellectual
                  contribution required for authorship and does not reduce the
                  author’s ethical obligations. Only individuals who meet the
                  authorship criteria—including the ability to take
                  responsibility for the manuscript—should be listed as authors.
                </p>
                <br />
                <br />

                <h3>1.5 AI-Generated Images and Graphics</h3>
                <p>
                  Any use of AI-generated figures or illustrations must be
                  disclosed, with an emphasis on ensuring that these visuals do
                  not misrepresent the data or create misleading impressions.
                  Misleading or manipulated visuals are grounds for immediate
                  rejection or retraction.
                </p>
                <br />
                <br />

                <h3>1.6 Peer Review and Editorial Use of AI</h3>
                <p>
                  Editors and peer reviewers may utilize AI for non-evaluative
                  tasks such as grammar correction or plagiarism screening.
                  However, they are not permitted to use AI tools to make
                  scientific or editorial judgments. Any AI use during the
                  editorial process must be disclosed in the editorial notes or
                  communications.
                </p>
                <br />
                <br />

                <h3>1.7 Plagiarism and Misuse Detection</h3>
                <p>
                  All submissions undergo thorough plagiarism checks using both
                  traditional software and AI-powered detection tools.
                  Submissions found to have AI-manipulated content, fabricated
                  data, or false citations will be penalized according to the
                  journal’s Publication Ethics Policy.
                </p>
                <br />
                <br />

                <h3>1.8 Training and Education</h3>
                <p>
                  JIRBDAI encourages all stakeholders—authors, reviewers, and
                  editors—to remain informed about ethical AI usage. Educational
                  resources and updated guidelines will be provided
                  periodically.
                </p>
                <br />
                <br />

                <h3>1.9 Sanctions for Misuse</h3>
                <p>
                  Violations of this policy may result in serious consequences,
                  including:
                  <br />
                  - Rejection or retraction of manuscripts,
                  <br />
                  - A temporary or permanent ban on submissions,
                  <br />- Institutional notification regarding misconduct.
                </p>
                <br />
                <br />

                <h3>1.10 Contact and Clarification</h3>
                <p>
                  For any questions about the AI Policy, authors and reviewers
                  may contact the editorial office at:{" "}
                  <a href="mailto:editorial.office@jirbdai.com.ng">
                    editorial.office@jirbdai.com.ng
                  </a>
                </p>
                <br />
                <br />
              </div>
            </div>
            <div id={"editorial-review-process"}>
              <div className={""}>
                <SubTopBar titleHeader={"Editorial Review Process"} />
              </div>
              <div className={"px-4"}>
                <h3>2.1 Composition of the Editorial Board</h3>
                <p>
                  The JIRBDAI Editorial Board comprises experienced academics,
                  recognized scientists, and professionals in diverse fields
                  relevant to institutional research, big data analytics, and
                  innovation. These experts provide a multidisciplinary
                  foundation for rigorous editorial standards. The board plays a
                  crucial role in maintaining the integrity and scholarly
                  quality of the journal by evaluating submissions, guiding peer
                  review, and upholding ethical publishing practices.
                </p>
                <br />
                <br />

                <h3>2.2 Initial Assessment by Editor-in-Chief and Deputy</h3>
                <p>
                  Upon manuscript submission, the Editor-in-Chief (EiC) and
                  Deputy EiC review the document to determine whether it aligns
                  with JIRBDAI’s scope and objectives. This step ensures that
                  the submission falls within the journal’s thematic focus and
                  is methodologically sound. Manuscripts that clearly fall
                  outside the scope or that do not meet minimal formatting and
                  ethical requirements are immediately declined without peer
                  review.
                </p>
                <br />
                <br />

                <h3>2.3 Evaluation by Section Editor-in-Chief (sEiC)</h3>
                <p>
                  If a manuscript passes the initial screening, it is assigned
                  to a Section Editor-in-Chief (sEiC) with subject matter
                  expertise. The sEiC assesses the manuscript’s scientific
                  merit, adherence to author guidelines, and clarity of
                  presentation. Editorial Assistants (EAs) conduct a plagiarism
                  check using Turnitin, and reports are delivered within 24
                  hours. Manuscripts with a similarity index below 25% are
                  eligible to proceed. The sEiC may request minor formatting
                  revisions or clarifications before advancing the manuscript.
                </p>
                <br />
                <br />

                <h3>2.4 Section Editor’s Review</h3>
                <p>
                  The Section Editor reviews the manuscript for novelty,
                  technical accuracy, and significance. Manuscripts
                  demonstrating originality and scholarly value are forwarded to
                  external peer reviewers. The Section Editor notifies the
                  corresponding author and ensures that the manuscript meets all
                  ethical and editorial standards. If the work lacks originality
                  or coherence, it may be rejected at this stage.
                </p>
                <br />
                <br />

                <h3>2.5 Editorial Discretion</h3>
                <p>
                  The Editorial Board maintains the right to reject any
                  submission at any point during the editorial process. This
                  includes cases where the manuscript does not meet the
                  journal’s quality threshold, lacks relevance to its
                  readership, or contains evidence of ethical misconduct. Over
                  50% of submissions are typically declined during the initial
                  or editorial evaluation stages. Decisions are communicated
                  promptly, and constructive feedback is provided when possible.
                </p>
                <br />
                <br />
              </div>
            </div>
            <div id={"peer-review-process"}>
              <div className={""}>
                <SubTopBar titleHeader={"Peer Review Process"} />
              </div>
              <div className={"px-4"}>
                <h3>3.1 Double-Blind Review Procedure</h3>
                <p>
                  All manuscripts accepted for peer review undergo a rigorous
                  double-blind process, in which both the authors’ and
                  reviewers’ identities are concealed. This promotes unbiased
                  evaluations and protects the integrity of the review. Each
                  submission is typically reviewed by two independent experts.
                  However, in cases where a reviewer provides compelling
                  negative feedback, the Editor may decide to reject the
                  manuscript without a second review.
                </p>
                <br />
                <br />

                <h3>3.2 Reviewer Assignment and Confidentiality</h3>
                <p>
                  Reviewers are selected based on subject expertise and
                  availability. They are expected to maintain strict
                  confidentiality and avoid any conflicts of interest. Reviewers
                  must decline assignments where personal or professional
                  relationships with the authors could bias their evaluation.
                  Unless explicitly agreed, reviewers’ identities remain
                  anonymous throughout the process.
                </p>
                <br />
                <br />

                <h3>3.3 Review Outcomes and Editor Decisions</h3>
                <p>
                  Based on reviewer feedback, the Editor may:
                  <br />
                  - Accept the manuscript,
                  <br />
                  - Request revisions (minor or major), or
                  <br />
                  - Reject the manuscript.
                  <br />
                  <br />
                  In some cases, if the manuscript is poorly structured or lacks
                  clarity, reviewers may be unable to provide meaningful
                  feedback. In such cases, authors may be asked to revise and
                  resubmit.
                </p>
                <br />
                <br />

                <h3>3.4 Revised Manuscript Submission</h3>
                <p>
                  Authors must submit a detailed response letter along with
                  revised manuscripts, addressing each reviewer comment. This
                  point-by-point response ensures transparency and improves
                  communication between reviewers and authors. The revised
                  version may be returned to the original reviewers for further
                  assessment.
                </p>
                <br />
                <br />

                <h3>3.5 Reviewer Rejection and Appeals</h3>
                <p>
                  A single negative review may suffice for rejection if the
                  Editor concurs with the critique. Authors may appeal
                  rejections within 30 days. Appeals must include:
                  <br />
                  - A one-page justification,
                  <br />
                  - Responses to reviewers’ technical concerns, and
                  <br />
                  - Specific text revisions made.
                  <br />
                  <br />
                  Appeals are reviewed by senior editors or forwarded to a new
                  reviewer if warranted.
                </p>
                <br />
                <br />

                <h3>3.6 Acceptance Rates and Common Rejection Reasons</h3>
                <p>
                  JIRBDAI maintains an acceptance rate of approximately 19%.
                  Common grounds for rejection include:
                  <br />
                  - Misalignment with journal scope,
                  <br />
                  - Similarity index above 25%,
                  <br />
                  - Unoriginal content or lack of significance,
                  <br />
                  - Use of AI-generated content,
                  <br />
                  - Technical flaws that affect result reliability,
                  <br />
                  - Reviewer refusal due to mismatch with journal objectives.
                  <br />
                  <br />
                  Manuscripts may also be rejected post-review if they fail to
                  address critical concerns or introduce new problems during
                  revisions. Authors are encouraged to align submissions closely
                  with JIRBDAI’s editorial scope and guidelines to improve their
                  chances of acceptance.
                </p>
                <br />
                <br />
              </div>
            </div>
            <div id={"publication-ethics"}>
              <div className={""}>
                <SubTopBar titleHeader={"Publication Ethics"} />
              </div>
              <div className={"px-4"}>
                <h3>4.1 Introduction</h3>
                <p>
                  To uphold the integrity of scientific publishing, maintain
                  public trust in scientific findings, and ensure that authors
                  receive appropriate credit for their work, the Journal of
                  Institutional Research, Big Data Analytics and Innovation
                  (JIRBDAI) adheres to strict ethical guidelines. The following
                  practices are considered unethical and must be avoided:
                </p>
                <br />
                <br />

                <h3>4.2 Data Fabrication and Falsification</h3>
                <p>
                  &bull; Fabrication involves inventing data or results that
                  were never obtained through actual research.
                  <br />
                  &bull; Falsification refers to manipulating research data or
                  results, including altering images or figures, after
                  conducting the experiment.
                  <br />
                  &bull; Authors found guilty of fabrication or falsification
                  may face serious consequences, including the retraction of
                  their published work and formal sanctions.
                </p>
                <br />
                <br />

                <h3>4.3 Plagiarism</h3>
                <p>
                  Using another person’s ideas, text, or findings without proper
                  attribution is unethical. This includes copying even a single
                  sentence from unpublished or published sources without
                  citation. Such manuscripts will be rejected outright, and any
                  published work found to be plagiarized may be retracted or
                  corrected.
                </p>
                <br />
                <br />

                <h3>4.4 Simultaneous Submissions</h3>
                <p>
                  Submitting the same manuscript to multiple journals
                  concurrently is not permitted. This practice wastes the time
                  of editors and reviewers and can harm the credibility of both
                  the authors and the journals involved. Authors caught engaging
                  in this may face disciplinary measures.
                </p>
                <br />
                <br />

                <h3>4.5 Redundant (Duplicate) Publications</h3>
                <p>
                  Redundant publication refers to submitting multiple
                  manuscripts that present the same or substantially similar
                  research findings. Authors are encouraged to consolidate
                  related findings into a single comprehensive article.
                  Redundant submissions will be penalized.
                </p>
                <br />
                <br />

                <h3>4.6 Improper Authorship Attribution</h3>
                <p>
                  Only individuals who have made significant scientific
                  contributions to the research should be listed as authors. All
                  contributors, including students or lab staff, must be
                  acknowledged appropriately. Gift authorship—crediting someone
                  who did not contribute—is unethical. Manuscripts found to have
                  improper authorship may be rejected, and the institutions
                  involved may be notified. Manuscripts must be submitted by the
                  authors themselves.
                </p>
                <br />
                <br />

                <h3>4.7 Citation Manipulation</h3>
                <p>
                  Authors should not include references simply to boost citation
                  metrics—either their own, those of colleagues, or of a
                  specific journal. Similarly, editors and reviewers must not
                  request citation additions solely to increase citations of
                  their own work or that of their associates. Any such practices
                  may lead to sanctions.
                </p>
                <br />
                <br />

                <h3>4.8 Conflicts of Interest for Editors and Reviewers</h3>
                <p>
                  Editors and reviewers must recuse themselves from handling
                  manuscripts if they have recent publications with the
                  author(s), personal or professional relationships, or any
                  prior discussion about the submission. Any potential conflict
                  must be disclosed to maintain transparency and impartiality.
                </p>
                <br />
                <br />

                <h3>4.9 Sanctions</h3>
                <p>
                  In response to ethical violations, JIRBDAI may impose one or
                  more of the following sanctions:
                  <br />
                  - Immediate rejection of the manuscript, including any other
                  manuscripts submitted by the same author(s).
                  <br />
                  - A two-year ban on future submissions by the offending
                  author(s).
                  <br />
                  - Suspension from serving as an editor or reviewer.
                  <br />- In cases of severe ethical misconduct, further actions
                  may be taken.
                </p>
                <br />
                <br />

                <h3>4.10 Reporting and Investigation</h3>
                <p>
                  Any suspected violations of publication or research
                  ethics—before or after publication—should be reported to the
                  Editor-in-Chief at{" "}
                  <a
                    className={"link-text"}
                    href="mailto:editor-in-chief@jirbdai.com.ng"
                  >
                    editor-in-chief@jirbdai.com.ng
                  </a>
                </p>
                <br />
                <br />

                <h3>4.11 Corrections and Retractions</h3>
                <p>
                  If an error is discovered in a published article, the
                  publisher will investigate in collaboration with the authors
                  and their institution. Corrections to manuscripts can be
                  issued by the authors, while publisher errors may be amended
                  through an Erratum. If misconduct is confirmed, the article
                  may be retracted following the COPE Retraction Guidelines.
                </p>
                <br />
                <br />
              </div>
            </div>
            <div id={"research-article-guideline"}>
              <div className={""}>
                <SubTopBar titleHeader={"Research Article Guideline"} />
              </div>
              <div className={"px-4"}>
                <h3>5.1 Abstract</h3>
                <p>
                  Your abstract should not be more than 250 words and should
                  include the following:
                </p>
                <p>
                  &bull;{" "}
                  <strong>Background/Introduction (1–2 sentences):</strong>{" "}
                  Provide a brief context for the research. Highlight the
                  problem or gap that your study addresses.
                  <br />
                  &bull; <strong>Objective (1 sentence):</strong> Clearly state
                  the purpose or aim of the research.
                  <br />
                  &bull; <strong>Methods/Approach (2–3 sentences):</strong>{" "}
                  Summarize the methodology, including the design, data sources,
                  and analytical tools used.
                  <br />
                  &bull; <strong>
                    Key Findings/Results (2–3 sentences):
                  </strong>{" "}
                  Highlight the main results or discoveries. Use specific
                  numbers or trends where possible.
                  <br />
                  &bull;{" "}
                  <strong>Conclusion/Significance (1–2 sentences):</strong>{" "}
                  Summarize the implications or importance of your findings.
                  Optionally, mention recommendations or future directions.
                </p>
                <br />
                <br />

                <h3>5.2 Introduction</h3>
                <p>
                  The introduction sets the stage for your research. It should:
                </p>
                <p>
                  &bull; <strong>Present the Problem:</strong> Clearly outline
                  the problem or research gap your study addresses. Use
                  compelling statistics, anecdotes, or recent developments to
                  grab attention.
                  <br />
                  &bull; <strong>State the Research Objectives:</strong>{" "}
                  Highlight the specific objectives of the study.
                  <br />
                  &bull; <strong>Explain the Motivation:</strong> Show why this
                  research is important—its practical implications or
                  contributions to knowledge.
                  <br />
                  &bull; <strong>Provide Context:</strong> Briefly describe the
                  field and connect your work to it without delving too much
                  into related work (reserved for the next section).
                  <br />
                  &bull; <strong>End with a Thesis Statement:</strong> Conclude
                  the introduction by outlining your research hypothesis or key
                  contributions.
                </p>
                <br />
                <br />

                <h3>5.3 Related Works (Literature Review)</h3>
                <p>
                  The related works section reviews prior research, helping
                  situate your study within the broader academic context.
                </p>
                <p>
                  &bull; <strong>Organize Chronologically or Topically:</strong>{" "}
                  Discuss the most relevant works either by timeline or by
                  themes.
                  <br />
                  &bull; <strong>Highlight the Gaps:</strong> Identify areas
                  where previous studies fall short or lack exploration.
                  <br />
                  &bull; <strong>Connect to Your Study:</strong> Show how your
                  work addresses the identified gaps or advances existing
                  knowledge.
                  <br />
                  &bull; <strong>Be Concise and Analytical:</strong> Avoid
                  lengthy descriptions; instead, critically analyze the
                  relevance and shortcomings of the literature.
                </p>
                <br />
                <br />

                <h3>5.4 Methodology</h3>
                <p>
                  The methodology details how the research was conducted,
                  ensuring reproducibility.
                </p>
                <p>
                  &bull; <strong>Describe the Approach:</strong> Clearly state
                  the research design (e.g., experimental, observational,
                  computational).
                  <br />
                  &bull; <strong>Detail the Tools/Frameworks:</strong> Specify
                  software, datasets, models (e.g., ARIMA, STRIDE), or
                  algorithms used.
                  <br />
                  &bull; <strong>Explain Data Collection:</strong> Provide
                  information on how data was gathered, including sources,
                  sampling techniques, and timeframes.
                  <br />
                  &bull; <strong>Outline the Process:</strong> Explain steps in
                  the analysis, model implementation, or experimental setup.
                  <br />
                  &bull; <strong>Justify Choices:</strong> Explain why certain
                  methods, models, or parameters were selected.
                </p>
                <br />
                <br />

                <h3>5.5 Results and Discussion</h3>
                <p>
                  This section presents findings and interprets their
                  significance.
                </p>
                <p>
                  &bull; <strong>Separate Results from Interpretation:</strong>{" "}
                  Use subsections if necessary (e.g., Results, Discussion).
                  <br />
                  &bull; <strong>Be Clear and Logical:</strong> Present results
                  in a logical order, using tables, graphs, or charts for
                  clarity.
                  <br />
                  &bull; <strong>Interpret Results:</strong> Explain what the
                  findings mean in the context of the research questions.
                  <br />
                  &bull; <strong>Compare with Literature:</strong> Relate
                  results to previous studies. Highlight consistencies or
                  deviations and their implications.
                  <br />
                  &bull; <strong>Discuss Limitations:</strong> Address potential
                  weaknesses or unexpected results and their causes.
                  <br />
                  &bull; <strong>Emphasize Implications:</strong> Highlight the
                  practical, theoretical, or societal relevance of the results.
                </p>
                <br />
                <br />

                <h3>5.6 Conclusion</h3>
                <p>
                  The conclusion summarizes key findings and their broader
                  implications.
                </p>
                <p>
                  &bull; <strong>Recap the Research Objectives:</strong> Briefly
                  restate the problem and objectives.
                  <br />
                  &bull; <strong>Highlight Key Findings:</strong> Summarize your
                  main results and their significance.
                  <br />
                  &bull; <strong>State Contributions:</strong> Emphasize how
                  your study advances the field or solves the problem.
                  <br />
                  &bull; <strong>Offer Recommendations:</strong> Suggest
                  practical applications or future research directions.
                  <br />
                  &bull; <strong>Avoid Repetition:</strong> Do not simply
                  copy-paste sentences from earlier sections; rephrase them
                  succinctly.
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
