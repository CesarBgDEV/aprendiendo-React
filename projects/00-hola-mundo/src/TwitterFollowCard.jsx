export function TwitterFollowCard ({ userName, name, isFollowing }) {
    console.log(isFollowing)
    const imageSrc = `https://unavatar.io/${userName}`;
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header" >
                <img src={imageSrc} alt="EL avatar 1" className="tw-followCard-avatar" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
    </article>

    );
};