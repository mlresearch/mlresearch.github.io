# PMLR Homepage

This is the home page of the Proceedings of Machine Learning Research, the offshoot of JMLR associated with workshop and conference proceedings.

Creation of a new proceedings is two step. Firstly, when a new proceedings is approved carry out the following steps.

1. Each proceedings is set up as a different repository under the mlresearch github organization. 
2. To create a new proceedings, simply create a repo named ```vXX``` where ```XX``` is the volume number. 
3. In the description of the proceedings add the brief overview (e.g. Proceedings of AISTATS 2012).
4. Add the PMLR Group to the repository and give them "write" permmission.

You can carry out these steps by following [this link](https://github.com/organizations/mlresearch/repositories/new).

A proceedings goes live when the papers are ready. These need to be checked into the ```gh-pages``` branch of the proceedings.

Expand the proceedings as required onto a local drive in your computer, let's call it ```conf101```

Now run the ```create_volume.sh``` script

```bash
create_volume.sh XX conf101
```
This should ```rsync``` the files from the proceedings to a new directory ```vXX``` which it creates. It then creates the relevant ```gh-pages``` branch on github and moves the proceedings into place. Run this script from a sub-directory where you want the repo to be hosted on your machine (for example in my case I run it in ```/home/username/mlresearch/```).

And there you have it, the proceedings should now be online. 


