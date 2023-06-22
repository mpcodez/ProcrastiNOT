require
/*
import {Configuration, OpenAIApi} from 'openai';
*/

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function isABlockedCategory(categories, url) {
    let response = await fetch(url);
    const content = await response.text();
    
    let regex = /(?<=<title>)(.*)(?=<\/title>)/g;

    let title = content.match(regex)[0];

    for (let category of categories) {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Is ${title} related to ${category}? Yes or No?`,
            temperature: 0.0
        })

        let output = completion.data.choices[0].text 

        if (output.includes('Yes')) {
            return true;
        }
    }

    return false;
}
/* TEST CODE
console.log(await isABlockedCategory(['game'], 'https://www.youtube.com/watch?v=TlB_eWDSMt4'));
*/