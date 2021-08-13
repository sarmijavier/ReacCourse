
import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

	const [user, setUser] = useState({})

	return (
		<div>
				{/* 
					we can define which component
					is shown
				*/}
				
				<UserContext.Provider value={{
					user,
					setUser
				}}>
					<AppRouter />
				</UserContext.Provider>
		</div>
	)
}
