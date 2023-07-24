# Project Description

For this project I built a web tool that allows users to run Natural Language Processing (NLP) on third party articles found on various websites. Meaningcloud was used for the API calls. The API aids classifying the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## User Interaction

The user accesses the site and is presented with a simple form. The form has one input field which requires a URL. After entering the URL and hitting submit, the user receives Polarity and Subjectivity as output. Empty input field is not allowed and will result in an error message.

## Offline Content

The application uses service workers to show the content when offline.

### Dependencies

- Webpack
- Meaningcloud
- NPM