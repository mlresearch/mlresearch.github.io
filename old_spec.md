---
layout: page
title: PMLR Specification
tagline: Specification of how to provide the proceedings
---


*Version 1.0 – May 22nd, 2013*

To publish a proceedings with PMLR, the organisers will need to
provide the PMLR Production Editor (Mark Reid) with:

1.  A BibTeX file (described below) with the details of each paper in
    the proceedings.
2.  A collection of PDF files (and, optionally, supplementary files).

The following specification is for simple conference proceedings that
consist of one or more papers that are to be displayed in page order
with links to associated PDF and supplementary files. If you need any
clarifications, or need to publish proceedings with special sections,
awards, multiple cycles, or other features, please email

mark.reid at anu dot edu dot au

.

### The BibTeX file

**Note**: *The contents of each field must be valid BibTeX (i.e., make
sure special characters are escaped correctly)*.

All of the conference and paper details are contained in a single BibTeX
file. You can name it whatever you like but we suggest you use some
association with the conference name (e.g., `icml13.bib`)

There are two types of entry that must appear in the BibTeX file:

-   There **must** be a single `@Proceedings` entry with the conference
    details. It **must** include the following fields:
    -   `booktitle`: the long name of the conference
    -   `shortname` the abbreviation for the conference (without the
        year, e.g., ICML)
    -   `year` : the year of the conference (e.g., 2013)
    -   `editor`: the editors’ names (in “Lastname, Firstnames” format,
        separated by “and”)
    -   `volume`: the PMLR number assigned to your conference
    -   Other fields may be present in the `@Proceedings` entry but
        these will be ignored at present.
-   There **must** be at one `@InProceedings` entry for each paper. Each
    entry **must** have the following fields:
    -   `title`: The title of the paper
    -   `author`: The paper’s authors in “Lastname, Firstnames” format,
        separated by “and”
    -   `pages`: The page numbers in “startpage–endpage” format
    -   `abstract`: The paper’s abstract in valid LaTeX
    -   Other fields may also appear in the `@InProceedings` entries but
        these will be ignored at present.

The identifiers should be of the form `lastnameYY` where `lastname` is
the lowercase last name of the first author and `YY` is the last two
digits of the year of the conference. If two papers share the same
identifier under this scheme, they must be disambiguated by appending
one of `a`, `b`, `c`, etc. to the conflicting identifiers (e.g.,
`reid12a` and `reid12b`)

### The Papers and Supplementary Material

The paper PDFs must have a filename corresponding to the identifier of
its BibTeX entry. For example, the PDF for the `reid12a` entry must have
filename `reid12a.pdf`. These should all appear in the same directory as
the BibTeX file describing all the entries.

Make sure all supplementary filenames for a paper with ID `lastnameYY`
begin with the same ID but end with the suffix `-supp` (e.g., The PDF
supplementary should be named `lastnameYY-supp.pdf`). These should
appear in the same directory as the BibTeX file you provide us. Use
whichever file extension is most appropriate (e.g., `.pdf` for PDF
files, `.zip` for zipped files, `.mov` for movies, etc.)

For example, suppose the paper with identifier `reid12b` had a
supplementary PDF file with proofs. You should give us a file named
`reid12b-supp.pdf`. The generated site for the `reid12b` entry will
contain a link titled `supplementary` to the files `reid12b-supp.pdf`.

Sample BibTeX file and papers
-----------------------------

Below is a sample of a BibTeX file for the 2nd International Conference
on Examples (ICE’13) in 2013. It has been given volume number 57 and is
edited by Jane Smith and Joe Bloggs. It contains three papers. It was
provided as part of a gzipped tarball^[1](#fn1)^ `ice13.tar.gz` along
with the PDF and supplementary files. The contents of the tarball is:

-   `ice13.bib` (The BibTeX file below)
-   `jones13a.pdf`
-   `jones13a-supp.pdf` (Supplementary proofs for `jones13a`)
-   `jones13b.pdf`
-   `smythe13.pdf`
-   `smythe13-supp.zip` (Supplementary code and data for `smythe13`)

The contents of the BibTeX file `ice13.bib` is:

    @Proceedings{ICE-2013,
        booktitle = {Proceedings of The 2nd International Conference on Examples},
        editor = {Jane Smith and Joe Bloggs},
        volume = {57},
        year = {2013},
        shortname = {ICE}
    }

    @InProceedings{jones13a,
        title = {A Meta-Heuristic for Example Invention},
        author = {Jones, Raphael and Howard, Peter},
        pages = {1-9},
        abstract = {This paper considers the problem of inventing examples to convey features of an abstract specification. We provide a straightforward meta-technique to develop examples by writing any old rubbish that fills up space but still reads like English. Experiments show that this approach fares better than ``lorum ipsum'' text in a variety of cases. Running time (including LaTeX mathematics) is $O(1)$.}
    }

    @InProceedings{jones13b,
        title = {Example Generalization via Skim Reading},
        author = {Jones, Raphael and Frankel, David and Deutsch, Mark},
        pages = {10-18},
        abstract = {We show how skim reading a small number of examples can give a good sense of a more abstract specification. This is a complementary paper to (Jones et al. 2013) which shares the same first author as this paper and so must be properly disambiguated.}
    }

    @InProceedings{smythe13,
        title = {Are Three Examples Sufficient?},
        author = {Smythe, Byron and Gordon, Trent},
        pages = {19-26},
        abstract = {We empirically verify that, for the purposes of conveying the details of an abstract BibTeX specification, three example suffice. The related problem of whether three examples are necessary is left as future work.}
    }

* * * * *

1.  Note: gzipped tarballs are not the only way you can send material.
    For larger conferences, we recommend sharing a Dropbox directory or
    otherwise putting the files up on a server we can have access
    to.[↩](#fnref1)

