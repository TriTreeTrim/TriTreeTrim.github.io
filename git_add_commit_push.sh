# export GITHUB_TOKEN= ...
export GITHUB_USER=TriTreeTrim
export GITHUB_REPOSITORY=TriTreeTrim/TriTreeTrim.github.io
git add .
git commit -m "update"
git push https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}
