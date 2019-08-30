import * as React from 'react';

export const Login = () => {

    const login = () => {

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
