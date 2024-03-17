import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent: any) => {
  const WithAuthComponent = (props: any) => {
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      // Check if user is authenticated
      const authenticated = localStorage.getItem('authenticated');
      if (!authenticated) {
        router.push('/login', { scroll: false })
      } else {
        setAuthenticated(true);
      }
    }, []);

    if (!authenticated) {
      return null; // Or a loading indicator
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
