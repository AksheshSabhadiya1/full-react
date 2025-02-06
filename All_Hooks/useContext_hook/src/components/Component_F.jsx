import React, { useContext } from "react";
import { UserContext, channelContext } from '../App'


function Component_F() {

    const user = useContext(UserContext)
    const channel = useContext(channelContext)

    return (
        <div>

            {user} - {channel}

            {/* <UserContext.Consumer>
                {user => {
                        return <div>UserContext Value {user}</div>
                    }
                }
            </UserContext.Consumer>

            <div>
                <UserContext.Consumer>
                    {user => {
                            return (
                                <channelContext.Consumer>
                                    {channel => {
                                            return <div>UserContext is {user} & channelContext is {channel}</div>
                                        }
                                    }
                                </channelContext.Consumer>
                            )
                        }
                    }
                </UserContext.Consumer>
            </div> */}
        </div>
    )
}

export default Component_F