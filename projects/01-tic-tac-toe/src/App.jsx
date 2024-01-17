import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    // const formatUserName = (userName) => `@${userName}`;
    // const formatedUserName = (<span>@midudev</span>);

    return(
        <section className='App'>

            {/* Aquí lo estoy pasando el name como PROP */}
            {/* <TwitterFollowCard 
            isFollowing userName={"midudev"}
            name={"Jose Perez Robles"} />

            <TwitterFollowCard  
            isFollowing = {false} 
            userName={"cesarBgDEV"} 
            name={"Cesar Balderas Guillen"} />

            <TwitterFollowCard  
            isFollowing userName={"nategentile"}
            name={"Nate Gentile"} /> */}


            <TwitterFollowCard initialIsFollowing={false} userName={"midudev"}>
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard initialIsFollowing={true} userName={"cesarBgDEV"}>
                Cesar Balderas Guillen
            </TwitterFollowCard>

            <TwitterFollowCard >
                Nate Gentile
            </TwitterFollowCard>

            <TwitterFollowCard initialIsFollowing={true} userName={"SaraRbs"}>
                Sara Robles Ramirez
            </TwitterFollowCard>

        </section>
    );
};