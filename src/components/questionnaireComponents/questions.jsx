//Style Imports
import findLogo from '../../assets/bodyAssets/findLogo.png'
//Api Imports
import universityData from '../../api/getApi'


//Grade Range
const gradeRange = Array.from({ length: 41 }, (_, index) => 60 + index);
const choice  = gradeRange.map((value)=>(
  {
    value: value.toString(),
    text: value.toString(),
  }
))

//University Names
const allNames = []
         universityData()
          .then((data)=>{
              //console.log(data)
              if(data.data){
                data.data.map((obj)=>allNames.push(obj.name))
              //  console.log(allNames)
              }
          })
          .catch((error)=>{
            console.log(error)
          })


export const json = {
  "title": "CUF Questionnaire",
  "description": "Please fill in the form to check your university eligility",
  "logo": findLogo,
  "questionErrorLocation": "bottom",
  "logoHeight": "100px",
  "logoFit": "cover",
  "logoPosition": "right",
  "elements": [
    {
      "type": "dropdown",
      "name": "cadStatus",
      "title": "Are you a canadian or foreign student?",
      "choices": [{
                    "value": "canadian",
                    "text": "Canadian Student"
                  }, {
                    "value": "foreign",
                    "text": "Foreign Student"
                  }],
      "isRequired": true,
    },
    {
      "type": "dropdown",
      "name": "major",
      "title": "What is your chosen major?",
      "choices": [{
                    "value": "engineering",
                    "text": "Engineering"
                  }, {
                    "value": "science",
                    "text": "Sciences"
                  }, {
                    "value": "commerce",
                    "text": "Commerce/Business"
                  }, {
                    "value": "art",
                    "text": "Art"
                  }
                ],
      "isRequired": true,
    },
    {
      "type": "dropdown",
      "name": "grade",
      "title": "What is your grade average?",
      "choices": choice,
      "isRequired": true,
    },
    {
      "name": "tuition",
      "type": "text",
      "title": "Enter your tuition budget (CAD $)",
      "description": "No spaces or symbols",
      "inputType": "number",
      "placeholder": "5000",
      "isRequired": true,
      "validators": [{
        "type": "numeric"
      }]
    },
    {
      "type": "dropdown",
      "name": "finalChoice",
      "title": "Select your top university or view your best match",
      "choices": [{
                    "value": "top",
                    "text": "Top University"
                  }, {
                    "value": "best",
                    "text": "Best Match"
                  }],
      "isRequired": true,
    },
    {
      "type": "dropdown",
      "name": "university",
      "description": "If you selected the best match above, skip this question",
      "title": "Select your chosen university",
      "choices": allNames,
    },

],
  "showQuestionNumbers": true,
  "completeText": "Send",
  "widthMode": "static",
  "width": "800px"
};