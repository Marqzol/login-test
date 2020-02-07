import React, {useState} from 'react';
import PropTypes from 'prop-types';

// export class LoginForm extends React.Component {
//     constructor(props) {
//         super(props)
//             this.state = {
//                 name: '',
//                 password: ''
//             }
//     }
// handleName = (value) => {
//             this.setState({name: value})
//          }

//          handlePass = (value) => {
//             this.setState({password: value})
//          }
//     render() {
        
//         return(
//         <div style={{width: '20%', margin: '0 auto'}}>
//         <h2>Login</h2>
//         <div>
//             <input type='text' placeholder='Name' onChange={(e) => this.handleName(e.target.value)}/>
//         </div>
//         <div>
//             <input type='password' placeholder='Password' onChange={(e) => this.handlePass(e.target.value)}/>
//         </div>
//         <button>Submit</button>
//     </div>  
//         )
//     }
// }

export function LoginForm({submitMethod}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmitStatus() {
        return !(name.length > 4 && password.length > 6)
    }

    return(<div style={{width: '20%', margin: '0 auto'}}>
        <h2>Login</h2>
        <Input onChange={e => setName(e.target.value)} placeholder='Name' type='text' value={name}/>
        <Input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
        <button disabled={handleSubmitStatus()} onClick={() => submitMethod(name, password)}>Submit</button>
    </div>        
    )
}

const Input = ({type, placeholder, onChange, value}) => {
    return <div><input type={type} placeholder={placeholder} onChange={onChange} value={value}/></div>
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
}