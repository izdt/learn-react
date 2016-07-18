import {authorsFormattedForDropdown} from './selector';
import expect from 'expect';

describe('Author Selectors',()=>{
 	describe('authorsFormattedForDropdown',()=>{
         it('Should return author data formated',()=>{
             const authors = [
                {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'},
                {id: 'dan-wahlin', firstName: 'Dan', lastName: 'Wahlin'}
             ];
             const formatedAuthors = [
                 {value:'cory-house', text:'Cory House'},
                 {value:'scott-allen', text:'Scott Allen'},
                 {value:'dan-wahlin', text:'Dan Wahlin'}
             ];
             expect(authorsFormattedForDropdown(authors)).toEqual(formatedAuthors);
         });
    });
});