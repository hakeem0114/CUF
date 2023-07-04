//API imports
import * as cheerio from 'cheerio'; //handle web scrapping
import axios from 'axios'; //Handle http requests


/*****API RETRIVAL***/

export default async function scrapedData(){
        try {
          const response = await axios.get('https://www.ontariouniversitiesinfo.ca/universities');
          const $ = cheerio.load(response.data);
      
          const universities = [];
      
          $('.university').each((index, element) => {
            const universityName = $(element).find('.university-name').text().trim();
      
            universities.push({
              universityName,
            });
          });
      
          console.log(JSON.stringify(universities, null, 1));
        } catch (error) {
          console.log(error);
        }
      
}

// scrapedData()
// console.log('Test')




