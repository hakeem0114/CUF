export const json = {
  "title": "Job Application Form",
  "description": "Thank you for your interest in working with us. Please fill out the form and send your application. We will get back to you within a week.",
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=b4b071f2-c1f1-4887-a1de-8323825141b6",
  "questionErrorLocation": "bottom",
  "logoHeight": "100px",
  "logoFit": "cover",
  "logoPosition": "right",
  "elements": [{
    "type": "panel",
    "name": "personal-info",
    "title": "Personal Information",
    "elements": [{
      "type": "text",
      "name": "first-name",
      "title": "First name",
      "isRequired": true
    }, {
      "type": "text",
      "name": "last-name",
      "startWithNewLine": false,
      "title": "Last name",
      "isRequired": true
    }, {
      "type": "text",
      "name": "birthdate",
      "title": "Date of birth",
      "inputType": "date",
      "isRequired": true
    }]
  }, {
    "type": "panel",
    "name": "location",
    "title": "Your Location",
    "elements": [{
      "type": "dropdown",
      "name": "country",
      "title": "Country",
      "choicesByUrl": {
        "url": "https://surveyjs.io/api/CountriesExample"
      }
    }, {
      "type": "text",
      "name": "city",
      "title": "City/Town"
    }, {
      "type": "text",
      "name": "zip",
      "startWithNewLine": false,
      "title": "Zip code",
      "inputType": "number",
      "validators": [{
        "type": "numeric"
      }]
    }, {
      "type": "text",
      "name": "address",
      "title": "Street address"
    }]
  }, {
    "type": "text",
    "name": "email",
    "title": "Email",
    "inputType": "email",
    "placeholder": "mail@example.com"
  }, {
    "type": "text",
    "name": "salary",
    "title": "Expected salary (in US dollars)",
    "inputType": "number",
    "validators": [{
      "type": "numeric"
    }]
  }, {
    "type": "dropdown",
    "name": "position",
    "title": "What position are you applying for?",
    "choices": [{
      "value": "frontend",
      "text": "Frontend Developer"
    }, {
      "value": "backend",
      "text": "Backend Developer"
    }, {
      "value": "fullstack",
      "text": "Full-Stack Developer"
    }, {
      "value": "intern",
      "text": "Intern"
    }]
  }, {
    "type": "text",
    "name": "start-date",
    "title": "Date available to start work",
    "isRequired": true,
    "inputType": "date"
  }, {
    "type": "file",
    "name": "resume",
    "title": "Upload your resume",
    "acceptedTypes": "application/pdf"
  }],
  "showQuestionNumbers": false,
  "completeText": "Send",
  "widthMode": "static",
  "width": "800px"
};