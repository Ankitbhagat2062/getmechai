

import Dashboard from '@/components/Dashboard';

const dashboard = () => {

  return (
    <>
      <Dashboard />
    </>
  )
}

export default dashboard

export async function generateMetadata() {
    return {
        title:`Dashboard - Get Me A Tea`,
        description: `Welcome to your dashboard on Get Me A Tea! Here, you can manage your profile, view your payment history, and update your account settings. Stay connected and enjoy the benefits of being a part of our tea-loving community!`
    }
}
