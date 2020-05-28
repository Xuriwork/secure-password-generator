import React from 'react';

export const Meter = ({ password, dictionary }) => {

    let strength = 0;

    let validations = [
        (password.length > 12),
        (password.search(/[A-Z]/) > -1),
        (password.search(/[0-9]/) > -1),
        (password.search(/[!@#$%^&*()/\\_+~`|}{[\]:;?><,.\-=]/) > -1)
    ];

    strength = validations.reduce((acc, current) => acc + current);

    const createPasswordLabel = () => {
        const getKeyFromValue = (value) => Object.keys(dictionary).find(key => dictionary[key] === value); 

        switch (strength) {
            case 0: return getKeyFromValue(dictionary.Weak);
            case 1: return getKeyFromValue(dictionary.Weak);
            case 2: return getKeyFromValue(dictionary.Okay);
            case 3: return getKeyFromValue(dictionary.Good);
            case 4: return getKeyFromValue(dictionary.Strong);
            default: return getKeyFromValue(dictionary.Weak);
        }
    };

    return (
        <div className='password-strength-meter'>
            <progress 
                className={`password-strength-meter-progress strength-${createPasswordLabel(strength)}`}
                value={strength}
                max='4'
            />
            <label className='password-strength-meter-label'>
                <strong>Password strength: </strong>{createPasswordLabel(strength)}
            </label>
        </div>
    );
};

export default Meter;