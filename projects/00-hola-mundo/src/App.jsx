import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    // const formatUserName = (userName) => `@${userName}`;
    // const formatedUserName = (<span>@midudev</span>);

    return(
        <section className='App'>
            <TwitterFollowCard 
            isFollowing userName={"midudev"}
            name={"Jose Perez Robles"} />

            <TwitterFollowCard  
            isFollowing = {false} 
            userName={"cesarBgDEV"} 
            name={"Cesar Balderas Guillen"} />

            <TwitterFollowCard  
            isFollowing userName={"nategentile"}
            name={"Nate Gentile"} />
        </section>
    );
};