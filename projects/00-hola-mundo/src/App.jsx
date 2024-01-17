import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';
const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    },
    {
        userName: 'cesarBgDEV',
        name: 'Cesar Balderas Guillen',
        isFollowing: 'true'
    }
];
export function App() {

    // const formatUserName = (userName) => `@${userName}`;
    // const formatedUserName = (<span>@midudev</span>);
    // return(
    //     <section className='App'>

    //         {/* Aquí lo estoy pasando el name como PROP */}
    //         {/* <TwitterFollowCard 
    //         isFollowing userName={"midudev"}
    //         name={"Jose Perez Robles"} />

    //         <TwitterFollowCard  
    //         isFollowing = {false} 
    //         userName={"cesarBgDEV"} 
    //         name={"Cesar Balderas Guillen"} />

    //         <TwitterFollowCard  
    //         isFollowing userName={"nategentile"}
    //         name={"Nate Gentile"} /> */}


    //         {/* <TwitterFollowCard initialIsFollowing={false} userName={"midudev"}>
    //             Miguel Angel Duran
    //         </TwitterFollowCard>

    //         <TwitterFollowCard initialIsFollowing={true} userName={"cesarBgDEV"}>
    //             Cesar Balderas Guillen
    //         </TwitterFollowCard>

    //         <TwitterFollowCard >
    //             Nate Gentile
    //         </TwitterFollowCard>

    //         <TwitterFollowCard initialIsFollowing={true} userName={"SaraRbs"}>
    //             Sara Robles Ramirez
    //         </TwitterFollowCard> */}


    //     </section>
    // );

    return(
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
                ))
            }
        </section>
    )
};