import React, { useState, useEffect } from 'react';

export const ChannelContext = React.createContext()

export const ChannelProvider = ({children}) => {
    const [currentChannel, setCurrentChannel] = useState('initial_chat')

return(
    <ChannelContext.Provider
    value={{currentChannel}}> 
    {children}
    </ChannelContext.Provider>
    )
}