merge-dev:
	git stash
	git checkout development
	git remote add upstream https://github.com/shanth1/lightsaber-ui.git
	git fetch upstream
	git merge upstream/development	
	git push origin/development

my-merge:
	git merge --no-ff --no-edit origin/development
