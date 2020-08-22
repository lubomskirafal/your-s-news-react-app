
const getUserLang = ()=>{
    const userLang = navigator.language;
    const regex = /[/-]*[A-Z]/g;
    return userLang.replace(regex,'');
  };

const getUserCountry = (lang)=> {
    let country;
    switch(lang) {
        case 'pl':
          country = 'polska';
          break;
        case 'en':
            country =  'usa';
            break;
        case 'sq':
            country = 'albania';
            break;
        case 'az':
            country = 'azerbaijan';
            break;
        case 'eu':
            country = 'basque';
            break;
        case 'be':
            country = 'belarus';
            break;
        case 'bn':
            country = 'bengal';
            break;
        case 'bs':
            country = 'bosnia';
            break;
        case 'bg':
            country = 'bulgaria';
            break;
        case 'ca':
            country = 'catalania';
            break;
        case 'hr':
            country = 'croatia';
            break;
        case 'cs':
            country = 'czech republic';
            break;
        case 'da':
            country = 'danmark';
            break;
        case 'nl':
            country = 'netherlands';
            break;
        case 'eo':
            country = 'earth';
            break;
        case 'et':
            country = 'estonia';
            break;
        case 'fo':
            country = 'faroes';
            break;
        case 'fr':
            country = 'france';
            break;
        case 'fy':
            country = 'frisia';
            break;
        case 'gl':
            country = 'galicia';
            break;
        case 'ka':
            country = 'georgia';
            break;
        case 'de':
            country = 'germany';
            break;
        case 'el':
            country = 'greece';
            break;
        case 'iw':
            country = 'israel';
            break;
        case 'hi':
            country = 'india';
            break;
        case 'hu':
            country = 'hungary';
            break;
        case 'is':
            country = 'island';
            break;
        case 'id':
            country = 'indonesia';
            break;
        case 'ga':
            country = 'irelanf';
            break;
        case 'it':
            country = 'italy';
            break;
        case 'ja':
            country = 'japan';
            break;
        case 'lv':
            country = 'latvia';
            break;
        case 'lt':
            country = 'lithuania';
            break;
        case 'mk':
            country = 'macedonia';
            break;
        case 'ne':
            country = 'nepal';
            break;
        case 'no':
            country =  'norwegia';
            break;
        case 'nn':
            country = 'nynorsk';
            break;
        case 'pt':
            country = 'portugal';
            break;
        case 'pa':
            country = 'punjab';
            break;
        case 'ro':
            country = 'romania';
            break;
        case 'sr':
            country = 'serbai';
            break;
        case 'sk':
            country = 'slovakia';
            break;
        case 'sl':
            country = 'slovenia';
            break;
        case 'es':
            country = 'spain';
            break;
        case 'su':
            country = 'sudan';
            break;
        case 'sv':
            country = 'sweden';
            break;
        case 'th':
            country = 'thailand';
            break;
        case 'tr':
            country = 'turkey';
            break;
        case 'uk':
            country = 'ukraine';
            break;
        case 'vi':
            country = 'vietnam';
            break;
        default:
            country = lang;
    };
    return country;
};

export {
    getUserCountry,
    getUserLang
}





	