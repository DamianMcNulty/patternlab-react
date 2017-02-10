import React from 'react'
import { Route, IndexRoute } from 'react-router'

import SGLayout from './templates/SGLayout'
import SGIndex from './pages/SGIndex'
import SGPatterns from './pages/SGPatterns'
import SGNotFound from './pages/SGNotFound'

const PatternLabRoutes = (
    <Route path="style-guide" component={SGLayout}>
      <IndexRoute component={SGIndex}/>
      <Route path="*" component={SGPatterns}/>
      <Route path="not-found" component={SGNotFound}/>
    </Route>
)

export default PatternLabRoutes