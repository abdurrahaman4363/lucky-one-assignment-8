import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <h3>How react works???</h3>
            <p style={{textAlign:'left'}}>React based on a set of components.Ract has four types of components which is important for making a large website.Those components are reuseable.React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.</p>
            <h3>Props vs State???</h3>
            <p style={{textAlign:'left'}}>Props is passed data from one component to another.State is passed within the component only.props is immutable that means it's data cannot be modified.State is mutable that means it's data can be modified.Props can be used with state and functional components. And we can pass the array data function data array of object data in props.On the other hand State can be used only with the state components.</p>
            <h3>How useStage works???</h3>
            <p style={{textAlign:'left'}}>useState takes one initial paramerter.it destructure two variable one is normal varible another is a function. this function set a value and this value will return previous declared variable.useState is a hook that allows state variables in functional components </p>
        </div>
    );
};

export default Footer;