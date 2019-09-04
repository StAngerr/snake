import * as React from 'react';
import { History } from 'history';

interface Props {
    history: History;
}

export const Login = ({ history }: Props) => {
    const login = () => {
        localStorage.setItem('login', 'true');
        history.push('/home');
    };

    return <section className="section">
            <div className="container tile is-vertical is-6">
                <h2 className="title">Snake 🐍 </h2>
                <form>
                    <div className="field">
                        <label className="label">Email</label>
                        <input className="input" type="text"/>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <input className="input" type="password"/>
                    </div>
                    <div className="control">
                        <button className="button" type="submit" onClick={login}>Login</button>
                    </div>
                </form>
            </div>
    </section>;
};
