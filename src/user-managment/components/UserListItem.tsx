import React, { LegacyRef, useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

import { User } from '../../common/types/User';

interface Props {
    user: User;
    removeItem: (id: string) => void;
}

export const UserListItem = ({ user, removeItem }: Props) => {
    const nameRef: LegacyRef<HTMLInputElement> = useRef(null);
    const [name, setName] = useState('');

    useEffect(() => setName(user.name), [user]);

    const editName = useCallback(() => {
        if (nameRef) {
            nameRef.current.focus();
        }
    }, [user, nameRef]);

    const handleRemove = useCallback(() => {
        removeItem(user.id);
    }, [user]);

    const handleNameChange = useCallback(debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(Math.random())
        setName(event.target.value);
    }, 300), []);

    const handler = useCallback(debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(Math.random())
        setName(event.target.value);
    }, 100), []);

    return <div>
        <input ref={nameRef} onChange={(e) => handler(e)} value={name}/>
        <div className="controls">
            <button onClick={editName}>
                <i title="name" className="fas fa-pen" />
            </button>
            <button onClick={handleRemove}>
                <i title="remove" className="fas fa-backspace" />
            </button>
        </div>
    </div>;
};
