import React from "react";
import Header from "@/components/Header";
import Offset from "@/components/header/Offset";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
// import SubTopBar from "@/components/SubTopBar";
import Image from "next/image";
// import DropMenu from "@/components/DropdownMenu";
// import SidebarSection from "@/components/SidebarSection";

const page = () => {
  return (
    <div className="default-layout ">
      <header></header>
      <Offset height={160} color={"brand-white"} />
      <div className={"container mb-20"}>
        <TopBar titleHeader={"Editorial Policies"} />
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
      <div className={" container px-4 text-black"}>
        <h3>Ethical Policy Overview</h3>
        <p>
          The ethical policy of JIRBDAI is in line with the European Code of
          Conduct for Research Integrity which is also guided by the policies
          described by Committee on Publication Ethics (COPE). Authors must be
          sincere in sharing the results of their research. Research misconduct
          is bad for knowledge since it can lead to misinformation for other
          researchers. Each author must acknowledge that they will adhere to the
          JIRBDAI guidelines on editorial policy when submitting manuscripts to
          JIRBDAI. All manuscripts will be scrutinized with the hope that the
          authors have read and approved the version submitted.
        </p>
        <br />
        <br />

        <h3>Contributions and Authorship</h3>
        <p>
          Each listed author must have made a substantial scientific
          contribution to the research described in the manuscript, endorsed its
          claims and agreed to be an Author. It is important that all authors
          who have made significant scientific contributions are listed. We
          refer you to section II of the ICMJE recommendations. Authors must
          grant permission to the corresponding author to submit each paper and
          any changes in the authorship.
        </p>
        <p>
          Co-authors who made limited contributions to a specific area of the
          research paper are accountable for their work, however they could be
          held accountable only for other results too. Although not all
          co-authors are knowledgeable of all the research in their paper
          however, they should all have a procedure in place to ensure that the
          results are accurate.
        </p>
        <br />
        <br />

        <h3>Corresponding authors</h3>
        <p>
          Corresponding author is responsible for the submission and is
          accountable for al information conceming the manuscript. They are also
          saddled with the responsibility of interacting with with the editorial
          office if the need arises. After acceptance, several corresponding
          author are allowed provided that they are indicated on the title page
          of the manuscript. These authors are responsible for proofreading of
          the galley proof and also response to comment /queries about the
          published article.
        </p>
        <br />
        <br />

        <h3>Competing Interest</h3>
        <p>
          Author sanction can be given if an author fails to declare a competing
          financial interest prior to submission. Authors must disclose any
          affiliations that could be considered to be having a conflict of
          interest regarding their manuscript. They must also acknowledge all
          funding sources. Authors, reviewers as well as editors must disclose
          any conflict of interest when asked to assess a manuscript.
        </p>
        <br />
        <br />

        <h3>JIRBDAI Competing Interest Policy</h3>
        <p>
          JIRBDAI&#39; policy was created to manage and not eliminate
          conflicting interests. The policy&#39;s core principle is that
          authors, reviewers, editors must disclose any affiliations that could
          be considered to be posing conflicts of interest in relation to the
          manuscript. A conflicting interest disclosure is rarely a cause to
          invalidate research results or to change the opinions of editors or
          referees. It provides information to the reader that allows them to
          independently evaluate the work.
        </p>
        <p>
          A footnote explaining the nature of a competing interests is added to
          any article published after the disclosure is made by the editor or
          the author.
        </p>
        <p>
          JIRBDAI reserves rights to issue an Erratum that discloses any
          competing interests regarding papers published in the past. Authors,
          reviewers or editors of papers that were published in the past may be
          subject to disciplinary action, including exclusion from publication.
          This policy is applicable for all publications published in JIRBDAI.
        </p>
        <div className={"container"}>
          <h3>i. Financial Competing Interest</h3>
          <p>
            Interest in a financial organization whose product/service is
            related to the subject matter of the article should be disclosed as
            a conflicting interest.
          </p>

          <h3>ii. Personal Competing Interest</h3>
          <p>
            Conflicts can arise in personal relationships with family, friends
            or enemies as well as colleagues and competitors. It is possible for
            a editor/reviewer to have difficulties providing impartial
            decision/reviews of articles that have been written by co-workers.
            As a consequence, reviewing the work of competing authors may prove
            difficult. There may be strong family bonds that make it difficult
            for you to be objective when reviewing the work of competitors. If
            there is such conflict of interest, you can&#39;t serve as
            editor/reviewer of the manuscript.
          </p>

          <h3>iii. Authors responsiblities</h3>
          <p>
            Authors must acknowledge all funding sources as well as declare any
            competing interest.
          </p>

          <h3>iv. Responsibilities of Editor and Reviewer</h3>
          <p>
            If asked to evaluate manuscripts for publication, editors and
            reviewers need to declare any conflicts of interest. If there is a
            competing interest that hinders them from rendering an impartial
            judgment, editors and referees will be asked not to participate in
            the evaluation.
          </p>
          <br />
          <br />
        </div>
        <h3>Research of Concern</h3>
        <p>
          JIRBDAI should be informed by reviewers and authors if a manuscript
          contains any potential dual use research. JIRBDAI can examine such
          manuscript, and if necessary, may seek additional reviewers.
        </p>
        <br />
        <br />

        <h3>Errata</h3>
        <p>
          Authors should notify JIRBDAI via email (
          <span className="font-semibold text-curiousblue underline">
            editorial.office@jirbdai.com.ng
          </span>
          ) if a published article requires a correction. JIRBDAI may correct
          errors in published articles that don&#39;t significantly impact the
          results. Online corrections are possible for minor typographical
          errors which could have an affect on the meaning.
        </p>
        <p>
          JIRBDAI publishes independent or citable corrections for scientific
          mistakes that do no harm to the overall results and conclusions of
          papers. Correction requests are submitted to the editor for
          consideration in order to determine if they merit correction.
        </p>
        <p>
          JIRBDAI editors or the authors may retract articles due to widespread
          errors, unsubstantiated or missing evidence. Articles may be removed
          for honest error and scientific misconduct. Changes in names are not
          subject to formal correction unless otherwise requested by the
          author(s).
        </p>
        <br />
        <br />

        <h3>Change of Name</h3>
        <p>
          JIRBDAI recognizes people changing their names for many reasons. If
          you wish to modify the name that appears in a published article, you
          must notify the editorial office. JIRBDAI reviews every request
          carefully to ensure that the changes are made in a timely, accurate,
          confidential, and practical manner. All paper versions (HTML or PDF)
          will be updated with the initials and given/family names. Once
          corrections are affected, no notice will be given unless otherwise
          requested. Crossref will get the most current information from
          JIRBDAI. However, JIRBDAI is unable to control modifications made by
          other downstream repositories.
        </p>
        <br />
        <br />

        <h3>Image Integrity</h3>
        <p>
          Technical manipulation of images is allowed for improved readability.
          Technical manipulation refers only to the alteration of the contrast,
          brightness or color balance. The Journal Editor must receive a cover
          note notifying any technical manipulations made by the author.
          Improper technical manipulation means that an image has been altered
          to conceal, enhance, delete, or add new elements. If Editor is unsure
          of the accuracy of an author&#39;s figures, the original data would be
          requested.
        </p>
        <br />
        <br />

        <h3>License available to publish</h3>
        <p>
          Completed online submission forms grant JIRBDAI a License to publish
          the manuscript. The right of publication is terminated when a
          manuscript is rejected for publication.
        </p>
        <br />
        <br />

        <h3>Materials and Data Access Policy</h3>
        <p>
          We are committed to ensuring the storage, accessibility, and discovery
          of research data to promote transparency and efficiency in the
          research process. Research data includes the results of observations
          or experiments that support research findings, such as software, code,
          models, algorithms, protocols, methods, and other relevant materials.
        </p>
        <p>
          Authors are required to provide their research data and associated
          protocols as supplementary information in their manuscript or deposit
          them in a relevant repository, with a citation and link to the dataset
          included in their article. If depositing data or providing them as
          supplementary information is not possible, authors must provide a
          clear statement explaining why the data cannot be shared (e.g., due to
          sensitive or confidential information such as patient data). This data
          availability statement must be submitted with the manuscript and will
          appear with the published article.
        </p>
        <p>
          The term &#34;protocol&#34; refers to the methodologies, experimental
          procedures, or workflows used in the study. Authors must ensure their
          protocols include enough detail to allow others to replicate their
          methods, including steps for accessing any custom codes or algorithms.
          To provide clarity, the Methods section of the article should contain
          a &#34;Code availability&#34; subsection, explaining how readers can
          access the necessary software or algorithms.
        </p>
        <p>
          For customized codes or algorithms, the most up-to-date versions
          should be included either as supplementary materials or deposited in
          trusted repositories with version control.
        </p>
        <p>
          This policy underscores our commitment to transparency and
          reproducibility. Linking your work to the underlying data not only
          fosters transparency but also enhances visibility and could lead to
          new collaborations.
        </p>
        <br />
        <br />

        <h3>
          Citation Guidelines Policy for the Journal of Institutional Research,
          Big Data Analytics and Innovation
        </h3>
        <p>
          Authors submitting to the Journal of Institutional Research, Big Data
          Analytics and Innovation are required to follow these citation
          guidelines to ensure consistency, accuracy, and proper acknowledgment
          of sources.
        </p>
        <div className={"container"}>
          <h4>Reference List:</h4>
          Each entry should provide full details including author(s), year of
          publication, title, journal/book title, volume/issue (if applicable),
          page numbers, and DOI (where available).
          <h4>Electronic Sources: </h4>{" "}
          <div className={"container"}>
            <ol>
              <li>
                <span className={"font-bold"}>I.</span> Online articles and
                other digital sources should include a DOI or a stable URL.
              </li>
              <li>
                <span className={"font-bold"}>II.</span> Authors should ensure
                that the web addresses they provide are functional and relevant
                to the referenced material.
              </li>
            </ol>
          </div>
          <h4>Self-Citation: </h4> While self-citations are permitted, they
          should be limited and must only reference previous work that is
          directly relevant to the current research.
          <h4>Unpublished Work: </h4>
          References to unpublished work, such as manuscripts in preparation or
          under review, should be avoided. If necessary, they should be cited as
          &#34;unpublished data&#34; or &#34;personal communication&#34; and
          must have the author&#39;s permission.
          <h4>Plagiarism and Attribution:</h4>
          Authors must ensure that all citations properly attribute the original
          sources. Any form of plagiarism, including inappropriate use of cited
          materials, is strictly prohibited.
          <h4>Reference List</h4>
          By adhering to these guidelines, authors contribute to the academic
          integrity and clarity of the Journal of Institutional Research, Big
          Data Analytics and Innovation.
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default page;
