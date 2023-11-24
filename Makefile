add-upstream:
	git remote add upstream git@github.com:shanth1/lightsaber-ui.git

merge-dev:
	git stash
	git checkout development
	git pull upstream development

my-merge:
	git merge --no-ff --no-edit origin/development
