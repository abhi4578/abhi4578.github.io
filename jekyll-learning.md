## Installing github page jekyll gem
1. Add following in 'Gemfile'
```bash
gem 'github-pages', group: :jekyll_plugins
```
2. Install github pages 
```bash
gem install github-pages
```
3. Run 
```bash
bundle install 
```
Ref: https://github.com/github/pages-gem?tab=readme-ov-file

4. Running jekyll locally 
```bash
bundle exec jekyll serve --livereload
```

