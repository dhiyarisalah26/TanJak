import { Button, Card, styled } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '24px',
  padding: '24px !important',
  [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '24px !important',
  background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const Paragraph = styled('p')(({ theme }) => ({
  margin: 0,
  paddingTop: '24px',
  paddingBottom: '24px',
  color: theme.palette.text.secondary,
}));

const UpgradeCard = () => {
  return (
    <CardRoot>
      <StyledCard elevation={0}>
        <Title>Eksplorasi Kota</Title>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664270097594!2d106.82496411476893!3d-6.175392395529166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1670225117145!5m2!1sen!2sid"
        ></iframe>

        {/* <Paragraph>
          Upgrade to <b>MatX PRO</b> for <br /> more resources
        </Paragraph> */}

        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}
        >
          Mulai
        </Button>
      </StyledCard>
    </CardRoot>
  );
};

export default UpgradeCard;
