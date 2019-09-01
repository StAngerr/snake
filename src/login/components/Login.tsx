import * as React from 'react';
import { History } from 'history';

interface Props {
    history: History;
}

export const Login = ({ history }: Props) => {

    const login = () => {
        history.push('/home');
    }

    return <section className="login-page">
        <section className="login-form-section">
            <h2>Please login</h2>
            <form>
                <input type="text"/>
                <input type="password"/>
                <button type="submit" onClick={login}>Login</button>
            </form>
        </section>
    </section>;
};
