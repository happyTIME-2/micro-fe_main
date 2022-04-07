import { Request } from './request';

Request.init('');



const modules = import.meta.glob('./*.ts');

const modulesArray = Object.keys(modules).map(key => modules[key]);

const api = () => { 
  modulesArray.forEach(module => {
    module().then(apiItem => {
      console.log(apiItem.default); 
    })
  })
}

export default api