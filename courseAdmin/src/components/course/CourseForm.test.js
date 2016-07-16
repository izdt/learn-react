import expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import CourseForm from "./CourseForm";

function setup(saving) {
    let props = {
        course:{}, saving:saving, errors:{}, allAuthors:[{}], 
        onSave:()=>{},
        onChange:()=>{}
    };
    let renderer = TestUtils.createRenderer();  
    renderer.render(<CourseForm {...props} />);
    let output = renderer.getRenderOutput(); 
    return {props, output, renderer}
}

describe('CourseForm via React Test Utils', ()=>{
    it('renders form and h1',()=>{
        const {output} = setup();
        expect(output.type).toBe('form');
        let [h1] = output.props.children;
        expect(h1.type).toBe('h1');        
    });
    it('save button value should be Save when false',()=>{
        const {output} = setup(false);
        let saveButton = output.props.children[5];
        expect(saveButton.props.value).toBe('Save');
    });
    it('save button value should be Saving... when true',()=>{
        const {output} = setup(true);
        let saveButton = output.props.children[5];
        expect(saveButton.props.value).toBe('Saving...');
    });
});
