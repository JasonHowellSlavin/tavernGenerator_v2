import React from 'react';

export default function Form ({inputs, action}) {
    return (
        <form>
           {inputs.map((input) => {
               if (input.type === 'option') {
                   return (
                       <div key={`id:${input.id}`}>
                            <label htmlFor={`${input.name}`}>{input.name}</label>
                            <select id={input.name}>
                                {input.options.map(option => <option key={`key:${option.value}`} value={option.value}>{option.title}</option>)}
                            </select>
                       </div>
                   );
                } else if (input.type === 'number') {
                    return (
                        <div key={`id:${input.id}`}>
                            <label htmlFor={`${input.name}`}>{input.name} {`${input.min}-${input.max}`}</label>
                            <input type={input.type} id={input.name} name={input.name} min={input.min} max={input.max}></input>
                        </div>
                    )
                } else {
                    return (
                        <div key={`id:${input.id}`}>
                            <label htmlFor={`${input.name}`}>{input.name}</label>
                            <input type={input.type} id={input.name} name={input.name}></input>
                        </div>
                    )
               }
           })}
           <button type="submit" onClick={action}>Submit</button>
        </form>
    )
}