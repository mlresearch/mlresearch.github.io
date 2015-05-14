---
layout: page
title: Proceedings of Machine Learning Research
tagline: 
---

ISSN: 1938-7228
---------------

The Proceedings of Machine Learning Research is a series
aimed specifically at publishing work presented at workshops and
conferences. Each volume is separately titled and associated with a
particular workshop or conference and will be pulished online on the
PMLR web site. Authors will retain copyright and individual volume
editors are free to make additional hardcopy publishing arrangements
(see for example the [Challenges in Machine
Learning](http://www.mtome.com/Publications/CiML/ciml.html) series which
includes free PDFs and low cost hard copies), but JMLR will not produce
hardcopies of these volumes.

Editors
-------

The Series Editor is [Neil
Lawrence](http://staffwww.dcs.shef.ac.uk/people/N.Lawrence/). The
Production Editor is [Mark
Reid](http://people.cecs.anu.edu.au/user/2675). Please send proposals
for new volumes under this series to Neil via e-mail:
[N.Lawrence![](/images/atr.gif)dcs.shef.ac.uk](javascript:GoAddress('N.Lawrence','dcs.shef.ac.uk');).
Each proposal should include:

-   A brief description of the event's scope and topics to be covered.
-   A description of the review process for the proceedings.
-   The names and short CVs (a few lines) of the proposed Proceedings
    Editors.

For frequently asked questions on preparing proceedings please see the
[FAQ](./faq.html).

News
----
{% for volume in site.data.proceedings %}
{% if volume.date %}
-   As of {{ volume.date }} [Volume {{ volume.number }}]({{ volume.repo }}) **{{ volume.title }}** is available
{% endif %}
{% endfor %}

Scheduled Volumes
-----------------

{% for volume in site.data.proceedings %}
{% if !volume.date %}
-   Volume {{ volume.number }} assigned to **{{ volume.title }}** 
{% endif %}
{% endfor %}

* * * * *
