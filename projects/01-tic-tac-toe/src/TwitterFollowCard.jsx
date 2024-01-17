import { useState } from "react";

export function TwitterFollowCard ({ userName = 'unknow', children, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/${userName}`;
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header" >
                <img src={imageSrc} alt="EL avatar 1" className="tw-followCard-avatar" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className= {buttonClassName} onClick={handleClick}>
                    {text} {/* CHILDREN */}

                </button>
            </aside>
    </article>

    );
};