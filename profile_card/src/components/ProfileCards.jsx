import { useState } from 'react';
import profiles from '../api/profiles.json';

export default function ProfileCards() {
    const [visible, setVisible] = useState({});

    function toggleBio(id) {
        setVisible(prev => ({
            ...prev,
            [id]: !prev[id]   // toggle only that profile’s visibility
        }));
    }

    return (
        <ul className='profiles'>
            {profiles.map(profile => (
                <li key={profile.id}>
                    <div className='profile'>
                        <div className="img">
                            <img src={profile.avatar} alt={profile.name} />
                        </div>
                        <div>
                            <h3>{profile.name}</h3>
                            <p>Age: {profile.age}</p>
                            <button onClick={() => toggleBio(profile.id)}>
                                {visible[profile.id] ? "Hide Bio" : "Show Bio"}
                            </button>

                            {/* Bio always in DOM, but hidden with CSS */}
                            <p style={{ display: visible[profile.id] ? "block" : "none" }}>
                                {profile.bio}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
