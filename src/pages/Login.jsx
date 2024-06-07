import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@chakra-ui/react';
import { SupabaseAuthUI, useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" maxWidth="400px">
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;