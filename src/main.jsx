import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './components/home.component.jsx'
import { Meeting } from './components/users/meeting.component.jsx'
import { FormOrderMeeting } from './components/users/formOrderMeeting.component.jsx'
import { About } from './components/users/about.component.jsx'
import { Admin } from './components/manager/admin.component.jsx'
import { Details } from './components/manager/details.component.jsx'
import { Service } from './components/manager/service.component.jsx'
import { Orders } from './components/manager/orders.componenet.jsx'
import { Customers } from './components/manager/customers.component.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: '',
        Component: Home, 
      },
      {
        path: '/meeting',
        Component: Meeting,
      },
      {
          path: '/meeting/form/:id',
          Component: FormOrderMeeting,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/admin',
        Component: Admin,
        children: [
          {
            path: '/admin/details',
            Component: Details
          },
          {
            path: '/admin/service',
            Component: Service
          },
          {
            path: '/admin/orders',
            Component: Orders
          },
          {
            path: '/admin/customers',
            Component: Customers
          }
        ]
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
