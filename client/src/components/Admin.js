import React, { Component } from 'react';
import Form from './Form';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: 'stats'
        }
    }

    render() {
        let inputs = [
            {
                id: 1,
                name: 'word',
                type: 'text',
                text: 'tavern word'                
            },
            {
                id: 2,
                name: 'type',
                type: 'option',
                options: [{value: 'adjective', title: 'adjective'}, {value: 'name', title: 'name'}, {value: 'noun', title: 'noun'}, {value: 'any', title: 'any'}]
            },
            {
                id: 3,
                name: 'goes_with',
                type: 'option',
                options: [{value: 'adjective', title: 'adjective'}, {value: 'name', title: 'name'}, {value: 'noun', title: 'noun'}, {value: 'any', title: 'any'}]               
            },
            {
                id: 4,
                name: 'preferred_position',
                type: 'number',
                text: 'preferred_position',
                min: 0,
                max: 4   
            },
            {
                id: 5,
                name: 'prosperity_level',
                type: 'number',
                text: 'prosperity_level',
                min: 0,
                max: 5,   
            }
        ];

        let submit = (event) => {
            event.preventDefault();
            let form = document.querySelector('form');
            let formData = {}

            formData['type'] = document.querySelector('#type').value;
            formData['goes_with'] = document.querySelector('#goes_with').value;

            form.querySelectorAll('input').forEach(input => formData[input.getAttribute('name')] = input.value);

            console.log(formData);

            (async () => {
                const daily = await fetch('/admin/update', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            // const stats = fetch('/stats')
            // .then(response => response.json())
            // .catch(err => console.log(err));

            // overAllStats = await stats;
            // dailyStats = await daily.json();

            // await this.setState({data: overAllStats, dailyStats: dailyStats});
            })();
        };

        return (
            <section className={'data-section wrapper'}>
                <h1>Admin!!</h1>
                <Form inputs={inputs} action={submit}/>
            </section>
        )
    }
}

export default Admin;
